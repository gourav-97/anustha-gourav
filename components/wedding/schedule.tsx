'use client'

import { useEffect, useState } from 'react'
import {
  CalendarPlus,
  Droplet,
  Flame,
  Flower2,
  Heart,
  type LucideIcon,
  MapPin,
  Music,
  Navigation,
  PartyPopper,
  Sparkles,
  Wine,
} from 'lucide-react'
import { type DressTone, type EventIcon, googleCalendarUrl, parseDay, wedding } from '@/lib/wedding'
import { SectionHeading } from './section-heading'

const ICONS: Record<EventIcon, LucideIcon> = {
  ganesh: Sparkles,
  haldi: Droplet,
  music: Music,
  mehndi: Flower2,
  cheers: Wine,
  baraat: PartyPopper,
  varmala: Heart,
  phere: Flame,
}

const TONES: Record<DressTone, string> = {
  gold: 'border-amber-300 bg-amber-50 text-amber-800',
  rose: 'border-rose-300 bg-rose-50 text-rose-800',
  green: 'border-emerald-300 bg-emerald-50 text-emerald-800',
  maroon: 'border-primary/30 bg-primary/5 text-primary',
  ivory: 'border-stone-300 bg-stone-50 text-stone-700',
}

export function Schedule() {
  const [active, setActive] = useState(wedding.days[0].date)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id.replace('day-', ''))
      },
      { rootMargin: '-140px 0px -55% 0px' },
    )
    wedding.days.forEach((d) => {
      const el = document.getElementById(`day-${d.date}`)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <section id="schedule" aria-labelledby="schedule-title" className="scroll-mt-4 pt-20 pb-16">
      <div className="px-4 pb-10">
        <SectionHeading id="schedule-title" eyebrow="Rasams & celebrations" title="The Schedule" />
      </div>

      <nav aria-label="Wedding days" className="sticky top-0 z-30 border-y border-border bg-background/90 px-4 py-2 backdrop-blur">
        <ul className="mx-auto grid max-w-4xl gap-2" style={{ gridTemplateColumns: `repeat(${wedding.days.length}, minmax(0, 1fr))` }}>
          {wedding.days.map((d) => {
            const p = parseDay(d.date)
            const isActive = active === d.date
            return (
              <li key={d.date}>
                <a
                  href={`#day-${d.date}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`flex flex-col items-center rounded-xl border py-2 transition-colors ${
                    isActive ? 'btn-maroon border-transparent' : 'border-border bg-card text-foreground hover:bg-secondary'
                  }`}
                >
                  <span className={`text-[0.6rem] font-semibold uppercase tracking-[0.2em] ${isActive ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                    {p.weekdayShort}
                  </span>
                  <span className="text-xl font-semibold leading-tight">{p.day}</span>
                  <span className={`text-[0.6rem] font-semibold uppercase tracking-[0.2em] ${isActive ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                    {p.month}
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="mx-auto mt-6 flex max-w-4xl flex-col gap-6 px-4">
        {wedding.days.map((day) => {
          const p = parseDay(day.date)
          const venue = wedding.venues.find((v) => v.id === day.venueId)
          return (
            <article
              key={day.date}
              id={`day-${day.date}`}
              aria-labelledby={`day-title-${day.date}`}
              className="scroll-mt-28 overflow-hidden rounded-3xl border border-border bg-card shadow-[0_20px_40px_-30px_rgba(90,40,30,0.4)]"
            >
              <header className="flex flex-wrap items-center gap-4 border-b border-border bg-[linear-gradient(110deg,oklch(0.94_0.03_65),var(--card))] p-5 md:p-6">
                <div className="btn-maroon flex h-14 w-13 flex-col items-center justify-center rounded-t-2xl rounded-b-lg">
                  <span className="text-xl font-semibold leading-none">{p.day}</span>
                  <span className="mt-1 text-[0.55rem] font-semibold uppercase tracking-[0.2em]">{p.month}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 id={`day-title-${day.date}`} className="text-lg font-medium text-pretty">
                    {p.weekdayLong} · {day.title}
                  </h3>
                  {venue && (
                    <p className="mt-0.5 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
                      <span>
                        <span className="font-deva">{venue.name}</span> · {venue.subtitle}
                      </span>
                    </p>
                  )}
                </div>
                {venue && (
                  <a
                    href={venue.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex basis-full items-center justify-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs sm:basis-auto font-semibold uppercase tracking-[0.15em] text-primary shadow-sm transition-colors hover:bg-secondary"
                  >
                    <Navigation className="size-3.5" aria-hidden="true" />
                    Directions
                  </a>
                )}
              </header>

              <ol className="divide-y divide-border px-5 md:px-6">
                {day.events.map((event) => {
                  const Icon = ICONS[event.icon]
                  return (
                    <li key={event.name} className="flex gap-4 py-5">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-t-2xl rounded-b-md border border-gold/40 bg-accent text-primary">
                        <Icon className="size-4.5" aria-hidden="true" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                          <h4 className="text-lg font-medium">{event.name}</h4>
                          <p className="text-sm font-semibold text-primary">{event.time}</p>
                        </div>
                        <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">{event.description}</p>
                        <div className="mt-4 flex flex-wrap items-center gap-2">
                          <span className={`rounded-full border px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.15em] ${TONES[event.dressTone]}`}>
                            {event.dressCode}
                          </span>
                          <a
                            href={googleCalendarUrl(event, day, venue)}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-primary shadow-sm transition-colors hover:bg-secondary"
                          >
                            <CalendarPlus className="size-3.5" aria-hidden="true" />
                            Add to calendar
                            <span className="sr-only">: {event.name}</span>
                          </a>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ol>
            </article>
          )
        })}
      </div>
    </section>
  )
}
