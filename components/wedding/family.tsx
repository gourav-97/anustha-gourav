import { wedding } from '@/lib/wedding'
import { SectionHeading } from './section-heading'

export function Family() {
  const f = wedding.family
  return (
    <section id="family" aria-labelledby="family-title" className="px-4 py-16">
      <SectionHeading id="family-title" eyebrow={f.eyebrow} title={f.title} />
      <ul className="mx-auto mt-10 flex max-w-2xl flex-col gap-4">
        {f.groups.map((g) => (
          <li key={g.label} className="flex flex-col gap-1 rounded-3xl border border-border bg-card px-6 py-5 text-center shadow-sm">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-muted-foreground">{g.label}</p>
            <p className="text-pretty text-lg font-medium text-foreground">{g.names}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
