
export type MarkerType = 'venue' | 'hotel' | 'restaurant' | 'parking' | 'other'

export interface MapMarker {
  id: string
  name: string
  position: {
    lat: number
    lng: number
  }
  description?: string
  link?: string
  src?: URL
  type?: MarkerType
}
