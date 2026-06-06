import type { MapMarker } from '@/stores/MapMarker'
import type { DownloadLink } from '@/stores/DownloadLinks'
import type { Event } from '@/stores/Events'
import type { Sponsor, SponsorType } from '@/stores/Sponsor'
import type { Person, RoleTypes } from '@/stores/Person'
import type { NavLinks } from '@/stores/NavLinks'
import type { InvitedSpeaker } from '@/stores/InvitedSpeakers'

export const FORMLINK =
  'https://docs.google.com/forms/d/e/1FAIpQLSdlvy5A1-bQaxdgEIpaPOyuFYbyR-cSseKA5m0tO3obVZPsBw/viewform'
export const CHAIRSEMAIL = 'niranjan.natekar@wdc.com'
export const UCSDLATLNG = { lat: 32.8801, lng: -117.234 }
export const GREATHALLIMAGE =  new URL('../assets/ucsd/ucsd7.jpg', import.meta.url).href
export const WORKSHOPREGISTRATIONLINK = 'https://forms.gle/PKmL21a9bnXeiYzA8'
export const FLYERLINKS: DownloadLink[]  = [
  {
    label: 'Extended Call for Nominations',
    url: '/downloads/TMRC_2026_Extended_Call_for_Nominations.pdf',
    filename: 'TMRC_2026_Extended_Call_for_Nominations.pdf'
  }
]

export const CALLFORPOSTERLINK = 'https://forms.gle/CM4BbhZ5h7kVvnM1A'
export const DOWNLOADLINKS: DownloadLink[]  = [
  {
    label: 'Digest Template Word',
    url: '/downloads/digest_template_word.docx',
    filename: 'digest_template.docx'
  },
  {
    label: 'Digest Template LaTeX',
    url: '/downloads/digest_template_latex.zip',
    filename: 'digest_template.zip'
  }
]

export const CMRR: MapMarker = {
    id: 'cmrr-building',
    name: 'CMRR Building',
    position: {
      lat: 32.88053452456918,
      lng: -117.23580922408699,
    },
    description: 'The venue for the standards in magnetics workshop.',
    link: 'qArw76N8qV3SULFS6',
    src: new URL('../assets/conference.svg', import.meta.url),
  }

export const ATKINSONHALL: MapMarker  = {
  id: 'atkinson-hall',
  name: 'Atkinson Hall, UCSD',
  position: {
    lat: 32.88260061334128,
    lng: -117.23478501349337
  },
  description: 'The conference venue for TMRC 2026.',
  link: '92acsRGVDuzHrNev8',
  src: new URL('../assets/conference.svg', import.meta.url),
}

export const TORREYPINESGLIDERPORT: MapMarker  = {
  id: 'torrey-pines-glider-port',
  name: 'Torrey Pines Gliderport',
  position: {
    lat: 32.890096733644334,
    lng: -117.25119027116445
  },
  description: 'The location for the conference dinner party on the evening of August 3rd, offering stunning views of the Pacific Ocean and a unique dining experience.',
  link: 'vmfC5ntfKWiRqKim8',
  src: new URL('../assets/restaurant.svg', import.meta.url),
}


export const GREATHALL: MapMarker  = {
  id: 'great-hall',
  name: 'Great Hall, UCSD',
  position: {
    lat: 32.88407869054746,
    lng: -117.24217791534218
  },
  description: 'The location for the conference banquet on the evening of August 4th.',
  link: 'vfaTHPXJ3PpuW58D8',
  src: new URL('../assets/restaurant.svg', import.meta.url),
}

export const KAYAKERS: MapMarker  = {
  id: 'kayakers',
  name: 'La Jolla Shores',
  position: {
    lat: 32.85780167258335,
    lng: -117.25724802328908
  },
  description: 'A popular beach located south of the conference venue, known for its kayaking and snorkeling opportunities.',
  link: 'PMvuupCcjqT4Wqcy5',
}


export const PROGRAMEVENTS: Array<Event>  = [
  {
    //Aug 2, 2026, 3:30-6:30pm San Diego Time
    date: 'Aug 2',
    time: '3:30-6:30pm',
    event: 'IEEE Standards Committee workshop',
    location: CMRR,
    description: 'The official opening ceremony of the conference.'
  },
  {
    date: 'Aug 2',
    time: '7:00-9:00pm',
    event: 'Reception',
    location: ATKINSONHALL,
    description: 'Welcome reception with light refreshments and an opportunity to network with fellow attendees.'
  },
  {
    date: 'Aug 3-5',
    event: 'Oral and Poster Sessions',
    location: ATKINSONHALL,
  },
  {
    date: 'Aug 3',
    time: '7:00-10:00pm',
    event: 'Dinner Party (Social Event)',
    location: TORREYPINESGLIDERPORT,
    description: 'A social event for conference attendees to enjoy dinner and networking in a relaxed setting.'
  },
  {
    date: 'Aug 4',
    time: '7:00-10:00pm',
    event: 'Banquet (Social Event)',
    location: GREATHALL,
    description: 'The conference banquet, featuring a keynote speaker and an opportunity for attendees to socialize and celebrate the conference.'
  },
  {
    date: 'Aug 5',
    time: 'afternoon',
    event: 'Kayaking (Social Event)',
    location: KAYAKERS,
    description: 'A social event for conference attendees to enjoy kayaking and snorkeling in a beautiful coastal setting.'
  }
]

const SHERATONLAJOLLAHOTEL: MapMarker  = {
  id: 'sheraton-la-jolla-hotel',
  name: 'Sheraton La Jolla Hotel',
  position: {
    lat: 32.87119269865479,
    lng: -117.23087415521701
  },
  link: 'kyTkGgYC9vevqNpM8',
  type: 'hotel',
  src: new URL('../assets/hotel.svg', import.meta.url)
}

const SANDIEGOMARRIOTTLAJOLLA: MapMarker  = {
  id: 'san-diego-marriott-la-jolla',
  name: 'San Diego Marriott La Jolla',
  position: {
    lat: 32.874618490390674,
    lng: -117.21516417488098
  },
  link: '8oKRrnFkbX3yMT8B7',
  type: 'hotel',
  src: new URL('../assets/hotel.svg', import.meta.url)
}

const EMBASSYSUITESLAJOLLA: MapMarker  = {
  id: 'embassy-suites-la-jolla',
  name: 'Embassy Suites La Jolla',
  position: {
    lat: 32.87616152589258,
    lng: -117.20852959468796
  },
  link: '5Ew4TuzCSHSayRTVA',
  type: 'hotel',
  src: new URL('../assets/hotel.svg', import.meta.url)
}

const HYATTREGENCYLAJOLLA: MapMarker  = {
  id: 'hyatt-regency-la-jolla',
  name: 'Hyatt Regency La Jolla',
  position: {
    lat: 32.8722181595594,
    lng: -117.22445258715126
  },
  link: 'vt2s11DhVdxeQcfW8',
  type: 'hotel',
  src: new URL('../assets/hotel.svg', import.meta.url)
}

const RESIDENCEINNLAJOLLA: MapMarker  = {
  id: 'residence-inn-la-jolla',
  name: 'Residence Inn La Jolla',
  position: {
    lat: 32.87367627191648,
    lng: -117.23600932765207
  },
  link: 'gthYVLzEdfN5wAQn9',
  type: 'hotel',
  src: new URL('../assets/hotel.svg', import.meta.url)
}

const hotels: MapMarker[] = [
  SHERATONLAJOLLAHOTEL,
  SANDIEGOMARRIOTTLAJOLLA,
  EMBASSYSUITESLAJOLLA,
  HYATTREGENCYLAJOLLA,
  RESIDENCEINNLAJOLLA
]

export const MARKERS: Array<MapMarker>  = [
  ATKINSONHALL,
  CMRR,
  TORREYPINESGLIDERPORT,
  GREATHALL,
  KAYAKERS,
  {
    id: '3',
    name: 'Gilman Parking Structure',
    position: {
      lat: 32.87780661307211,
      lng: -117.23366033215008
    },
    description: 'Gilman Parking Structure located near La Jolla Village Drive.',
    link: 'hDd6Q7a84mWV7jVy6',
    src: new URL('../assets/parking.svg', import.meta.url),
  },

  {
    id: '4',
    name: 'Hopkins Parking Structure',
    position: {
      lat: 32.88420547011224,
      lng: -117.23939410400531
    },
    description: 'Hopkins Parking Structure located near North Torrey Pines Road.',
    link: 'Cz5YtgP3nRUyV74m7',
    src: new URL('../assets/parking.svg', import.meta.url),
  },
  ...hotels

]


export const LOCALHOSTS: Array<Sponsor>  = [
  {
    name: 'Department of Electrical and Computer Engineering, UCSD',
    website: new URL('https://ece.ucsd.edu/'),
    type: 'none' as SponsorType
  },
  {
    name: 'Center for Magnetic Recording Research, UCSD',
    website: new URL('https://cmrr.ucsd.edu/'),
    type: 'none' as SponsorType
  },
];

export const SPONSORS: Array<Sponsor>  = [
  {
    name: 'IEEE',
    logo: new URL('../assets/sponsors/ieee-logo.png', import.meta.url),
    website: new URL('https://www.ieee.org/'),
    type: 'none' as SponsorType
  },
  {
    name: 'IEEE Magnetics Society',
    logo: new URL('../assets/sponsors/ieee-magnetic-logo.png', import.meta.url),
    website: new URL('https://www.ieeemagnetics.org/'),
    type: 'none' as SponsorType
  }
]

export const CORPORATESPONSORS: Array<Sponsor>  = [
  {
    name: 'Western Digital',
    logo: new URL('../assets/sponsors/western-digital-logo.jpg', import.meta.url),
    website: new URL('https://www.westerndigital.com/'),
    type: 'platinum' as SponsorType
  },
  {
    name: 'Seagate Technology',
    logo: new URL('../assets/sponsors/seagate-logo.jpg', import.meta.url),
    website: new URL('https://www.seagate.com/'),
    type: 'platinum' as SponsorType
  },
  {
    name: 'Honeywell',
    logo: new URL('../assets/sponsors/honeywell-logo.jpg', import.meta.url),
    website: new URL('https://www.honeywell.com/'),
    type: 'gold' as SponsorType
  },
  {
    name: 'Resonac',
    logo: new URL('../assets/sponsors/resonac-logo.png', import.meta.url),
    website: new URL('https://www.resonac.com/'),
    type: 'gold' as SponsorType
  },
  {
    name: 'TDK',
    logo: new URL('../assets/sponsors/tdk-logo.avif', import.meta.url),
    website: new URL('https://www.tdk.com/en/index.html'),
    type: 'silver' as SponsorType
  },
  {
    name: 'Canon Anelva',
    logo: new URL('../assets/sponsors/canon-anelva-logo.png', import.meta.url),
    website: new URL('https://anelva.canon/en/'),
    type: 'silver' as SponsorType
  },
  {
    name: 'Toshiba',
    logo: new URL('../assets/sponsors/toshiba-logo.png', import.meta.url),
    website: new URL('https://www.global.toshiba/ww/top.html'),
    type: 'silver' as SponsorType
  },
  {
    name: 'Futek Furnace',
    logo: new URL('../assets/sponsors/futek-furnace-logo.png', import.meta.url),
    website: new URL('https://www.futekfurnace.com/'),
    type: 'silver' as SponsorType
  },
  {
    name: 'Broadcom',
    logo: new URL('../assets/sponsors/broadcom-logo.png', import.meta.url),
    website: new URL('https://www.broadcom.com/'),
    type: 'bronze' as SponsorType
  },
  {
    name: 'GMW Associates',
    logo: new URL('../assets/sponsors/gmw-logo.webp', import.meta.url),
    website: new URL('https://gmw.com/'),
    type: 'bronze' as SponsorType
  },
  {
    name: 'Veeco',
    logo: new URL('../assets/sponsors/veeco-logo.png', import.meta.url),
    website: new URL('https://www.veeco.com/'),
    type: 'bronze' as SponsorType
  },
  {
    name: 'Everspin',
    logo: new URL('../assets/sponsors/everspin-logo.jpeg', import.meta.url),
    website: new URL('https://www.everspin.com/'),
    type: 'bronze' as SponsorType
  },
  {
    name: 'Tanaka Precious Metals',
    logo: new URL('../assets/sponsors/tanaka-logo.webp', import.meta.url),
    website: new URL('https://tanaka-preciousmetals.com/en/'),
    type: 'bronze' as SponsorType
  }
]


const SG: string = 'Seagate Technology'
const WD: string = 'Western Digital'
const HoW: string = 'Honeywell'
const HW: string = 'TDK, Headway Technologies'
const SAM: string = 'Samsung'
const TOS: string = 'Toshiba Corporation'

const TOHAKU: string = 'Tohoku University'
const KIOXIA: string = 'Kioxia'
const UFL: string = 'University of Florida'
const AVA: string = 'Avalanche Technology'
const UCSD: string = 'UCSD'
const KMITL: string = 'KMITL'
const NIST: string = 'NIST'
const NTU: string = 'NTU'
const CNR: string = 'CNR-ISAC'
const NISEC: string= 'NISEC'
export const CONFERENCECHAIR: Person =   { name: 'Niranjan Natekar',
    company: WD,
    email: 'niranjan.natekar@wdc.com',
    role: 'Conference Chair' as RoleTypes,
  }

export  const PROGRAMCHAIRS: Person[] = [
    { name: 'Stephanie Hernandez', company: SG, email: 'stephanie.hernandez@seagate.com', role: 'Program Co-Chair' as RoleTypes },
  { name: 'Romney Katti', company: HoW, email: 'romney.katti@honeywell.com', role: 'Program Co-Chair' as RoleTypes },
  { name: 'Tobias Maletzky', company: HW, email: 'tobias.maletzky@tdk.com', role: 'Program Co-Chair' as RoleTypes },
  { name: 'Dmytro Apalkov', company: SAM, email: 'd.apalkov@samsung.com', role: 'Program Co-Chair' as RoleTypes },
  { name: 'Yuji Nakagawa', company: TOS, email: 'yuji.nagakawa.d94@mail.toshiba', role: 'Program Co-Chair' as RoleTypes },
]

export const POSTERCHAIRS: Person[] = [
    { name: 'Simon Greaves', company: TOHAKU, email: 'simon@riec.tohoku.ac.jp', role: 'Poster Co-Chair' as RoleTypes },
  { name: 'Masahiko Nakayama', company: KIOXIA, email: 'masahiko1.nakayama@kioxia.com', role: 'Poster Co-Chair' as RoleTypes },
  { name: 'Yingying Wu', company: UFL, email: 'yingyingwu@ufl.edu', role: 'Poster Co-Chair' as RoleTypes },
  { name: 'Guanzhong Wu', company: AVA, email: 'guanzhongwu@avalanche-technology.com', role: 'Poster Co-Chair' as RoleTypes },
]


export const LOCALCHAIRS: Person[] = [
  { name: 'Eric Fullerton', company: UCSD, email: 'efullerton@ucsd.edu', role: 'Local Co-Chair' as RoleTypes },
  { name: 'Vitaliy Lomakin', company: UCSD, email: 'vlomakin@ucsd.edu', role: 'Local Co-Chair' as RoleTypes },
]

export const PUBLICITYCHAIRS: Person[] = [
  { name: 'Chanon Warisarn', company: KMITL, email: 'chanon.wa@kmitl.ac.th', role: 'Publication Co-Chair' as RoleTypes },
  { name: 'Brandon Zink', company: NIST, email: 'brandon.zink@nist.gov', role: 'Publication Co-Chair' as RoleTypes },
  { name: 'S.N. Piramanayagam', company: NTU, email: 'prem@ntu.edu.sg', role: 'Publicity Co-Chair' as RoleTypes },
]

export const TREASURER: Person = { name: 'Jan-Ulrich Thiele', company: SG, email: 'jan-ulrich.thiele@seagate.com', role: 'Treasurer' as RoleTypes }


export const TECHNICALCHAIR: Person = { name: 'Marco Menarini', company: CNR, email: 'm.menarini@isac.cnr.it', role: 'Technical Chair' as RoleTypes }



export const EVENTCOORDINATOR: Person={
  name: 'Cyndi Meeves',
  company: NISEC,
  email: 'cmeeves@ucsd.edu',
  role: 'Event Coordinator' as RoleTypes
}
export const COMMITTEE: Person[] = [CONFERENCECHAIR, TREASURER, TECHNICALCHAIR, EVENTCOORDINATOR, ...PROGRAMCHAIRS, ...POSTERCHAIRS, ...LOCALCHAIRS, ...PUBLICITYCHAIRS]

export const TRAVELGRANTAWARDEMAIL = 'tmrc2026@gmail.com'

export const NAVLINKS: NavLinks = [
  { label: 'Home', to: { name: 'home' } },
  { label: 'Committee', to: { name: 'committee' } },
  //{ label: 'Invited Speaker Nominations', to: { name: 'invited-speaker-nominations' } },
  { label: 'Call for Posters', to: { name: 'call-for-posters' } },
  { label: 'Registration', to: { name: 'conference-registration' } },
  { group: 'Program',
    links: [
      { label: 'Program Overview', to: { name: 'program-overview' } },
      { label: 'Invited Speakers', to: { name: 'invited-speakers' } },
      { label: 'Conference Banquet', to: { name: 'conference-banquet' } },
      { label: 'Keynote Speaker', to: { name: 'keynote-speaker' } },
      { label: 'Poster Session', to: { name: 'poster-session' } },
      { label: 'Standards in Magnetics Workshop', to: { name: 'standards-in-magnetics-workshop' } },
      { label: 'Entertainment at TMRC', to: { name: 'entertainment-at-tmrc' } },
    ]
  },
  //{ label: 'Sponsors', to: { name: 'sponsors' } },
  { label: 'Conference Location and Directions', to: { name: 'conference-location-and-directions' } },
  { group: 'Students Awards',
    links: [
      { label: 'Neil Smith Award', to: { name: 'neil-smith-award' } },
      { label: 'Travel Grants', to: { name: 'travel-grants' } },
    ]
  },
  { label: 'Visa Information', to: { name: 'visa-information' } },
  { label: 'Publication Information', to: { name: 'publication-information' } },
  { label: 'Digest Submission', to: { name: 'digest-submission' } },

]

export const CALENDARDOWNLOADLINK: string = '9c627d6dc6604b4d7564986c937347464c7f3f1650bef57e19364687a6200da3@group.calendar.google.com'


import { Temporal } from '@js-temporal/polyfill'
import { Deadline } from '@/stores/Deadline'

export const INVITEDSPEAKERS: Array<InvitedSpeaker>  = [
{groupId: 'A',paperId:1, date: Temporal.ZonedDateTime.from('2026-08-03T09:00:00-07:00[America/Los_Angeles]'), name: 'Shinji Isogami', affiliation: 'NIMS', title: 'Orbital torque memories based on the nitrospinics concept', id: 3, len: 25},
{groupId: 'A',paperId:2, date: Temporal.ZonedDateTime.from('2026-08-03T09:25:00-07:00[America/Los_Angeles]'), name: 'Cheng Gong', affiliation: 'University of Maryland College Park', title: 'All-vdW multiferroic tunnel junctions for novel memory hardware', id: 1, len: 25},
{groupId: 'A',paperId:3, date: Temporal.ZonedDateTime.from('2026-08-03T09:50:00-07:00[America/Los_Angeles]'), name: 'Jaimin Kang', affiliation: 'Northwestern University', title: 'Octupole-driven spin-transfer torque switching of all-antiferromagnetic tunnel junctions', id: 2, len: 25},
{groupId: 'A',paperId:4, date: Temporal.ZonedDateTime.from('2026-08-03T10:30:00-07:00[America/Los_Angeles]'), name: 'Ping Liu', affiliation: 'Univ. of Texas at Arlington', title: 'Magnetic Hardening in Low-Dimensional Ferromagnets', id: 4, len: 25},
{groupId: 'A',paperId:5, date: Temporal.ZonedDateTime.from('2026-08-03T10:55:00-07:00[America/Los_Angeles]'), name: 'Hang Chi', affiliation: 'University of Ottawa', title: 'Novel Exchange Coupled Topological Interfaces for Magnetic Recording Applications', id: 5, len: 25},
{groupId: 'A',paperId:6, date: Temporal.ZonedDateTime.from('2026-08-03T11:20:00-07:00[America/Los_Angeles]'), name: 'Yukiko Takahashi', affiliation: 'NIMS', title: 'New atomic structure of FePt granular medium with h-BN matrix', id: 7, len: 25},
{groupId: 'A',paperId:7, date: Temporal.ZonedDateTime.from('2026-08-03T11:45:00-07:00[America/Los_Angeles]'), name: 'Naoyuki Narita', affiliation: 'Toshiba corporation', title: 'MAMR study using new STO design and medium optimization (tentative)', id: 32, len: 25},
{groupId: 'B',paperId:1,	date: Temporal.ZonedDateTime.from('2026-08-03T13:15:00-07:00[America/Los_Angeles]'), name: 'Takuya Matsumoto', affiliation: 'WD', title: 'NFT Design for >4 Tb/in2', id: 24, len: 25},
{groupId: 'B',paperId:2, date: Temporal.ZonedDateTime.from('2026-08-03T13:40:00-07:00[America/Los_Angeles]'), name: 'Sam Zheng', affiliation: 'Seagate', title: 'Optimizing ADC of HIMR', id: 25, len: 25},
{groupId: 'B',paperId:3, date: Temporal.ZonedDateTime.from('2026-08-03T14:05:00-07:00[America/Los_Angeles]'), name: 'Steve Granz', affiliation: 'Seagate', title: 'MSMR Dependence on Channel Bit Density, Overhang and Re-read/Reader Count for Conventional and Shingled HAMR', id: 29, len: 25},
{groupId: 'B',paperId:4, date: Temporal.ZonedDateTime.from('2026-08-03T14:30:00-07:00[America/Los_Angeles]'), name: 'Dongying Li', affiliation: 'WD', title: 'Quantifying the role of reflection in mode hop', id: 28, len: 25},
{groupId: 'B',paperId:5, date: Temporal.ZonedDateTime.from('2026-08-03T15:10:00-07:00[America/Los_Angeles]'), name: 'Aiko Sakoguchi', affiliation: 'WD', title: 'Characterization of adjacent track interference using multi-write THMap for high track density in HAMR', id: 26, len: 25},
{groupId: 'B',paperId:6, date: Temporal.ZonedDateTime.from('2026-08-03T15:35:00-07:00[America/Los_Angeles]'), name: 'Pierre-Olivier Jubert', affiliation: 'WD', title: 'HAMR THMap measurements with minor loops', id: 27, len: 25},
{groupId: 'B',paperId:7, date: Temporal.ZonedDateTime.from('2026-08-03T16:00:00-07:00[America/Los_Angeles]'), name: 'Bernhard Knigge', affiliation: 'WD', title: 'HAMR Smear study', id: 30, len: 25},
{groupId: 'B',paperId:8, date: Temporal.ZonedDateTime.from('2026-08-03T16:25:00-07:00[America/Los_Angeles]'), name: 'Lei Li', affiliation: 'University of Pittsburgh', title: 'Non-PFAS Media Lube for hard disk drives (HDDs)?', id: 31, len: 25},
{groupId: 'C',paperId:1,	date: Temporal.ZonedDateTime.from('2026-08-04T09:00:00-07:00[America/Los_Angeles]'), name: 'Shinji Yuasa', affiliation: 'AIST', title: 'Tentative title: Voltage-controlled MRAM', id: 33, len: 25},
{groupId: 'C',paperId:2, date: Temporal.ZonedDateTime.from('2026-08-04T09:25:00-07:00[America/Los_Angeles]'), name: 'Hiroaki Sukegawa', affiliation: 'NIMS', title: 'Breaking the TMR plateau: Achieving high performance in magnetic tunnel junctions using advanced interface and barrier materials design', id: 34, len: 25},
{groupId: 'C',paperId:3, date: Temporal.ZonedDateTime.from('2026-08-04T09:50:00-07:00[America/Los_Angeles]'), name: 'Fred Mancoff', affiliation: 'Everspin', title: 'High Reliability, 125 C Capable STT-MRAM', id: 37, len: 25},
{groupId: 'C',paperId:4, date: Temporal.ZonedDateTime.from('2026-08-04T10:30:00-07:00[America/Los_Angeles]'), name: 'Panos Filippou', affiliation: 'IBM', title: 'Tuning Ferrimagnetic Heuslers for MRAM: Materials Driven Gains in Mn3Ge MTJ Switching and TMR', id: 39, len: 25},
{groupId: 'C',paperId:5, date: Temporal.ZonedDateTime.from('2026-08-04T10:55:00-07:00[America/Los_Angeles]'), name: 'Goran Mihajlovic', affiliation: 'WD', title: 'Achieving low write error rates in perpendicular spin orbit torque MRAM: A micromagnetic modeling feasibility study', id: 40, len: 25},
{groupId: 'C',paperId:6, date: Temporal.ZonedDateTime.from('2026-08-04T11:20:00-07:00[America/Los_Angeles]'), name: 'Hiroaki Yoda', affiliation: 'Yoda-S', title: 'Write Efficiency Improvement and High Potentials of SOT-MRAMs', id: 35, len: 25},
{groupId: 'C',paperId:7, date: Temporal.ZonedDateTime.from('2026-08-04T11:45:00-07:00[America/Los_Angeles]'), name: 'Prof. Shan Wang', affiliation: 'Stanford University', title: 'RAM-Like, High Density, Field-Free 2-Terminal SOT-MRAM for Energy-Efficient AI Compute at Nanosecond Timescale', id: 45, len: 25},
{groupId: 'D',paperId:1, date: Temporal.ZonedDateTime.from('2026-08-04T13:15:00-07:00[America/Los_Angeles]'), name: 'Jian-Ping Wang', affiliation: 'University of Minnesota', title: 'Energy-Efficient MTJ Switching via Electric Field Control', id: 36, len: 25},
{groupId: 'D',paperId:2, date: Temporal.ZonedDateTime.from('2026-08-04T13:40:00-07:00[America/Los_Angeles]'), name: 'Olaf Van T Erve', affiliation: 'Naval Research Laboratory', title: 'Conductivity Mismatch in Topological-Insulator-Based Spin-Orbit-Torque MRAM', id: 44, len: 25},
{groupId: 'D',paperId:3, date: Temporal.ZonedDateTime.from('2026-08-04T14:05:00-07:00[America/Los_Angeles]'), name: 'Tatsuya Kishi', affiliation: 'Topologic Inc.', title: 'Development of ultra-high-speed TL-RAM (Topological MRAM) using novel topological materials', id: 38, len: 25},
{groupId: 'D',paperId:4, date: Temporal.ZonedDateTime.from('2026-08-04T14:30:00-07:00[America/Los_Angeles]'), name: 'Rina Takashima', affiliation: 'Kioxia', title: 'Microscopic modeling of stress-induced degradation and dielectric breakdown in MTJ barrier for high-density STT-MRAM', id: 41, len: 25},
{groupId: 'D',paperId:5, date: Temporal.ZonedDateTime.from('2026-08-04T15:10:00-07:00[America/Los_Angeles]'), name: 'Hans Nembach', affiliation: 'Physicist, NIST', title: 'Heisenberg Exchange Metrology to Advance MRAM Performance', id: 43, len: 25},
{groupId: 'D',paperId:6, date: Temporal.ZonedDateTime.from('2026-08-04T15:35:00-07:00[America/Los_Angeles]'), name: 'David Hughart', affiliation: 'Sandia National Laboratories', title: 'Reliability and Radiation Response of Magnetic Tunnel Junction Technologies', id: 46, len: 25},
{groupId: 'D',paperId:7, date: Temporal.ZonedDateTime.from('2026-08-04T16:00:00-07:00[America/Los_Angeles]'), name: 'Michael Quinsat', affiliation: 'Kioxia', title: 'Demonstration of CMOS Compatible Remote Reading for Magnetic Shift Register Technology toward Next Generation 3D Memory', id: 42, len: 25},
{groupId: 'D',paperId:8, date: Temporal.ZonedDateTime.from('2026-08-04T16:25:00-07:00[America/Los_Angeles]'), name: 'Jeongmin Hong', affiliation: 'UC Berkeley and School of Sciences and Hubei University of Technology, Wuhan', title: 'Nanoelectromechanical spin memory: a scalable and energy-efficient hybrid for next-generation nonvolatile electronics', id: 47, len: 25},
{groupId: 'E',paperId:1, date: Temporal.ZonedDateTime.from('2026-08-05T08:00:00-07:00[America/Los_Angeles]'), name: 'Andrew Kent', affiliation: 'New York University', title: 'Stochastic Magnetic Tunnel Junctions for Probabilistic Computing and  Solving Combinatorial Optimization Problems', id: 9, len: 25},
{groupId: 'E',paperId:2, date: Temporal.ZonedDateTime.from('2026-08-05T08:25:00-07:00[America/Los_Angeles]'), name: 'Joseph S. Friedman', affiliation: 'The University of Texas at Dallas', title: 'Neuromorphic Hebbian learning with magnetic tunnel junction synapses', id: 15, len: 25},
{groupId: 'E',paperId:3, date: Temporal.ZonedDateTime.from('2026-08-05T08:50:00-07:00[America/Los_Angeles]'), name: 'Cheng Wang', affiliation: 'Iowa State University', title: 'Spintronic systems for the continuum of analog and digital AI acceleration', id: 11, len: 25},
{groupId: 'E',paperId:4, date: Temporal.ZonedDateTime.from('2026-08-05T09:30:00-07:00[America/Los_Angeles]'), name: 'Dafine Ravelosona', affiliation: 'Spin-Ion Technologies', title: 'Passive STT-MRAM Crossbars for In-Memory Hardware-in-the-Loop and Continual Learning', id: 10, len: 25},
{groupId: 'E',paperId:5, date: Temporal.ZonedDateTime.from('2026-08-05T09:55:00-07:00[America/Los_Angeles]'), name: 'Massimiliano Di Ventra', affiliation: 'University of California, San Diego', title: 'Harnessing MemComputing for AI Applications', id: 13, len: 25},
{groupId: 'E',paperId:6, date: Temporal.ZonedDateTime.from('2026-08-05T10:20:00-07:00[America/Los_Angeles]'), name: 'Mehdi Saligane', affiliation: 'Brown University', title: 'AI for chips and Chips for AI', id: 14, len: 25},
{groupId: 'E',paperId:7, date: Temporal.ZonedDateTime.from('2026-08-05T10:45:00-07:00[America/Los_Angeles]'), name: 'Yuxin Wang', affiliation: 'University of Delaware', title: 'AVS: A Computational and Hierarchical Storage System for Autonomous Vehicles', id: 12, len: 25},
{groupId: 'F',paperId:1, date: Temporal.ZonedDateTime.from('2026-08-05T12:15:00-07:00[America/Los_Angeles]'), name: 'Randall Victora', affiliation: 'University Of Minnesota', title: 'Fundamental Limits of Vector Recording', id: 16, len: 25},
{groupId: 'F',paperId:2, date: Temporal.ZonedDateTime.from('2026-08-05T12:40:00-07:00[America/Los_Angeles]'), name: 'Jason Jury', affiliation: 'WD', title: 'Analysis of 2D Channel Features at 4 Tb/in^2 and Beyond Using Simulated Readback Signals', id: 18, len: 25},
{groupId: 'F',paperId:3, date: Temporal.ZonedDateTime.from('2026-08-05T13:05:00-07:00[America/Los_Angeles]'), name: 'Jorge Campello De Souza', affiliation: 'WD', title: 'Ultra-SMR and Its Field Adoption', id: 22, len: 25},
{groupId: 'F',paperId:4, date: Temporal.ZonedDateTime.from('2026-08-05T13:30:00-07:00[America/Los_Angeles]'), name: 'Rick L. Galbraith', affiliation: 'WD', title: 'Cypher-Lock Preamble for Asynchronously Sampled Data Channels', id: 17, len: 25},
{groupId: 'F',paperId:5, date: Temporal.ZonedDateTime.from('2026-08-05T14:10:00-07:00[America/Los_Angeles]'), name: 'John Contreras', affiliation: 'WD', title: 'Spin Orbit-Torque (SOT) Readers Amplifiers and Interconnect Design Configurations', id: 21, len: 25},
{groupId: 'F',paperId:6, date: Temporal.ZonedDateTime.from('2026-08-05T14:35:00-07:00[America/Los_Angeles]'), name: 'Amir Sayyafan', affiliation: 'WD', title: 'Noise Component Analysis of ePMR and HAMR across radius for Areal Density Improvements', id: 20, len: 25},
{groupId: 'F',paperId:7, date: Temporal.ZonedDateTime.from('2026-08-05T15:00:00-07:00[America/Los_Angeles]'), name: 'Ali Ghoreyshi', affiliation: 'Seagate', title: 'Modeling of ultra high areal density recording on ferroelectric media', id: 19, len: 25},
{groupId: 'F',paperId:8, date: Temporal.ZonedDateTime.from('2026-08-05T15:25:00-07:00[America/Los_Angeles]'), name: 'Jun Ohno', affiliation: 'WD', title: 'Ferroelectric recording for HDD application', id: 23, len: 25},
]

export const KEYNOTESPEAKER: InvitedSpeaker = {
   name: 'Dr. Jeffrey Bokor',
   affiliation: 'Space Force',
   biography: 'Mr. Nackieb (“Nick”) Kamin serves as the Technical Director Technical Director Technical Director Technical Director for Science and Technology at the Headquarters Space Force in Washington, DC. In this role, he develops long-term military requirements for the Space Force and interacts with other principals, operational commanders, combatant commands, acquisition, and international communities to address cross-organizational science and technical issues and solutions. He represents U.S. Space Force science and technology on decisions, high-level planning, and policy, building coalitions and alliances throughout the U.S. government, industry, academia, the international community, and other scientific and technology organizations. He also advises Space Force’s Chief Science Oﬃcer in space research and development strategies.',
   title: 'Science & Technology Determines the Futures',
   abstract: 'Today’s science and technology investments are tomorrow’s operational superiority.The question is not whether we will innovate—it’s whether we will innovate faster than our adversaries.\nOver the past century, strategic science and technology investments have been the cornerstone of America’s space dominance. From the early 1900s, when visionary S&T funding supported pioneers like Robert Goddard in rocketry and the Wright Brothers in aeronautics, foundational breakthroughs in propulsion and materials science emerged. The Space Race of the 1960s catalyzed unprecedented S&T investment, yielding revolutionary advances in guidance systems, life support, and spacecraft design that culminated in the Apollo program and established American space leadership. Subsequent decades of sustained investment in satellite communications, Earth observation, and space-based sensing transformed global commerce and national security. The Cold War era drove innovations in resilience and autonomous systems, while post-Cold War investments shifted focus toward distributed architectures and multi-domain integration. Today’s advanced capabilities—from cislunar operations to autonomous spacecraft to space domain awareness—are the direct result of this century-long commitment to S&T. Each generation of investment built upon the discoveries of its predecessors, creating an exponential acceleration of technological advancement. The trajectory from Goddard’s early rockets to today’s sophisticated space systems demonstrates an immutable truth: sustained, strategic S&T investment is the engine of technological superiority, operational capability, and national security. The future of space power will be determined not by yesterday’s innovations, but by the S&T investments we make today.',
   id: 1,
   date: Temporal.ZonedDateTime.from('2026-08-04T19:00:00-07:00[America/Los_Angeles]'),
   groupId: 'Keynote',
   paperId: 1,
   photoUrl: new URL('../assets/keynote-speaker.png', import.meta.url),
}

export const WORKSHOPSPEAKER: InvitedSpeaker[] = [{
  name: 'Sergio Montoya',
  affiliation: 'UCSD',
  title: 'Temperature-dependent Magnetic Properties of HAMR media and their implications on potential methods for sanitization of the recording medium',
  id: 1,
  groupId: 'Standards in Magnetics Workshop',
  paperId: 1,
  date: Temporal.ZonedDateTime.from('2026-08-05T17:00:00-07:00[America/Los_Angeles]'),
},
{ name: 'David Logue',
  affiliation: 'Ontrack',
  title: 'Proving Data Is Gone: Advancing Third-Party Erasure Verification for Next-Generation Magnetic Drives',
  id: 2,
  groupId: 'Standards in Magnetics Workshop',
  paperId: 2,
  date: Temporal.ZonedDateTime.from('2026-08-05T18:00:00-07:00[America/Los_Angeles]'),
},
{ name: 'Takahide Kubota',
  affiliation: 'Tohoku University',
  title: 'Magnetoresistance Sensors: Recent Progress and Open Questions for Standards Development',
  id: 3,
  groupId: 'Standards in Magnetics Workshop',
  paperId: 3,
  date: Temporal.ZonedDateTime.from('2026-08-05T19:00:00-07:00[America/Los_Angeles]'),
},
{ name: 'Alexandria Will-Cole',
  affiliation: 'Sandia National Laboratories',
  title: 'MRAM Magnetic Immunity: Standardization Case Study of a Critical, Emerging Technology',
  id: 4,
  groupId: 'Standards in Magnetics Workshop',
  paperId: 4,
  date: Temporal.ZonedDateTime.from('2026-08-05T20:00:00-07:00[America/Los_Angeles]'),
},
{ name: 'Mircea Stan',
  affiliation: 'University of Virginia',
  title: 'Pioneering Spintronics: Honoring the Enduring Impact of Stuart Wolf',
  id: 5,
  groupId: 'Standards in Magnetics Workshop',
  paperId: 5,
  date: Temporal.ZonedDateTime.from('2026-08-05T21:00:00-07:00[America/Los_Angeles]'),
}
]


export const DEADLINES: Array<Deadline> = [
  new Deadline(Temporal.PlainDate.from('2026-02-24'), 'Invite nominations for invited speakers'),
  new Deadline(Temporal.PlainDate.from('2026-04-17'), 'Nomination deadline for Invited Speakers'),
  new Deadline(Temporal.PlainDate.from('2026-05-01'), 'Invitations to Invited Speakers'),
  new Deadline(Temporal.PlainDate.from('2026-05-11'), 'Early Registration'),
  new Deadline(Temporal.PlainDate.from('2026-05-16'), 'Acceptance for speaker invitation'),
  new Deadline(Temporal.PlainDate.from('2026-05-29'), 'Poster Digest Submission'),
  new Deadline(Temporal.PlainDate.from('2026-06-05'), 'Notice for Acceptance of Posters'),
  new Deadline(Temporal.PlainDate.from('2026-06-20'), 'Early Registration Closes'),
  new Deadline(Temporal.PlainDate.from('2026-07-05'), 'Invited Speaker digests'),
  new Deadline(Temporal.PlainDate.from('2026-07-26'), 'Manuscript Submission Deadline'),
  new Deadline(Temporal.PlainDate.from('2026-08-02'), 'IEEE Standards Summit Workshop'),
  new Deadline(Temporal.PlainDate.from('2026-08-03'), 'TMRC 2026 Conference starts'),
]
