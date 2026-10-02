import { MapPin, Navigation } from 'lucide-react'
import { wedding } from '@/lib/wedding'
import { SectionHeading } from './section-heading'

export function Venues() {
  return (
    <section id="venues" aria-labelledby="venues-title" className="px-4 py-16">
      <SectionHeading id="venues-title" eyebrow="Getting there" title="Our Venue" />
      <ul className="mx-auto mt-10 flex max-w-2xl flex-col gap-5">
        {wedding.venues.map((venue) => (
          <li
            key={venue.id}
            className="flex flex-col items-center gap-3 rounded-t-[6rem] rounded-b-3xl border border-gold/40 bg-card px-6 pt-12 pb-8 text-center shadow-[0_20px_40px_-30px_rgba(90,40,30,0.4)]"
          >
            <h3 className="text-balance text-4xl font-extralight tracking-tight text-primary">{venue.name}</h3>
            <p className="max-w-sm text-pretty text-muted-foreground">{venue.subtitle}</p>
            <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-foreground/80">
              <MapPin className="size-3.5" aria-hidden="true" />
              {venue.address}
            </p>
            <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">{venue.description}</p>
            <a
              href={venue.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-maroon mt-3 flex items-center gap-2 rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] transition-transform hover:-translate-y-0.5"
            >
              <Navigation className="size-3.5" aria-hidden="true" />
              Get Directions
              <span className="sr-only">: {venue.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
