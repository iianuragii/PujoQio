import React from 'react'
import Navbar from './Navbar.jsx'
import { Box } from '@mui/material'

const NorthKolkata = () => {
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
            flexDirection: 'column'
          }}
        >
            <Box sx={{ color: 'white', padding: 2 }}>
                <Navbar/>
            </Box>
            <Box sx={{ color: 'white', padding: 2,textAlign:'center', fontSize:'10vh' }}>
                List of Durga Pujas at North Kolkata
            </Box>
        </Box>        
      </>
    )
}

export default NorthKolkata