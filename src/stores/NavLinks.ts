import type { RouteLocationRaw } from 'vue-router'

export interface SimpleNavLink {
  _id?: string
  label: string
  to: RouteLocationRaw
}

export interface NavLinkGroup {
  _id?: string
  group: string
  links: SimpleNavLink[]
}

export type NavLink = SimpleNavLink | NavLinkGroup
export type NavLinks = NavLink[]
