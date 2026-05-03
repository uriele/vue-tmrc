export type SponsorType = 'platinum' | 'gold' | 'silver' | 'bronze' | 'none'

export interface Sponsor {
    name: string,
    logo?: URL,
    website?: URL,
    type: SponsorType
}
