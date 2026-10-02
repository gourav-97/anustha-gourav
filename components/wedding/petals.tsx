const PETALS = Array.from({ length: 16 }, (_, i) => ({
  left: (i * 37) % 100,
  delay: (i * 1.7) % 14,
  duration: 12 + ((i * 5) % 9),
  size: 8 + ((i * 3) % 8),
  drift: ((i % 2 === 0 ? 1 : -1) * (40 + ((i * 13) % 80))) as number,
}))

export function Petals() {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden motion-reduce:hidden" aria-hidden="true">
      {PETALS.map((p, i) => (
        <span
          key={i}
          className="absolute top-0 block rounded-[60%_0_60%_0] bg-blush/80"
          style={
            {
              left: `${p.left}%`,
              width: p.size,
              height: p.size * 1.4,
              animation: `petal-fall ${p.duration}s linear ${p.delay}s infinite`,
              '--drift': `${p.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}
