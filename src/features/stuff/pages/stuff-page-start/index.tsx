import { Button, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const StuffPageStart = () => {
  return (
    <Stack alignItems='start' gap={4}>
      <Typography variant='h3'>StuffPageStart</Typography>
      <Button component={Link} to='Johan' variant='contained' color='primary'>
        Go to sub page
      </Button>
    </Stack>
  )
}

export default StuffPageStart
