import { MessageCircle, Phone } from 'lucide-react'
import { wedding } from '@/lib/wedding'
import { SectionHeading } from './section-heading'

export function Rsvp() {
  return (
    <section id="rsvp" aria-labelledby="rsvp-title" className="scroll-mt-4 px-4 py-16">
      <SectionHeading id="rsvp-title" eyebrow="Do let us know" title="RSVP" />
      <p className="mx-auto mt-6 max-w-md text-pretty text-center text-muted-foreground">{wedding.rsvpMessage}</p>
      <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {wedding.contacts.map((c) => {
          const digits = c.phone.replace(/[^\d]/g, '')
          return (
            <li key={c.phone} className="flex flex-col items-center gap-1 rounded-3xl border border-border bg-card p-6 text-center shadow-sm">
              <p className="text-lg font-medium">{c.name}</p>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{c.relation}</p>
              <p className="mt-2 tabular-nums text-foreground/80">{c.phone}</p>
              <div className="mt-4 flex gap-2">
                <a
                  href={`tel:+${digits}`}
                  className="btn-maroon flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em]"
                >
                  <Phone className="size-3.5" aria-hidden="true" />
                  Call
                  <span className="sr-only"> {c.name}</span>
                </a>
                <a
                  href={`https://wa.me/${digits}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary hover:bg-secondary"
                >
                  <MessageCircle className="size-3.5" aria-hidden="true" />
                  WhatsApp
                  <span className="sr-only"> {c.name}</span>
                </a>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
