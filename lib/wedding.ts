export type EventIcon = 'ganesh' | 'haldi' | 'music' | 'mehndi' | 'cheers' | 'baraat' | 'varmala' | 'phere'

export type DressTone = 'gold' | 'rose' | 'green' | 'maroon' | 'ivory'

export type WeddingEvent = {
  name: string
  description: string
  time: string
  start: string
  durationHours: number
  dressCode: string
  dressTone: DressTone
  icon: EventIcon
}

export type WeddingDay = {
  date: string
  title: string
  venueId: string
  events: WeddingEvent[]
}

export type Venue = {
  id: string
  label: string
  name: string
  subtitle: string
  address: string
  dates: string
  mapsUrl: string
}

export type Contact = {
  name: string
  relation: string
  phone: string
}

export const wedding = {
  groom: 'Arjun',
  bride: 'Meera',
  hashtag: '#ArjunWedsMeera',
  dateLabel: '10 — 12 December 2026',
  city: 'Udaipur',
  region: 'Rajasthan',
  timezone: 'Asia/Kolkata',
  countdownTo: '2026-12-12T21:00:00+05:30',
  countdownLabel: 'Until the Phere',
  blessing: '॥ श्री गणेशाय नमः ॥',
  shloka: ['वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ', 'निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा'],
  welcome: 'पधारो सा',
  invitationEyebrow: 'Aap sabhi amantrit hain',
  invitationMessage:
    'Some moments are far too precious to celebrate alone. As {groom} begins a new chapter with {bride}, we ask for your presence, your blessings and your laughter through three days of rasams, colour and music.',
  venues: [
    {
      id: 'home',
      label: 'Where it all begins',
      name: 'हमारा घर',
      subtitle: 'Our family home',
      address: '14, Fateh Sagar Road, Udaipur, Rajasthan',
      dates: '10 December 2026',
      mapsUrl: 'https://maps.google.com/?q=Fateh+Sagar+Road+Udaipur',
    },
    {
      id: 'palace',
      label: 'Mehndi, Sangeet and Phere',
      name: 'The Lake Courtyard',
      subtitle: 'The wedding venue',
      address: 'Lake Pichola, Udaipur, Rajasthan',
      dates: '11 & 12 December 2026',
      mapsUrl: 'https://maps.google.com/?q=Lake+Pichola+Udaipur',
    },
  ] satisfies Venue[],
  days: [
    {
      date: '2026-12-10',
      title: 'Ganesh Puja, Haldi and more',
      venueId: 'home',
      events: [
        {
          name: 'Ganesh Puja',
          description: 'Seeking Shri Ganesh’s blessings as the wedding rituals begin.',
          time: '9:00 AM onwards',
          start: '09:00',
          durationHours: 2,
          dressCode: 'Pooja attire',
          dressTone: 'gold',
          icon: 'ganesh',
        },
        {
          name: 'Haldi',
          description: 'Turmeric, laughter and a little chaos — wear something you don’t mind staining.',
          time: '11:30 AM onwards',
          start: '11:30',
          durationHours: 3,
          dressCode: 'Shades of yellow',
          dressTone: 'gold',
          icon: 'haldi',
        },
        {
          name: 'Mahila Sangeet',
          description: 'Dholak, folk songs and the aunties’ legendary dance-off.',
          time: '7:00 PM onwards',
          start: '19:00',
          durationHours: 4,
          dressCode: 'Festive ethnic',
          dressTone: 'rose',
          icon: 'music',
        },
      ],
    },
    {
      date: '2026-12-11',
      title: 'Mehndi and Sangeet Night',
      venueId: 'palace',
      events: [
        {
          name: 'Mehndi',
          description: 'Henna, sweets and songs — colour everywhere.',
          time: '11:00 AM onwards',
          start: '11:00',
          durationHours: 4,
          dressCode: 'Shades of green',
          dressTone: 'green',
          icon: 'mehndi',
        },
        {
          name: 'Sangeet & Cocktails',
          description: 'Both families take the stage for an evening of music and dance.',
          time: '7:30 PM onwards',
          start: '19:30',
          durationHours: 4,
          dressCode: 'Glam Indo-western',
          dressTone: 'maroon',
          icon: 'cheers',
        },
      ],
    },
    {
      date: '2026-12-12',
      title: 'Baraat, Varmala and Phere',
      venueId: 'palace',
      events: [
        {
          name: 'Baraat',
          description: 'The groom arrives with music, dhol and a dancing procession.',
          time: '5:00 PM',
          start: '17:00',
          durationHours: 2,
          dressCode: 'Safa & sherwani',
          dressTone: 'rose',
          icon: 'baraat',
        },
        {
          name: 'Varmala',
          description: 'The exchange of garlands under the evening sky.',
          time: '7:00 PM',
          start: '19:00',
          durationHours: 1,
          dressCode: 'Traditional finery',
          dressTone: 'maroon',
          icon: 'varmala',
        },
        {
          name: 'Phere',
          description: 'Seven vows around the sacred fire, seven lifetimes together.',
          time: '9:00 PM onwards',
          start: '21:00',
          durationHours: 3,
          dressCode: 'Ivory & pastels',
          dressTone: 'ivory',
          icon: 'phere',
        },
      ],
    },
  ] satisfies WeddingDay[],
  rsvpMessage: 'For directions, stay or anything at all — please give us a call.',
  contacts: [
    { name: 'Rajesh Sharma', relation: 'Father of the groom', phone: '+91 98765 43210' },
    { name: 'Sunita Sharma', relation: 'Mother of the groom', phone: '+91 98765 43211' },
    { name: 'Karan Sharma', relation: 'Brother of the groom', phone: '+91 98765 43212' },
  ] satisfies Contact[],
}

export function parseDay(date: string) {
  const [y, m, d] = date.split('-').map(Number)
  const value = new Date(Date.UTC(y, m - 1, d))
  return {
    weekdayShort: value.toLocaleDateString('en-IN', { weekday: 'short', timeZone: 'UTC' }),
    weekdayLong: value.toLocaleDateString('en-IN', { weekday: 'long', timeZone: 'UTC' }),
    day: String(d).padStart(2, '0'),
    month: value.toLocaleDateString('en-IN', { month: 'short', timeZone: 'UTC' }),
  }
}

function toCalendarStamp(date: string, time: string, addHours = 0) {
  const [y, m, d] = date.split('-').map(Number)
  const [hh, mm] = time.split(':').map(Number)
  const value = new Date(Date.UTC(y, m - 1, d, hh + addHours, mm))
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${value.getUTCFullYear()}${pad(value.getUTCMonth() + 1)}${pad(value.getUTCDate())}T${pad(value.getUTCHours())}${pad(value.getUTCMinutes())}00`
}

export function googleCalendarUrl(event: WeddingEvent, day: WeddingDay, venue?: Venue) {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${event.name} · ${wedding.groom} & ${wedding.bride}`,
    dates: `${toCalendarStamp(day.date, event.start)}/${toCalendarStamp(day.date, event.start, event.durationHours)}`,
    ctz: wedding.timezone,
    details: `${event.description}\nDress code: ${event.dressCode}`,
    location: venue ? `${venue.name}, ${venue.address}` : '',
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}
