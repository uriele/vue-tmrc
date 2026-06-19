import { Temporal } from '@js-temporal/polyfill'
export interface InvitedSpeaker {
  groupId: string
  paperId: number
  name: string
  affiliation?: string
  title: string
  abstract?: string
  biography?: string
  id: number
  len?: number
  photoUrl?: URL
  date: Temporal.ZonedDateTime
}
