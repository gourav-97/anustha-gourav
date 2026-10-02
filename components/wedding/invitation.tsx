import Image from 'next/image'
import { Fragment } from 'react'
import { wedding } from '@/lib/wedding'

function renderMessage() {
  const parts = wedding.invitationMessage.split(/(\{groom\}|\{bride\})/)
  return parts.map((part, i) => {
    if (part === '{groom}') return <strong key={i} className="font-semibold text-primary">{wedding.groom}</strong>
    if (part === '{bride}') return <strong key={i} className="font-semibold text-primary">{wedding.bride}</strong>
    return <Fragment key={i}>{part}</Fragment>
  })
}

export function Invitation() {
  return (
    <section aria-labelledby="invite-title" className="px-4 py-16">
      <div className="mx-auto grid max-w-4xl items-center gap-8 rounded-3xl border border-border bg-card p-6 shadow-[0_30px_60px_-40px_rgba(90,40,30,0.45)] md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:p-8">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-t-full rounded-b-2xl border border-gold/40">
          <Image
            src="/images/couple.png"
            alt={`Illustrated portrait of ${wedding.groom} and ${wedding.bride} wearing wedding garlands`}
            fill
            sizes="(min-width: 768px) 320px, 80vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">{wedding.invitationEyebrow}</p>
          <h2 id="invite-title" className="text-5xl font-extralight tracking-tight">
            You are invited
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">{renderMessage()}</p>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">— With all our love</p>
        </div>
      </div>
    </section>
  )
}
