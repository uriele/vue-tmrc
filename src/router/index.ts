import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InformationView from '../views/InformationView.vue'
import CommitteeView from '../views/CommitteeView.vue'
import ProgramView from '../views/ProgramView.vue'
import TravelView from '../views/TravelView.vue'
import SpeakerNominationsView from '../views/InvitedSpeakerNominationsView.vue'
import RegistrationView from '../views/RegistrationView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/information',
      name: 'information',
      component: InformationView,
    },
    {
      path: '/invited-speaker-nominations',
      name: 'invited-speaker-nominations',
      component: SpeakerNominationsView,
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
