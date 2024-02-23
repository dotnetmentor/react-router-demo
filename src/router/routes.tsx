import { lazy } from 'react'
import { routes as stuffRoutes } from '../features/stuff/routes'
import { Route } from './Route'

const LazyStart = lazy(() => import('../features/start'))
const LazyStuff = lazy(() => import('../features/stuff'))
const LazyFoo = lazy(() => import('../features/foo'))

export const routes: Route[] = [
  {
    path: '/',
    name: 'Home',
    element: <LazyStart />,
  },
  {
    name: 'Stuff',
    path: 'stuff',
    element: <LazyStuff />,
    children: [...stuffRoutes],
  },
  {
    name: 'Foo',
    path: 'foo',
    element: <LazyFoo />,
  },
  {
    path: '*',
    element: <div>404</div>,
    name: '404',
    hide: true,
  },
]
