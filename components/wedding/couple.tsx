import Image from 'next/image'
import { wedding } from '@/lib/wedding'
import { SectionHeading } from './section-heading'

export function Couple() {
  const c = wedding.couple
  const people = [c.bride, c.groom]
  return (
    <section id="couple" aria-labelledby="couple-title" className="px-4 py-16">
      <SectionHeading id="couple-title" eyebrow={c.eyebrow} title={c.title} />
      <div className="mx-auto mt-6 flex max-w-xl flex-col gap-1 text-center text-pretty text-muted-foreground">
        {c.intro.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
        {people.map((person, i) => (
          <article
            key={person.name}
            className={`flex flex-col gap-3 rounded-3xl border border-border bg-card p-6 text-center shadow-sm md:p-8 ${i === 0 ? 'md:order-1 md:text-right' : 'md:order-3 md:text-left'}`}
          >
            <h3 className="text-4xl font-extralight tracking-tight text-primary">{person.name}</h3>
            <p className="text-pretty leading-relaxed text-muted-foreground">{person.bio}</p>
          </article>
        ))}
        <div className="relative mx-auto aspect-[3/4] w-full max-w-60 overflow-hidden rounded-t-full rounded-b-2xl border border-gold/50 shadow-lg md:order-2">
          <Image
            src="/images/couple.png"
            alt={`Illustrated portrait of ${wedding.groom} and ${wedding.bride} wearing wedding garlands`}
            fill
            sizes="240px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
