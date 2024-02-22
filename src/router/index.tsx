import { createBrowserRouter } from 'react-router-dom'
import Root from '../layouts/Root'
import { ErrorBoundary } from '../layouts/ErrorBoundry'
import { routes } from './routes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorBoundary />,
    children: [...routes],
  },
])
