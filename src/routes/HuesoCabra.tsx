import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { ErrorPage } from '../pages/Error/ErrorPage'
import { Contact } from '../pages/Contact/Contact'
import { About } from '../pages/About/About'
import { Projects } from '../pages/Projects/Projects'
import { Profile } from '../pages/Profile/Profile'
import { Shop } from '../pages/Shop/Shop'

export const HuesoCabra = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}
