import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { routes } from '../router/routes'

const Root: React.FC = () => {
  return (
    <div>
      <div style={{ display: 'flex', gap: '20px' }}>
        {...routes.map((route) => <a href={route.path}>{route.name}</a>)}
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
      <div>Footer</div>
    </div>
  )
}

export default Root
