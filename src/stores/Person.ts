export type RoleTypes = 'Program Co-Chair' | 'Poster Co-Chair' | 'Local Co-Chair' | 'Publication Co-Chair' | 'Publicity Co-Chair' | 'Treasurer' | 'Technical Chair';
export interface Person {
    name: string,
    email: string,
    company: string,
    role?: RoleTypes
}
