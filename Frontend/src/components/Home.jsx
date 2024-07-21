import React from 'react'
import Navbar from './Navbar.jsx'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import Chatbot from './Chatbot.jsx';

const Home = () => {
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
        <Chatbot/>
      </Box>        
    </>
  )
}

export default Home
