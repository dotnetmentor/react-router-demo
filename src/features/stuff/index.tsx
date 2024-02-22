import { createContext } from 'react'
import { Outlet } from 'react-router-dom'

export const StuffContext = createContext({})

const Stuff = () => {
  return (
    <div>
      <StuffContext.Provider value={{}}>
        <h1>Stuff</h1>
        <Outlet />
      </StuffContext.Provider>
    </div>
  )
}

export default Stuff
