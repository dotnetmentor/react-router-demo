import { lazy } from 'react'
import { routes as stuffRoutes } from '../features/stuff/routes'
import { Route } from './Route'

const LazyStart = lazy(() => import('../features/start'))
const LazyStuff = lazy(() => import('../features/stuff'))

export const routes: Route[] = [
  {
    path: '/',
    name: 'Start',
    element: <LazyStart />,
  },
  {
    name: 'Stuff',
    path: 'stuff',
    element: <LazyStuff />,
    children: [...stuffRoutes],
  },
]
