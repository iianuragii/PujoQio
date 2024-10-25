import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import { Box, IconButton, Grid, Modal } from '@mui/material';
import Chatbot from './Chatbot.jsx';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';

const Gallery = () => {
  const images = [
    '../../gallery/pic1.jpg', '../../gallery/pic2.jpg', '../../gallery/pic3.jpg', '../../gallery/pic4.jpg', '../../gallery/pic5.jpg',
    '../../gallery/pic6.jpg', '../../gallery/pic7.jpg', '../../gallery/pic8.jpg', '../../gallery/pic9.jpg', '../../gallery/pic10.jpg',
    '../../gallery/pic11.jpg', '../../gallery/pic12.jpg', '../../gallery/pic13.jpg', '../../gallery/pic14.jpg', '../../gallery/pic15.jpg',
    '../../gallery/pic16.jpg', '../../gallery/pic17.jpg', '../../gallery/pic18.jpg', '../../gallery/pic19.jpg', '../../gallery/pic20.jpg',
    '../../gallery/pic21.jpg', '../../gallery/pic22.jpg', '../../gallery/pic23.jpg', '../../gallery/pic24.jpg', '../../gallery/pic25.jpg',
    '../../gallery/pic26.jpg', '../../gallery/pic27.jpg', '../../gallery/pic28.jpg', '../../gallery/pic29.jpg', '../../gallery/pic30.jpg',
    '../../gallery/pic31.jpg'
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const imagesPerPage = 5;

  const handleNext = () => {
    if (startIndex + imagesPerPage < images.length) {
      setStartIndex(startIndex + imagesPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - imagesPerPage >= 0) {
      setStartIndex(startIndex - imagesPerPage);
    }
  };

  const handleImageClick = (src) => {
    setCurrentImage(src);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentImage('');
  };

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
        }}
      >
        <Box sx={{ color: 'white', padding: 2 }}>
          <Navbar />
        </Box>
        <Box sx={{ color: 'white', padding: 2, textAlign: 'center', fontSize: '10vh' }}>
          Gallery
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', paddingX: 4 }}>
          <IconButton onClick={handlePrev} disabled={startIndex === 0}>
            <ArrowBackIosIcon fontSize="large" />
          </IconButton>
          
          <Grid
            container
            sx={{
              flexGrow: 1,
              overflow: 'hidden',
              maxWidth: 'calc(100% - 80px)',
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '12px 6px',
            }}
          >
            {images.slice(startIndex, startIndex + imagesPerPage).map((src, index) => (
              <Grid item key={index} sx={{ width: '100%', height: '100%' }}>
                <Box
                  component="img"
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  onClick={() => handleImageClick(src)}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 1,
                    boxShadow: 2,
                    transition: 'transform 0.3s', // Hover effect
                    '&:hover': {
                      transform: 'scale(1.05)', // Scale effect on hover
                    },
                  }}
                />
              </Grid>
            ))}
          </Grid>
          
          <IconButton onClick={handleNext} disabled={startIndex + imagesPerPage >= images.length}>
            <ArrowForwardIosIcon fontSize="large" />
          </IconButton>
        </Box>

        <Chatbot /> 

        {/* Modal for full image */}
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark background
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                color: 'white',
              }}
            >
              <CloseIcon fontSize="large" />
            </IconButton>
            <Box
              component="img"
              src={currentImage}
              alt="Full-size Gallery Image"
              sx={{
                maxWidth: '90%',
                maxHeight: '90%',
                objectFit: 'contain',
                borderRadius: 1,
                boxShadow: 2,
              }}
            />
          </Box>
        </Modal>
      </Box>         
    </>
  );
}

export default Gallery;
