'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { wedding } from '@/lib/wedding'

type Stage = 'closed' | 'opening' | 'gone'

export function DoorIntro() {
  const [stage, setStage] = useState<Stage>('closed')

  useEffect(() => {
    if (stage === 'gone') {
      document.documentElement.style.overflow = ''
      return
    }
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [stage])

  if (stage === 'gone') return null

  const open = () => {
    if (stage !== 'closed') return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setStage('opening')
    window.setTimeout(() => setStage('gone'), reduced ? 50 : 1900)
  }

  const isOpening = stage === 'opening'

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-opacity delay-1000 duration-700 ${
        isOpening ? 'opacity-0' : 'opacity-100'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label={`${wedding.groom} weds ${wedding.bride} — invitation`}
    >
      <div
        className={`absolute inset-0 bg-[#2a170e] bg-[repeating-linear-gradient(90deg,#3a2216_0px,#3a2216_6px,#2f1b11_6px,#2f1b11_12px)] transition-opacity duration-700 ${
          isOpening ? 'opacity-0' : 'opacity-100'
        }`}
        aria-hidden="true"
      />

      <div className="relative h-dvh w-[min(100vw,calc(100dvh*0.558))] [perspective:1800px]">
        {(['left', 'right'] as const).map((side) => (
          <div
            key={side}
            aria-hidden="true"
            className={`absolute inset-y-0 w-1/2 overflow-hidden transition-transform duration-[1600ms] ease-[cubic-bezier(0.6,0.05,0.25,1)] ${
              side === 'left' ? 'left-0 origin-left' : 'right-0 origin-right'
            } ${isOpening ? (side === 'left' ? '[transform:rotateY(-105deg)]' : '[transform:rotateY(105deg)]') : ''}`}
          >
            <div className={`absolute inset-y-0 w-[200%] ${side === 'left' ? 'left-0' : '-left-full'}`}>
              <Image src="/images/doors.png" alt="" fill priority sizes="100vw" className="object-cover" />
            </div>
            <div className="absolute inset-0 bg-black/10" />
          </div>
        ))}

        <div
          className={`absolute inset-0 flex flex-col items-center justify-center px-6 text-center transition-opacity duration-500 ${
            isOpening ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="absolute inset-x-0 top-[18%] bottom-[14%] bg-[radial-gradient(ellipse_at_center,rgba(25,12,6,0.82)_0%,rgba(25,12,6,0.55)_45%,transparent_75%)]" aria-hidden="true" />
          <div className="relative flex flex-col items-center gap-4">
            <div className="relative h-36 w-28 overflow-hidden rounded-t-full border border-gold/70 shadow-2xl">
              <Image src="/images/ganesh.png" alt="Lord Ganesha" fill sizes="112px" className="object-cover" priority />
            </div>
            <p className="font-deva text-lg text-[#f3d9a4]">{wedding.blessing}</p>
            <h1 className="flex flex-col items-center text-[#fdf3e3]">
              <span className="text-5xl font-extralight tracking-tight">{wedding.groom}</span>
              <span className="my-1 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-[#e8c27a]">weds</span>
              <span className="text-5xl font-extralight tracking-tight">{wedding.bride}</span>
            </h1>
            <div className="flex flex-col items-center gap-1">
              <p className="text-sm text-[#fdf3e3]">{wedding.dateLabel}</p>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[#e8c9a0]">
                {wedding.city} · {wedding.region}
              </p>
            </div>
            <button
              type="button"
              onClick={open}
              className="mt-4 flex flex-col items-center rounded-full bg-[linear-gradient(120deg,#f6e2b0,#c99a3e)] px-10 py-3 text-[#3a1f10] shadow-[0_12px_40px_-8px_rgba(233,190,110,0.6)] transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f6e2b0]"
            >
              <span className="font-deva text-2xl leading-tight">{wedding.welcome}</span>
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.25em]">Tap to open the doors</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
