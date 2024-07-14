import React from 'react'
import Navbar from './Navbar.jsx'
import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Spots = () => {
  const navigate = useNavigate();

  const handleNorthCalcuttaClick = () => {
    navigate('/north-calcutta');
  }

  const handleSouthCalcuttaClick = () => {
    navigate('/south-calcutta');
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
            flexDirection: 'column'
          }}
        >
          <Box sx={{ color: 'white', padding: 2 }}>
            <Navbar/>
          </Box >
          <Box sx={{ color: 'white', padding: 2,textAlign:'center', fontSize:'10vh' }}>
            Pujo Spots
          </Box>
          <Box 
            sx={{
              justifyContent: 'center', 
              textAlign: 'center', 
              mt: '7%',
            }} 
          >
            <Button 
              sx={{
                color: 'silver', 
                border: '2px solid silver', 
                mr: 5, 
                textTransform: 'none', 
                padding: '12px 24px', 
                fontSize: '5vh', 
              }}
              onClick={handleNorthCalcuttaClick}
            >
              North Calcutta
            </Button>
            <Button 
              sx={{
                color: 'silver',
                border: '2px solid silver', 
                textTransform: 'none',
                padding: '12px 24px', 
                fontSize: '5vh', 
                ml: 5, 
              }}
              onClick={handleSouthCalcuttaClick}
            >
              South Calcutta
            </Button>
          </Box>
        </Box>
      </>
  )
}

export default Spots