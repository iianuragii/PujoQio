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
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14733.873223076951!2d88.35116654239845!3d22.598981016764828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277000443224f%3A0x2b823f451106a0d2!2sBaghbazar%20Sarbojanin%20Durga%20puja!5e0!3m2!1sen!2sin!4v1729840680255!5m2!1sen!2sin" 
    },
    {
      title: "Ahiritola Sarbojanin",
      image: '../../Ahiritola.jpg',
      address: "55, BK Paul Ave, Ahiritola, Beniatola, Kolkata, West Bengal 700005",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.577922751587!2d88.35455067512731!3d22.594884279475814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02770078fe700f%3A0xbeb6e2bafe0a76e5!2sAhiritola%20Sarbojanin%20Durga%20Puja!5e0!3m2!1sen!2sin!4v1729840383810!5m2!1sen!2sin" 
    },
    {
      title: "Jagat Mukherjee Park",
      image: '../../JagatMukherjee.jpg',
      address: "1, Jatindra Mohan Ave, Sovabazar, Shobhabazar, Kolkata, West Bengal 700005",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.454678038562!2d88.36346387512747!3d22.59949027947253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02763275b71687%3A0xd927b406f878b566!2sJagat%20Mukherjee%20Park!5e0!3m2!1sen!2sin!4v1729840230000!5m2!1sen!2sin"
    },
    
    {
      title: "Kumartuli Sarbojanin",
      image: '../../Kumartuli.jpg',
      address: "SARBOJANIN DURGOTSAB COMMITTEE, 8B, Abhay Mitra St, Sovabazar, Kumartuli, Shobhabazar, Kolkata, West Bengal 700005",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.468261276113!2d88.35889137512746!3d22.5989826794729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277cd636f29f3%3A0x76a486a0b70b04b7!2sKumartuli%20Park!5e0!3m2!1sen!2sin!4v1729840565778!5m2!1sen!2sin" 
    },
    {
      title: "Kashi Bose Lane",
      image: '../../KashiBose.jpeg',
      address: "Kashi Bose Lane Durga Puja Samity 5/1, Kashi Bose Lane, Manicktala, Darjipara",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.6845693451055!2d88.36634247512723!3d22.5908978794786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027636f4aba21b%3A0xd56a6b40b1520547!2sKashi%20Bose%20Lane%20Durga%20Puja%20Committee!5e0!3m2!1sen!2sin!4v1729840464460!5m2!1sen!2sin" 
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
