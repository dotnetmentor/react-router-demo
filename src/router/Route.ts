import { IndexRouteObject, NonIndexRouteObject } from 'react-router-dom'

type IndexRoute = IndexRouteObject & {
  name: string
  hide?: boolean
}

type NonIndexRoute = Omit<NonIndexRouteObject, 'children'> & {
  name: string
  hide?: boolean
  children?: Array<NonIndexRoute | Route>
}

export type Route = IndexRoute | NonIndexRoute
