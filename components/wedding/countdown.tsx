'use client'

import { useEffect, useState } from 'react'
import { wedding } from '@/lib/wedding'

const target = new Date(wedding.countdownTo).getTime()

function remaining(now: number) {
  const diff = Math.max(0, target - now)
  return {
    Days: Math.floor(diff / 86_400_000),
    Hrs: Math.floor(diff / 3_600_000) % 24,
    Min: Math.floor(diff / 60_000) % 60,
    Sec: Math.floor(diff / 1000) % 60,
  }
}

export function Countdown() {
  const [now, setNow] = useState<number | null>(null)

  useEffect(() => {
    setNow(Date.now())
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const parts = now === null ? null : remaining(now)
  const targetLabel = new Date(wedding.countdownTo).toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: wedding.timezone,
  })

  return (
    <section aria-label="Countdown" className="border-y border-border bg-[linear-gradient(180deg,oklch(0.94_0.03_70),var(--background))] px-4 py-12">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-5">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{wedding.countdownLabel}</p>
        <div className="grid w-full grid-cols-4 gap-3" role="timer" aria-live="off">
          {(['Days', 'Hrs', 'Min', 'Sec'] as const).map((label) => (
            <div key={label} className="flex flex-col items-center gap-1 rounded-2xl border border-border bg-card py-4 shadow-sm">
              <span className="text-3xl font-semibold tabular-nums text-primary md:text-4xl">
                {parts ? String(parts[label]).padStart(2, '0') : '--'}
              </span>
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">{targetLabel}</p>
      </div>
    </section>
  )
}
