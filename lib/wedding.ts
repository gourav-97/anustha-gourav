export type EventIcon = 'haldi' | 'ring' | 'sagai' | 'ghadoli' | 'baraat' | 'phere'

export type DressTone = 'gold' | 'rose' | 'green' | 'maroon' | 'ivory'

export type WeddingEvent = {
  name: string
  description: string
  time: string
  start: string
  durationHours: number
  dressCode?: string
  dressTone: DressTone
  icon: EventIcon
}

export type WeddingDay = {
  date: string
  title: string
  venueId: string
  events: WeddingEvent[]
}

export type Venue = {
  id: string
  label: string
  name: string
  subtitle: string
  address: string
  description: string
  dates: string
  mapsUrl: string
}

export const wedding = {
  groom: 'Gourav',
  bride: 'Anustha',
  hashtag: '#GouravWedsAnustha',
  dateLabel: '11 — 12 December 2026',
  city: 'Jaipur',
  region: 'Rajasthan',
  timezone: 'Asia/Kolkata',
  countdownTo: '2026-12-12T00:00:00+05:30',
  countdownLabel: 'Forever Begins In',
  blessing: '॥ श्री गणेशाय नमः ॥',
  shloka: ['वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ', 'निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा'],
  welcome: 'पधारो सा',

  invitation: {
    opening: 'With the divine blessings of our families',
    groomParents: ['Mrs. Madhuri Khatri', 'Mr. Anand Kumar Khatri'],
    request: 'request the honour of your presence at the wedding of their',
    groomRelation: 'beloved son',
    brideRelation: 'beloved daughter of',
    brideParents: ['Mrs. Nirmala Gautam', 'Mr. Anil Gautam'],
  },

  couple: {
    eyebrow: 'The Couple',
    title: 'Two Hearts. One Forever.',
    intro: [
      'Every love story is beautiful, but ours is our favourite.',
      'Two souls, one journey, and a lifetime of beautiful memories waiting to unfold.',
    ],
    bride: {
      name: 'Anustha',
      bio: 'Graceful, compassionate and full of warmth, Anustha brings joy wherever she goes. Her smile lights every room, and her heart makes every moment unforgettable.',
    },
    groom: {
      name: 'Gourav',
      bio: 'Calm, ambitious and thoughtful, Gourav believes the best journeys are the ones shared together. His laughter and kindness define him.',
    },
  },

  venues: [
    {
      id: 'resort',
      label: 'Our Venue',
      name: 'Bamboo Saa Sunrise Resort',
      subtitle: 'A place where every celebration, every blessing and every memory comes together.',
      address: 'Jaipur, Rajasthan',
      description: 'Nestled amidst serene landscapes, Bamboo Saa Sunrise Resort sets the perfect stage for our wedding weekend.',
      dates: '11 & 12 December 2026',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Bamboo+Saa+Sunrise+Resort+Jaipur',
    },
  ] satisfies Venue[],

  days: [
    {
      date: '2026-12-11',
      title: 'Haldi, Ring Ceremony & Sangeet',
      venueId: 'resort',
      events: [
        {
          name: 'Haldi Ceremony',
          description: 'Wrapped in hues of turmeric, laughter, and blessings, every moment shines with happiness.',
          time: '1:00 PM',
          start: '13:00',
          durationHours: 3,
          dressCode: 'Colourful • Festive Indian',
          dressTone: 'gold',
          icon: 'haldi',
        },
        {
          name: 'Ring Ceremony & Sangeet',
          description: 'Where promises are exchanged, melodies fill the air, and every heartbeat dances to love.',
          time: '7:00 PM',
          start: '19:00',
          durationHours: 4,
          dressCode: 'Elegant • Evening Indian',
          dressTone: 'maroon',
          icon: 'ring',
        },
      ],
    },
    {
      date: '2026-12-12',
      title: 'Sagai, Baraat & Phere',
      venueId: 'resort',
      events: [
        {
          name: 'Sagai',
          description: 'The graceful celebration of two families embracing a lifetime of togetherness.',
          time: '12:00 PM',
          start: '12:00',
          durationHours: 2,
          dressTone: 'rose',
          icon: 'sagai',
        },
        {
          name: 'Haldi (Groom) & Ghadoli',
          description: 'A beautiful blend of Haldi and Ghadoli, symbolizing purity, prosperity, and the love of family.',
          time: '3:00 PM',
          start: '15:00',
          durationHours: 2,
          dressCode: 'Festive • Comfortable Indian',
          dressTone: 'green',
          icon: 'ghadoli',
        },
        {
          name: 'Sehra Bandi & Baraat',
          description: "The groom's royal procession followed by the timeless exchange of garlands — a moment of love, respect, and acceptance.",
          time: '6:30 PM',
          start: '18:30',
          durationHours: 3,
          dressTone: 'rose',
          icon: 'baraat',
        },
        {
          name: 'Phere',
          description: 'With seven sacred steps around the holy fire, two hearts embark on a journey of forever.',
          time: '12:35 AM',
          start: '24:35',
          durationHours: 3,
          dressCode: 'Royal • Traditional Indian',
          dressTone: 'ivory',
          icon: 'phere',
        },
      ],
    },
  ] satisfies WeddingDay[],

  family: {
    eyebrow: 'With Love From',
    title: 'The Khatri Family',
    groups: [
      { label: 'Paternal Grandparents', names: 'Lt. Mrs. Geeta Devi & Lt. Kesar Das Khatri' },
      { label: 'Maternal Grandparents', names: 'Lt. Mrs. Varsha & Lt. Mr. Jaswant Rai Chopra' },
      { label: 'With Love', names: 'Piyush Khatri' },
    ],
  },

  rsvpMessage: 'Your presence would make our celebration complete. Kindly let us know if you can join us.',
}

export function parseDay(date: string) {
  const [y, m, d] = date.split('-').map(Number)
  const value = new Date(Date.UTC(y, m - 1, d))
  return {
    weekdayShort: value.toLocaleDateString('en-IN', { weekday: 'short', timeZone: 'UTC' }),
    weekdayLong: value.toLocaleDateString('en-IN', { weekday: 'long', timeZone: 'UTC' }),
    day: String(d).padStart(2, '0'),
    month: value.toLocaleDateString('en-IN', { month: 'short', timeZone: 'UTC' }),
  }
}

function toCalendarStamp(date: string, time: string, addHours = 0) {
  const [y, m, d] = date.split('-').map(Number)
  const [hh, mm] = time.split(':').map(Number)
  const value = new Date(Date.UTC(y, m - 1, d, hh + addHours, mm))
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${value.getUTCFullYear()}${pad(value.getUTCMonth() + 1)}${pad(value.getUTCDate())}T${pad(value.getUTCHours())}${pad(value.getUTCMinutes())}00`
}

export function googleCalendarUrl(event: WeddingEvent, day: WeddingDay, venue?: Venue) {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${event.name} · ${wedding.groom} & ${wedding.bride}`,
    dates: `${toCalendarStamp(day.date, event.start)}/${toCalendarStamp(day.date, event.start, event.durationHours)}`,
    ctz: wedding.timezone,
    details: event.dressCode ? `${event.description}\nWardrobe: ${event.dressCode}` : event.description,
    location: venue ? `${venue.name}, ${venue.address}` : '',
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}
