import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { ErrorPage } from '../pages/Error/ErrorPage'
import { Contact } from '../pages/Contact/Contact'
import { Projects } from '../pages/Projects/Projects'
import { Shop } from '../pages/Shop/Shop'
import { NavbarHuesoCabra } from '../components/NavbarHuesoCabra/NavbarHuesoCabra'

export const HuesoCabra = () => {
  return (
    <BrowserRouter>
      <NavbarHuesoCabra/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/taller' element={<Projects/>}/>
        <Route path='/contacto' element={<Contact/>}/>
        <Route path='/tienda' element={<Shop/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}
