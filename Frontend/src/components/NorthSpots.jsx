import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import { Box, Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import Chatbot from './Chatbot.jsx';

const NorthKolkata = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      title: "Baghbazar Sarbojanin",
      image: '../../Baghbazar.jpg',
      address: "Sovabazar, Baghbazar, Kolkata, West Bengal 700003",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.3161906583355!2d88.36340287512765!3d22.60466487946882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02762db2c7e01f%3A0xa953c72eb79fcf18!2sBaghbazar%20Sarbojonin%20Durgotsav!5e0!3m2!1sen!2sin!4v1723274918545!5m2!1sen!2sin"
    },
    {
      title: "Ahiritola Sarbojanin",
      image: '../../Baghbazar.jpg',
      address: "Another Address, Kolkata, West Bengal 700004",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.3161906583355!2d88.36340287512765!3d22.60466487946882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02762db2c7e01f%3A0xa953c72eb79fcf18!2sBaghbazar%20Sarbojonin%20Durgotsav!5e0!3m2!1sen!2sin!4v1723274918545!5m2!1sen!2sin"
    },
    {
      title: "Jagat Mukherjee Park",
      image: '../../Baghbazar.jpg',
      address: "Another Address, Kolkata, West Bengal 700004",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.3161906583355!2d88.36340287512765!3d22.60466487946882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02762db2c7e01f%3A0xa953c72eb79fcf18!2sBaghbazar%20Sarbojonin%20Durgotsav!5e0!3m2!1sen!2sin!4v1723274918545!5m2!1sen!2sin"
    },
    {
      title: "Kumartuli Sarbojanin",
      image: '../../Baghbazar.jpg',
      address: "Another Address, Kolkata, West Bengal 700004",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.3161906583355!2d88.36340287512765!3d22.60466487946882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02762db2c7e01f%3A0xa953c72eb79fcf18!2sBaghbazar%20Sarbojonin%20Durgotsav!5e0!3m2!1sen!2sin!4v1723274918545!5m2!1sen!2sin"
    },
    {
      title: "Kashi Bose Lane",
      image: '../../Baghbazar.jpg',
      address: "Another Address, Kolkata, West Bengal 700004",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.3161906583355!2d88.36340287512765!3d22.60466487946882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02762db2c7e01f%3A0xa953c72eb79fcf18!2sBaghbazar%20Sarbojonin%20Durgotsav!5e0!3m2!1sen!2sin!4v1723274918545!5m2!1sen!2sin"
    }   
    // Add more cards as needed
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <Box
        sx={{
          height: '100vh',
          backgroundImage: `url('../../wallpaper1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <Box sx={{ color: 'white', padding: 2 }}>
          <Navbar />
        </Box>

        <Box 
          sx={{ 
            color: 'white', 
            textAlign: 'center', 
            fontSize: { xs: '5vh', md: '8vh' },  
            fontWeight: 'bold',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',  
            paddingBottom: 4 
          }}
        >
          List of Durga Pujas at North Kolkata
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2 }}>
          <IconButton onClick={handlePrev}>
            <ArrowBack sx={{ color: 'white' }} />
          </IconButton>

          <Card 
            sx={{ 
              display: 'flex', 
              width: { xs: '90%', md: '30rem' },  
              height: { xs: '15rem', md: '20rem' },  
              boxShadow: 6,  
              borderRadius: 2,  
              overflow: 'hidden', 
              transition: 'all 0.3s ease-in-out' 
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: { xs: 100, md: 150 }, objectFit: 'cover' }}  
              image={cards[currentIndex].image}
              alt={cards[currentIndex].title}
            />
            <CardContent 
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                padding: 3,  
                color: '#333' 
              }}
            >
              <Typography 
                variant="h5" 
                component="div" 
                sx={{ 
                  fontSize: { xs: '1.2rem', md: '1.5rem' }, 
                  fontWeight: 'bold',
                  color: '#444' 
                }}
              >
                {cards[currentIndex].title}
              </Typography>
              <Typography 
                variant="body2" 
                color="text.secondary" 
                sx={{ fontSize: { xs: '0.75rem', md: '0.9rem' }, marginTop: 1 }}
              >
                {cards[currentIndex].address}
              </Typography>
              <Box sx={{ mt: 2, borderRadius: 2, overflow: 'hidden', border: '1px solid #ddd' }}>
                <iframe
                  src={cards[currentIndex].mapSrc}
                  width="100%"
                  height="150"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </CardContent>
          </Card>

          <IconButton onClick={handleNext}>
            <ArrowForward sx={{ color: 'white' }} />
          </IconButton>
        </Box>

        <Box sx={{ padding: 3, backgroundColor: 'rgba(0,0,0,0.7)', borderTop: '1px solid #444' }}>
          <Chatbot />
        </Box>
      </Box>
    </>
  );
};

export default NorthKolkata;
