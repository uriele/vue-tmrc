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


const markers: Array<MapMarker> = [
  {
    id: '1',
    name: 'CMRR Building',
    position: {
      lat: 32.88053452456918,
      lng: -117.23580922408699,
    },
    description: 'The conference venue for TMRC 2024.',
    link: 'qArw76N8qV3SULFS6',
    src: new URL('../assets/conference.svg', import.meta.url),
  },
  {
    id: '2',
    name: 'Faculty Club',
    position: {
      lat: 32.8794531309708,
      lng: -117.23955819831193,
    },
    description: 'The location for the conference banquet on the evening of June 26th.',
    link: 'VjMz16yc4y2jm2w58',
    src: new URL('../assets/restaurant.svg', import.meta.url),
  },
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
        zoom: 15.4,
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
      component: () => VisaInformationView,
    },
    {
      name: 'digest-submission',
      path: '/digest-submission',
      component: () => DigestSubmissionView,
      props: {
        downloads: downloadLinks,
      },
    },
    {
      name: 'publication-information',
      path: '/publication-information',
      component: () => PublicationInformationView,
    },

  ],
}
)

export default router
