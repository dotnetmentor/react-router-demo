import { Suspense } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { routes } from '../router/routes'
import { AppBar, Avatar, Button, Container, IconButton, Stack, Toolbar, Typography, useTheme } from '@mui/material'

const Root: React.FC = () => {
  const theme = useTheme()

  return (
    <Stack flexGrow={1}>
      <AppBar component='header' position='sticky' elevation={0}>
        <Toolbar>
          <Stack width='100%' direction='row' justifyContent='space-between' alignItems='center'>
            <Typography>DEMO PAGE</Typography>
            <Stack direction='row'>
              {...routes
                .filter((x) => !x.hide && !!x.path)
                .map((route) => (
                  <Button component={Link} to={route.path!}>
                    {route.name}
                  </Button>
                ))}
            </Stack>
            <IconButton size='small'>
              <Avatar />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Container>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </Container>

      <Stack
        sx={{ backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.2)' : '#fefefe' }}
        p={6}
        mt='auto'
        alignItems='center'
      >
        Footer
      </Stack>
    </Stack>
  )
}

export default Root
