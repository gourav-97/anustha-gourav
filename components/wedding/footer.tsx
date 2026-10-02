'use client'

import { useState } from 'react'
import { ArrowUp, Share2 } from 'lucide-react'
import { wedding } from '@/lib/wedding'
import { Ornament } from './section-heading'

export function Footer() {
  const [copied, setCopied] = useState(false)

  const share = async () => {
    const data = { title: `${wedding.groom} weds ${wedding.bride}`, text: `${wedding.dateLabel} · ${wedding.city}`, url: window.location.href }
    if (navigator.share) {
      try {
        await navigator.share(data)
      } catch {}
      return
    }
    await navigator.clipboard.writeText(data.url)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className="border-t border-border bg-[linear-gradient(180deg,var(--background),oklch(0.93_0.035_65))] px-4 pt-16 pb-10">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-4 text-center">
        <div className="flex size-28 items-center justify-center rounded-full border border-gold/60 bg-card shadow-sm" aria-hidden="true">
          <span className="text-4xl font-extralight text-primary">
            {wedding.groom[0]}
            <span className="mx-1 text-gold">&</span>
            {wedding.bride[0]}
          </span>
        </div>
        <p className="text-4xl font-extralight tracking-tight">
          {wedding.groom} & {wedding.bride}
        </p>
        <p className="text-sm font-semibold text-primary">{wedding.hashtag}</p>
        <Ornament />
        <div className="mt-2 flex gap-3">
          <button
            type="button"
            onClick={share}
            className="flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary shadow-sm hover:bg-secondary"
          >
            <Share2 className="size-3.5" aria-hidden="true" />
            {copied ? 'Link copied' : 'Share invite'}
          </button>
          <a
            href="#top"
            className="flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary shadow-sm hover:bg-secondary"
          >
            <ArrowUp className="size-3.5" aria-hidden="true" />
            Back to top
          </a>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">See you at the celebrations.</p>
      </div>
    </footer>
  )
}
