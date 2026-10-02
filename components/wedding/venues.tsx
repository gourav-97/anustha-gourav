import { Navigation } from 'lucide-react'
import { wedding } from '@/lib/wedding'
import { SectionHeading } from './section-heading'

export function Venues() {
  return (
    <section id="venues" aria-labelledby="venues-title" className="px-4 py-16">
      <SectionHeading id="venues-title" eyebrow="Getting there" title="Venues" />
      <ul className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-2">
        {wedding.venues.map((venue) => (
          <li key={venue.id} className="flex flex-col gap-2 rounded-3xl border border-border bg-card p-6 shadow-[0_20px_40px_-30px_rgba(90,40,30,0.4)]">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[oklch(0.5_0.09_75)]">{venue.label}</p>
            <h3 className="font-deva text-3xl text-primary">{venue.name}</h3>
            <p className="text-sm text-muted-foreground">{venue.subtitle}</p>
            <p className="mt-2 text-foreground/80">{venue.address}</p>
            <p className="text-sm text-muted-foreground">{venue.dates}</p>
            <a
              href={venue.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-maroon mt-4 flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] transition-transform hover:-translate-y-0.5"
            >
              <Navigation className="size-3.5" aria-hidden="true" />
              Open in maps
              <span className="sr-only">: {venue.subtitle}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
