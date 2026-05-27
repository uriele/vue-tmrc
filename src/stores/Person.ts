export type RoleTypes = 'Conference Chair' | 'Program Co-Chair' | 'Poster Co-Chair' | 'Local Co-Chair' | 'Publication Co-Chair' | 'Publicity Co-Chair' | 'Treasurer' | 'Technical Chair' | 'Event Coordinator';
export interface Person {
    name: string,
    email: string,
    company: string,
    role?: RoleTypes
}
