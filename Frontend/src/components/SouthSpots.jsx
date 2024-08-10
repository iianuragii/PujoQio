import React from 'react'
import Navbar from './Navbar.jsx'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Chatbot from './Chatbot.jsx'

const SouthKolkata = () => {
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
            <Box sx={{ color: 'white', padding: 2, textAlign: 'center', fontSize: '10vh' }}>
              List of Durga Pujas at South Kolkata
            </Box>
            <Box sx={{ padding: 2, pl: '13rem' }}>
              <Card sx={{ display: 'flex', width: '50rem', height: '25rem' }}> {/* Increased height to fit the map */}
                <CardMedia
                  component="img"
                  sx={{ width: 150 }}
                  image='../../Tridhara.jpeg'
                  alt="Tridhara Sammelani"
                />
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography variant="h4" component="div">
                    Tridhara Sammelani Durgotsav
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Address: Shop Number 76B,Near Deshapriya Park, Satyendranath Mazumder Sarani, Dover Terrace, Kolkata, West Bengal 700025
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.5943414187977!2d88.352859775125!3d22.51939827952962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02772daca1f653%3A0xdbf590e266b01219!2sTridhara%20Sammilani!5e0!3m2!1sen!2sin!4v1723275949160!5m2!1sen!2sin"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </Box>
                </CardContent>
              </Card>
            </Box>            
            <Chatbot/>
        </Box>        
    </>
  )
}

export default SouthKolkata
