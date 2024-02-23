import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

function App() {
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '3rem',
      },
      h2: {
        fontSize: '2rem',
      },
      h3: {
        fontSize: '1.75rem',
      },
      h4: {
        fontSize: '1.25rem',
      },
      h5: {
        fontSize: '1rem',
      },
      h6: {
        fontSize: '0.85rem',
      },
    },
    palette: {
      mode: 'dark',
      primary: {
        main: '#ff0000',
        light: '#ff6c6c',
        dark: '#c40000',
      },
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
