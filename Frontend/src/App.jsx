import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/Gallery'
import Pandals from './components/Pandals'
import Spots from './components/Spots'
import NorthSpots from './components/NorthSpots'
import SouthSpots from './components/SouthSpots'
import SignUp from './components/SignUp'
import Login from './components/Login'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/gallery' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/pandals' element={<Pandals/>} />
      <Route path='/spots' element={<Spots/>} />
      <Route path='/north-calcutta' element={<NorthSpots/>} />
      <Route path='/south-calcutta' element={<SouthSpots/>} />
    </Routes>
  )
}

export default App