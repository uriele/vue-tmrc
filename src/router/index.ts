import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InformationView from '../views/InformationView.vue'
import CommitteeView from '../views/CommitteeView.vue'
import ProgramView from '../views/ProgramView.vue'
import TravelView from '../views/TravelView.vue'
import SpeakerNominationsView from '../views/InvitedSpeakerNominationsView.vue'
import RegistrationView from '../views/RegistrationView.vue'
import type { MapMarker } from '@/stores/MapMarker'

const formLink =
  'https://docs.google.com/forms/d/e/1FAIpQLSdlvy5A1-bQaxdgEIpaPOyuFYbyR-cSseKA5m0tO3obVZPsBw/viewform'
const chairsEmail = 'niranjan.natekar@wdc.com'
const ucsdLatLng = { lat: 32.8801, lng: -117.234 }
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
  },
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
      },
    },
    {
      path: '/information',
      name: 'information',
      component: InformationView,
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
        zoom: 15,
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
  ],
})

export default router
