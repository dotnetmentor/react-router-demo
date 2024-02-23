import { Card, CardContent, CardHeader, Stack, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

const StuffPageSeccond = () => {
  const { id } = useParams()
  return (
    <Stack gap={4}>
      <Typography variant='h3'>Stuff Page Seccond</Typography>
      <Card>
        <CardHeader title={`Welcome to ${id}`} />
        <CardContent>
          <Typography variant='body1'>This is the second page of the stuff section</Typography>
        </CardContent>
      </Card>
    </Stack>
  )
}

export default StuffPageSeccond
