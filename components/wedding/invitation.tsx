import { wedding } from '@/lib/wedding'
import { Ornament } from './section-heading'

export function Invitation() {
  const inv = wedding.invitation
  return (
    <section aria-labelledby="invite-title" className="px-4 py-16">
      <div className="bg-mandala mx-auto flex max-w-2xl flex-col items-center gap-5 rounded-t-[8rem] rounded-b-3xl border border-gold/40 bg-card px-6 pt-14 pb-12 text-center shadow-[0_30px_60px_-40px_rgba(90,40,30,0.45)] md:px-12">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">{inv.opening}</p>
        <div className="flex flex-col gap-1 text-xl font-medium text-foreground">
          {inv.groomParents.map((n) => (
            <p key={n}>{n}</p>
          ))}
        </div>
        <p className="max-w-sm text-pretty text-muted-foreground">{inv.request}</p>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{inv.groomRelation}</p>
        <h2 id="invite-title" className="flex flex-col items-center gap-1">
          <span className="text-5xl font-extralight tracking-tight md:text-6xl">{wedding.groom}</span>
          <span className="text-2xl text-gold" aria-label="and">
            {'♥'}
          </span>
          <span className="text-5xl font-extralight tracking-tight md:text-6xl">{wedding.bride}</span>
        </h2>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{inv.brideRelation}</p>
        <div className="flex flex-col gap-1 text-xl font-medium text-foreground">
          {inv.brideParents.map((n) => (
            <p key={n}>{n}</p>
          ))}
        </div>
        <Ornament />
      </div>
    </section>
  )
}
