import { lazy } from 'react'
import { Route } from '../../router/Route'

const LazyStuffPageStart = lazy(() => import('./pages/stuff-page-start'))
const LazyStuffPageSeccond = lazy(() => import('./pages/stuff-page-seccond'))

export const routes: Route[] = [
  {
    id: 'stuff-page-start',
    name: 'Stuff Page Start',
    index: true,
    element: <LazyStuffPageStart />,
  },
  {
    id: 'stuff-page-seccond',
    name: 'Stuff Page Seccond',
    index: true,
    element: <LazyStuffPageSeccond />,
  },
]
