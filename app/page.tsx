import { DoorIntro } from '@/components/wedding/door-intro'
import { Petals } from '@/components/wedding/petals'
import { ScrollProgress } from '@/components/wedding/scroll-progress'
import { Hero } from '@/components/wedding/hero'
import { Countdown } from '@/components/wedding/countdown'
import { Schedule } from '@/components/wedding/schedule'
import { Invitation } from '@/components/wedding/invitation'
import { Couple } from '@/components/wedding/couple'
import { Venues } from '@/components/wedding/venues'
import { Family } from '@/components/wedding/family'
import { Rsvp } from '@/components/wedding/rsvp'
import { Footer } from '@/components/wedding/footer'

export default function Page() {
  return (
    <>
      <DoorIntro />
      <ScrollProgress />
      <Petals />
      <main id="top">
        <Hero />
        <Invitation />
        <Couple />
        <Countdown />
        <Schedule />
        <Venues />
        <Family />
        <Rsvp />
      </main>
      <Footer />
    </>
  )
}
