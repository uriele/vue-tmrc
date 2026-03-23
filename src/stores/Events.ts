import type { MapMarker } from './MapMarker'
export interface Event {
  date: string | Date
  time?: string
  event: string
  location?: MapMarker
  description?: string
}
