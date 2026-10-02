'use server'

export type RsvpState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  attending?: boolean
}

const GUEST_OPTIONS = ['1', '2', '3', '4', '5+']

export async function submitRsvp(_prev: RsvpState, formData: FormData): Promise<RsvpState> {
  if (String(formData.get('company') ?? '').trim()) {
    return { status: 'success', attending: true }
  }

  const name = String(formData.get('name') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const attendance = String(formData.get('attendance') ?? '')
  const guestsRaw = String(formData.get('guests') ?? '1')

  if (name.length < 2 || name.length > 100) {
    return { status: 'error', message: 'Please enter your name.' }
  }
  if (phone && !/^[+\d][\d\s-]{6,19}$/.test(phone)) {
    return { status: 'error', message: 'Please enter a valid contact number.' }
  }
  if (attendance !== 'accept' && attendance !== 'decline') {
    return { status: 'error', message: 'Please let us know if you will join us.' }
  }

  const attending = attendance === 'accept'
  const guests = attending && GUEST_OPTIONS.includes(guestsRaw) ? guestsRaw : '0'

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL
  if (!webhookUrl) {
    return { status: 'error', message: 'RSVP is not configured yet. Please try again later.' }
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        phone,
        attending: attending ? 'Joyfully Accept' : 'Regretfully Decline',
        guests,
        submittedAt: new Date().toISOString(),
      }),
      cache: 'no-store',
    })
    if (!res.ok) throw new Error(`Sheets responded ${res.status}`)
  } catch (error) {
    console.error('RSVP submission failed:', error)
    return { status: 'error', message: 'Something went wrong. Please try again.' }
  }

  return { status: 'success', attending }
}
