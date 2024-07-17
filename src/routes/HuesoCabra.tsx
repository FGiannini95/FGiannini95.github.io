import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { ErrorPage } from '../pages/Error/ErrorPage';
import { Contact } from '../pages/Contact/Contact';
import { Shop } from '../pages/Shop/Shop';
import { NavbarHuesoCabra } from '../components/NavbarHuesoCabra/NavbarHuesoCabra';
import { Taller } from '../pages/Taller/Taller';
import { dataTrabajos } from '../data/data';


export const HuesoCabra = () => {
  return (
    <BrowserRouter>
      <NavbarHuesoCabra />
        <Routes>
          <Route path='/' element={<Home data={dataTrabajos} />} />
          <Route path='/taller' element={<Taller />} />
          <Route path='/contacto' element={<Contact />} />
          <Route path='/tienda' element={<Shop />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>
  )
}
