import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/Gallery'
import Pandals from './Components/Pandals'
import Spots from './Components/Spots'
import NorthSpots from './Components/NorthSpots'
import SouthSpots from './Components/SouthSpots'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
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