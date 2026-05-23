import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CommitteeView from '../views/CommitteeView.vue'
import ProgramView from '../views/ProgramView.vue'
import TravelView from '../views/TravelView.vue'
import SpeakerNominationsView from '../views/InvitedSpeakerNominationsView.vue'
import BanquetView from '../views/BanquetView.vue'
import KeynoteSpeakersView from '@/views/KeynoteSpeakersView.vue'
import RegistrationView from '../views/RegistrationView.vue'
import InvitedSpeakerView from '@/views/InvitedSpeakerView.vue'
import EntertainmentView from '@/views/EntertainmentView.vue'
import MapInfoView from '@/views/MapInfoView.vue'
import PosterSessionView from '@/views/PosterSessionView.vue'
import VisaInformationView from '@/views/VisaInformationView.vue'
import DigestSubmissionView from '@/views/DigestSubmission.vue'
import PublicationInformationView from '@/views/PublicationInformationView.vue'
import UpcomingConferencesView from '@/views/UpcomingConferencesView.vue'
import WorkshopView from '@/views/WorkshopView.vue'
import NeilSmithAwardView from '@/views/NeilSmithAwardView.vue'
import CallForPosterView from '@/views/CallForPosterView.vue'
import SponsorView from '@/views/SponsorView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import * as Constants from './routerConstants'
import TravelGrantView from '@/views/TravelGrantView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: {
        formLink: Constants.FORMLINK,
        chairsEmail: Constants.CHAIRSEMAIL
      },
    },
    {
      path: '/invited-speaker-nominations',
      name: 'invited-speaker-nominations',
      component: SpeakerNominationsView,
      props: {
        formLink: Constants.FORMLINK,
        chairsEmail: Constants.CHAIRSEMAIL,
        downloadLinks: Constants.FLYERLINKS
      },
    },
    { path: '/program/invited-speakers',
      name: 'invited-speakers',
      component: InvitedSpeakerView,
      props: {
        speakers: Constants.INVITEDSPEAKERS
      },
     },
    {
      path: '/committee',
      name: 'committee',
      component: CommitteeView,
      props: {
        committee: Constants.COMMITTEE
      },
    },
    {
      path: '/program/program-overview',
      name: 'program-overview',
      component: ProgramView,
      props: {
        apiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY || '',
        mapID: import.meta.env.VITE_GOOGLE_MAP_ID || '',
        center: Constants.UCSDLATLNG,
        zoom: 10,
        markers: Constants.MARKERS,
        programEvents: Constants.PROGRAMEVENTS
      },
    },

    {
      path: '/program/conference-banquet',
      name: 'conference-banquet',
      component: BanquetView,
      props: {
        marker: Constants.GREATHALL,
        imageSrc: Constants.GREATHALLIMAGE
      }
    },
    {
      path: '/conference-location-and-directions',
      name: 'conference-location-and-directions',
      component: MapInfoView,
      props: {
        apiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY || '',
        mapID: import.meta.env.VITE_GOOGLE_MAP_ID || '',
        center: Constants.UCSDLATLNG,
        zoom: 14,
        markers: Constants.MARKERS
      },
    },
    {
      path: '/conference-registration',
      name: 'conference-registration',
      component: RegistrationView,
    },
    {
      path: '/travel',
      name: 'travel',
      component: TravelView,
    },
    {
      name: 'poster-session',
      path: '/program/poster-session',
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
        downloads: Constants.DOWNLOADLINKS
      },
    },
    {
      name: 'publication-information',
      path: '/publication-information',
      component: PublicationInformationView,
    },
    {
      name: 'standards-in-magnetics-workshop',
      path: '/program/standards-in-magnetics-workshop',
      component: WorkshopView,
      props: {
        marker: Constants.CMRR,
        registrationLink: Constants.WORKSHOPREGISTRATIONLINK
      }
    },
    { name: 'entertainment-at-tmrc',
      path: '/program/entertainment-at-tmrc',
      component: EntertainmentView,
    },
    {
      name:'neil-smith-award',
      path: '/students-awards/neil-smith-award',
      component: NeilSmithAwardView,
    },
    {
      name:'call-for-posters',
      path: '/call-for-posters',
      component: CallForPosterView,
      props: {
        formLink: Constants.CALLFORPOSTERLINK
      }
    },
    {
      path: '/sponsors',
      name: 'sponsors',
      component: SponsorView,
      props: {
        corporateSponsors: Constants.CORPORATESPONSORS,
        sponsors: Constants.SPONSORS,
        localHosts: Constants.LOCALHOSTS
      }
    },
    {
      path: '/students-awards/travel-grants',
      name: 'travel-grants',
      component: TravelGrantView,
      props: {
        grantawardemail: Constants.TRAVELGRANTAWARDEMAIL,
        conferencechair: Constants.CONFERENCECHAIR
      }
    },
    {
      name: 'upcoming-conferences',
      path: '/upcoming-conferences',
      component: UpcomingConferencesView,
    },
    {
      name: 'keynote-speaker',
      path: '/program/keynote-speaker',
      component: KeynoteSpeakersView,
    },
    // TODO: Remove this route after testing the calendar view
    {       name: 'testing-calendar',
            path: '/testing-calendar',
            component: () => import('@/views/CalendarView.vue'),
            props: {
                calLink: Constants.CALENDARDOWNLOADLINK
              }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView,
    }
  ],
}
)

export default router
