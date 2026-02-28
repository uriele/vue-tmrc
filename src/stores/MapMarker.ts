export interface MapMarker {
  id: string
  name: string
  position: {
    lat: number
    lng: number
  }
  description?: string
  link?: string
}
