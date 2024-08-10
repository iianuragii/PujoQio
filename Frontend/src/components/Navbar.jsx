import { Box, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', p: 2, color: 'white' }}>
      <Box sx={{ flexGrow: 1 }}>
      <TextField
        variant="outlined"
        placeholder="Search about the pujo pandals of কলকাতা..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: 'white' }} />
            </InputAdornment>
          ),
          sx: {
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
              color: 'white',
            },
            '& .MuiInputBase-input': {
              color: 'white',
            },
            height: '30px', // Adjust the height of the input field
            width: '70vh',
            padding: '0 8px'
          },
        }}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: 1,
          width: '70vh',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white',
            },
          },
        }}
      />
      </Box>      
      <Box sx={{ display: 'flex', gap: 6, marginRight: '5%' }}>
        <Link
          to='/'
          style={{textDecoration:'none', color:'white', fontSize:'5vh'}}
        >
          Home
        </Link>
        <Link
          to='/gallery'
          style={{textDecoration:'none', color:'white', fontSize:'5vh'}}
        >
          Gallery
        </Link>
        <Link
          to='/contact'
          style={{textDecoration:'none', color:'white', fontSize:'5vh'}}
        >
          Contact
        </Link>
      </Box>      
    </Box>
  );
}

export default Navbar;