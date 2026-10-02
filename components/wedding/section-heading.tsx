export function Ornament({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-2 text-gold ${className}`} aria-hidden="true">
      <span className="h-px w-14 bg-gold/60" />
      <svg width="14" height="8" viewBox="0 0 14 8" fill="none" stroke="currentColor">
        <path d="M1 4c3-4 9-4 12 0-3 4-9 4-12 0z" />
      </svg>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor">
        <path d="M8 1l7 7-7 7-7-7z" />
        <circle cx="8" cy="8" r="1.5" fill="currentColor" />
      </svg>
      <svg width="14" height="8" viewBox="0 0 14 8" fill="none" stroke="currentColor">
        <path d="M1 4c3-4 9-4 12 0-3 4-9 4-12 0z" />
      </svg>
      <span className="h-px w-14 bg-gold/60" />
    </div>
  )
}

export function SectionHeading({ eyebrow, title, id }: { eyebrow?: string; title: string; id?: string }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>}
      <h2 id={id} className="text-balance text-5xl font-extralight tracking-tight text-foreground md:text-6xl">
        {title}
      </h2>
      <Ornament className="mt-1" />
    </div>
  )
}
