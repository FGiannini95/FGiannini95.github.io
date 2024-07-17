import Spinner from 'react-bootstrap/Spinner';
import { Typography } from '@mui/material';

export const Taller = () => {
  return (
    <section className='d-flex flex-column align-items-center p-5'>
      <Spinner />
      <Typography variant='h6'>Trabajando...</Typography>
    </section>
  )
}
