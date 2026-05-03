import type { MapMarker } from '@/stores/MapMarker'
import type { DownloadLink } from '@/stores/DownloadLinks'
import type { Event } from '@/stores/Events'
import type { Sponsor, SponsorType } from '@/stores/Sponsor'
import type { Person, RoleTypes } from '@/stores/Person'

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
  }

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
    name: 'IEEE Magnetics Society',
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

export const COMMITTEE: Person[] = [CONFERENCECHAIR, TREASURER, TECHNICALCHAIR, ...PROGRAMCHAIRS, ...POSTERCHAIRS, ...LOCALCHAIRS, ...PUBLICITYCHAIRS]

export const TRAVELGRANTAWARDEMAIL = 'tmrc2026@gmail.com'
