import React from 'react'
import Navbar from './Navbar.jsx'
import { Box } from '@mui/material'

const Pandals = () => {
  return (
    <>  
      <Box
          sx={{
            height: '98vh', // Full viewport height
            backgroundImage: `url('../../wallpaper1.jpg')`, // Path to your image
            backgroundSize: 'cover', // Ensure the full image fits within the box
            backgroundPosition: 'center', // Center the image
            backgroundRepeat: 'no-repeat', // Don't repeat the image
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box sx={{ color: 'white', padding: 2 }}>
            <Navbar/>
          </Box >
          <Box sx={{ color: 'white', padding: 2,textAlign:'center', fontSize:'10vh' }}>
            Pujo Pandals
          </Box>
        </Box>        
      </>
  )
}

export default Pandals