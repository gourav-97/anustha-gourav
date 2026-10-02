'use client'

import { useActionState, useState } from 'react'
import { Heart, Loader2 } from 'lucide-react'
import { submitRsvp, type RsvpState } from '@/app/actions/rsvp'
import { wedding } from '@/lib/wedding'
import { SectionHeading } from './section-heading'

const GUEST_OPTIONS = [
  { value: '1', label: '1 (Just me)' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5+', label: '5+' },
]

const inputClass =
  'w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20'

const labelClass = 'text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-muted-foreground'

export function Rsvp() {
  const [state, formAction, pending] = useActionState<RsvpState, FormData>(submitRsvp, { status: 'idle' })
  const [attendance, setAttendance] = useState<'accept' | 'decline'>('accept')

  return (
    <section id="rsvp" aria-labelledby="rsvp-title" className="scroll-mt-4 px-4 py-16">
      <SectionHeading id="rsvp-title" eyebrow="Do let us know" title="RSVP" />
      <p className="mx-auto mt-6 max-w-md text-pretty text-center text-muted-foreground">{wedding.rsvpMessage}</p>

      <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-gold/40 bg-card p-6 shadow-[0_30px_60px_-40px_rgba(90,40,30,0.45)] md:p-8">
        {state.status === 'success' ? (
          <div className="flex flex-col items-center gap-3 py-8 text-center" role="status">
            <div className="btn-maroon flex size-14 items-center justify-center rounded-full">
              <Heart className="size-6" aria-hidden="true" />
            </div>
            <p className="text-3xl font-extralight tracking-tight">Thank you!</p>
            <p className="max-w-sm text-pretty text-muted-foreground">
              {state.attending
                ? `We can't wait to celebrate with you in ${wedding.city}.`
                : 'You will be missed. Thank you for your blessings.'}
            </p>
          </div>
        ) : (
          <form action={formAction} className="flex flex-col gap-6">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-primary">Guest Details</p>

            <div className="hidden" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className={labelClass}>
                Your Name <span className="text-primary">*</span>
              </label>
              <input id="name" name="name" type="text" required maxLength={100} autoComplete="name" placeholder="Enter your full name" className={inputClass} />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className={labelClass}>
                Contact Number
              </label>
              <input id="phone" name="phone" type="tel" maxLength={20} autoComplete="tel" placeholder="+91 98765 43210" className={inputClass} />
            </div>

            <fieldset className="flex flex-col gap-2">
              <legend className={`${labelClass} mb-2`}>Will you join us?</legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { value: 'accept' as const, label: 'Joyfully Accept' },
                  { value: 'decline' as const, label: 'Regretfully Decline' },
                ].map((opt) => (
                  <label
                    key={opt.value}
                    className={`flex cursor-pointer items-center justify-center rounded-2xl border px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-primary/30 ${
                      attendance === opt.value ? 'btn-maroon border-transparent' : 'border-border bg-background text-foreground hover:bg-secondary'
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value={opt.value}
                      checked={attendance === opt.value}
                      onChange={() => setAttendance(opt.value)}
                      className="sr-only"
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </fieldset>

            {attendance === 'accept' && (
              <div className="flex flex-col gap-2">
                <label htmlFor="guests" className={labelClass}>
                  Guests Size
                </label>
                <select id="guests" name="guests" defaultValue="1" className={inputClass}>
                  {GUEST_OPTIONS.map((g) => (
                    <option key={g.value} value={g.value}>
                      {g.label}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {state.status === 'error' && (
              <p role="alert" className="rounded-2xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-center text-sm text-destructive">
                {state.message}
              </p>
            )}

            <button
              type="submit"
              disabled={pending}
              className="btn-maroon flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] transition-transform hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-70"
            >
              {pending && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
              {pending ? 'Sending' : 'Submit RSVP'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
