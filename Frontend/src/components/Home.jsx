import React, { useState } from 'react'
import Navbar from './Navbar.jsx'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'

const Home = () => {
  const [position, setPosition] = useState({ x: 20, y: 50 })
  const [isDragging, setIsDragging] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [showBox, setShowBox] = useState(false)
  const [mouseDownTime, setMouseDownTime] = useState(0)

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    })
    setMouseDownTime(Date.now())
  }

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    if (Date.now() - mouseDownTime < 200) { // Consider it a click if the mouse was held down for less than 200ms
      setShowBox(prevState => !prevState)
    }
  }

  return (
    <>
      <Box
        sx={{
          height: '98vh',
          backgroundImage: `url('../../wallpaper1.jpg')`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat', 
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <Box sx={{ color: 'white', padding: 2, pb: 6 }}>
          <Navbar/>
        </Box >
        <Box sx={{ color: 'white', padding: 2, textAlign: 'center', fontSize: '10vh' }}>
          Welcome to PujoQio কলকাতা!
        </Box>
        <Box sx={{ display: 'flex', gap: '20%', paddingTop: '5%', paddingLeft: 9, paddingRight: 7, justifyContent: 'center' }}>
          <Link to='/pandals' style={{ textDecoration: 'none', color: 'white', border: '2px solid white', padding: '5%', fontSize: '1.5rem', width: '100%', textAlign: 'center', marginTop: 2 }}>
            Find the famous Durga Pujo pandals near you.
          </Link>
          <Link to='/spots' style={{ textDecoration: 'none', color: 'white', border: '2px solid white', padding: '5%', fontSize: '1.5rem', width: '100%', textAlign: 'center', marginTop: 2 }}>
            Some famous Durga Puja spots of Kolkata.
          </Link>
        </Box>
        <Box
          component="img"
          src="../../funnygifsbox.gif" // Replace with the path to your GIF
          alt="Gif Toy"
          sx={{
            position: 'absolute',
            top: position.y,
            left: position.x,
            width: '8rem',
            height: '8rem',
          }}
          onMouseDown={handleMouseDown}
        />
        {showBox && (
          <Box
            sx={{
              position: 'absolute',
              top: position.y + 120, // Adjust as needed to place above or below the GIF
              left: position.x,
              width: '10rem',
              height: '10rem',
              backgroundColor: 'white',
              border: '1px solid black',
              padding: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            Hey there!! It's Qio Qio this side 😊
          </Box>
        )}
      </Box>        
    </>
  )
}

export default Home
