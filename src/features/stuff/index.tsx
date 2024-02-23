import { Typography } from '@mui/material'
import { createContext } from 'react'
import { Outlet } from 'react-router-dom'

export const StuffContext = createContext({})

const Stuff = () => {
  return (
    <StuffContext.Provider value={{}}>
      <Typography variant='h1'>Stuff wrapper</Typography>
      <Outlet />
    </StuffContext.Provider>
  )
}

export default Stuff
