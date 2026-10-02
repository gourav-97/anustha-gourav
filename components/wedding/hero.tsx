import Image from 'next/image'
import { CalendarDays, ArrowRight, MapPin } from 'lucide-react'
import { wedding } from '@/lib/wedding'

export function Hero() {
  return (
    <header className="bg-mandala relative px-4 pt-10 pb-16 md:pt-14">
      <div className="mx-auto max-w-3xl rounded-t-[10rem] rounded-b-3xl bg-card p-2 shadow-[0_30px_60px_-30px_rgba(90,40,30,0.35)] md:rounded-t-[14rem]">
        <div className="flex flex-col items-center gap-5 rounded-t-[9.5rem] rounded-b-[1.25rem] border border-gold/40 bg-[linear-gradient(180deg,var(--card),oklch(0.97_0.02_75))] px-6 pt-12 pb-10 text-center md:rounded-t-[13.5rem] md:pt-14">
          <div className="animate-rise relative h-48 w-36 overflow-hidden rounded-t-full border border-gold shadow-lg">
            <Image src="/images/ganesh.png" alt="Lord Ganesha" fill sizes="144px" className="object-cover" priority />
          </div>

          <p className="font-deva animate-rise text-pretty text-lg leading-relaxed text-muted-foreground [animation-delay:120ms]">
            {wedding.shloka[0]}
            <br />
            {wedding.shloka[1]}
          </p>

          <p className="animate-rise text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground [animation-delay:200ms]">
            Together with our families
          </p>

          <h1 className="animate-rise flex flex-col items-center [animation-delay:280ms]">
            <span className="text-6xl font-extralight tracking-tight md:text-8xl">{wedding.groom}</span>
            <span className="my-2 flex items-center gap-4 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-primary">
              <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold md:w-24" aria-hidden="true" />
              weds
              <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold md:w-24" aria-hidden="true" />
            </span>
            <span className="text-6xl font-extralight tracking-tight md:text-8xl">{wedding.bride}</span>
          </h1>

          <div className="animate-rise flex flex-col items-center gap-1 [animation-delay:360ms]">
            <p className="text-2xl font-medium">{wedding.dateLabel}</p>
            <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              <MapPin className="size-3.5" aria-hidden="true" />
              {wedding.city} · {wedding.region}
            </p>
          </div>

          <div className="animate-rise flex w-full max-w-xs flex-col gap-3 pt-2 [animation-delay:440ms]">
            <a
              href="#schedule"
              className="btn-maroon flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] transition-transform hover:-translate-y-0.5"
            >
              <CalendarDays className="size-4" aria-hidden="true" />
              View schedule
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#rsvp"
              className="flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-primary transition-colors hover:bg-secondary"
            >
              RSVP
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
