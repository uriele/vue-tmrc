import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CommitteeView from '../views/CommitteeView.vue'
import ProgramView from '../views/ProgramView.vue'
import TravelView from '../views/TravelView.vue'
import SpeakerNominationsView from '../views/InvitedSpeakerNominationsView.vue'
import KeyNoteBanquetView from '../views/KeyNoteBanquetView.vue'
import RegistrationView from '../views/RegistrationView.vue'
import type { MapMarker } from '@/stores/MapMarker'
import MapInfoView from '@/views/MapInfoView.vue'
import PosterSessionView from '@/views/PosterSessionView.vue'
import VisaInformationView from '@/views/VisaInformationView.vue'
import DigestSubmissionView from '@/views/DigestSubmission.vue'
import PublicationInformationView from '@/views/PublicationInformationView.vue'
import type { DownloadLink } from '@/stores/DownloadLinks'
import type { Event } from '@/stores/Events'
const formLink =
  'https://docs.google.com/forms/d/e/1FAIpQLSdlvy5A1-bQaxdgEIpaPOyuFYbyR-cSseKA5m0tO3obVZPsBw/viewform'
const chairsEmail = 'niranjan.natekar@wdc.com'
const ucsdLatLng = { lat: 32.8801, lng: -117.234 }

const flyerLinks: DownloadLink[] = [
  {
    label: 'Extended Call for Nominations',
    url: '/downloads/TMRC_2026_Extended_Call_for_Nominations.pdf',
    filename: 'TMRC_2026_Extended_Call_for_Nominations.pdf'
  }
]

const downloadLinks: DownloadLink[] = [
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


const AtkinsonHall: MapMarker = {
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

const TorreyPinesGliderPort: MapMarker = {
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


const GreatHall: MapMarker = {
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

const kayakers: MapMarker = {
  id: 'kayakers',
  name: 'La Jolla Shores',
  position: {
    lat: 32.85780167258335,
    lng: -117.25724802328908
  },
  description: 'A popular beach located south of the conference venue, known for its kayaking and snorkeling opportunities.',
  link: 'PMvuupCcjqT4Wqcy5',
}


const programEvents: Array<Event> = [
  {
    //Aug 2, 2026, 3:30-6:30pm San Diego Time
    date: 'Aug 2',
    time: '3:30-6:30pm',
    event: 'IEEE Standards Committee workshop',
    location: AtkinsonHall,
    description: 'The official opening ceremony of the conference.'
  },
  {
    date: 'Aug 2',
    time: '7:00-9:00pm',
    event: 'Reception',
    location: AtkinsonHall,
    description: 'Welcome reception with light refreshments and an opportunity to network with fellow attendees.'
  },
  {
    date: 'Aug 3-5',
    event: 'Oral and Poster Sessions',
    location: AtkinsonHall,
  },
  {
    date: 'Aug 3',
    time: '7:00-10:00pm',
    event: 'Dinner Party (Social Event)',
    location: TorreyPinesGliderPort,
    description: 'A social event for conference attendees to enjoy dinner and networking in a relaxed setting.'
  },
  {
    date: 'Aug 4',
    time: '7:00-10:00pm',
    event: 'Banquet (Social Event)',
    location: GreatHall,
    description: 'The conference banquet, featuring a keynote speaker and an opportunity for attendees to socialize and celebrate the conference.'
  },
  {
    date: 'Aug 5',
    time: 'afternoon',
    event: 'Kayaking (Social Event)',
    location: kayakers,
    description: 'A social event for conference attendees to enjoy kayaking and snorkeling in a beautiful coastal setting.'
  }
]

const markers: Array<MapMarker> = [
  AtkinsonHall,
  TorreyPinesGliderPort,
  GreatHall,
  kayakers,
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
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: {
        formLink: formLink,
        chairsEmail: chairsEmail,
      },
    },
    {
      path: '/invited-speaker-nominations',
      name: 'invited-speaker-nominations',
      component: SpeakerNominationsView,
      props: {
        formLink: formLink,
        chairsEmail: chairsEmail,
        downloadLinks: flyerLinks,
      },
    },
    {
      path: '/committee',
      name: 'committee',
      component: CommitteeView,
    },
    {
      path: '/program',
      name: 'program',
      component: ProgramView,
      props: {
        apiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY || '',
        mapID: import.meta.env.VITE_GOOGLE_MAP_ID || '',
        center: ucsdLatLng,
        zoom: 10,
        markers: markers,
        programEvents: programEvents,
      },
    },

    {
      path: '/keynote-speakers-and-banquet',
      name: 'keynote-speakers-and-banquet',
      component: KeyNoteBanquetView,
    },
    {
      path: '/conference-location-and-directions',
      name: 'conference-location-and-directions',
      component: MapInfoView,
      props: {
        apiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY || '',
        mapID: import.meta.env.VITE_GOOGLE_MAP_ID || '',
        center: ucsdLatLng,
        zoom: 14,
        markers: markers,
      },
    },
    {
      path: '/registration',
      name: 'registration',
      component: RegistrationView,
    },
    {
      path: '/travel',
      name: 'travel',
      component: TravelView,
    },
    {
      name: 'poster-session',
      path: '/poster-session',
      component: PosterSessionView,
    },
    {
      path: '/visa-information',
      name: 'visa-information',
      component: VisaInformationView,
    },
    {
      name: 'digest-submission',
      path: '/digest-submission',
      component: DigestSubmissionView,
      props: {
        downloads: downloadLinks,
      },
    },
    {
      name: 'publication-information',
      path: '/publication-information',
      component: PublicationInformationView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue'),
    }
  ],
}
)

export default router
