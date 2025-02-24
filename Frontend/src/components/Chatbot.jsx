import React, { useState } from 'react';
import { Box, Button, Grid, Input, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Chatbot = () => {

    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [position, setPosition] = useState({ x: 20, y: 50 });
    const [isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [showBox, setShowBox] = useState(false);
    const [mouseDownTime, setMouseDownTime] = useState(0);
    
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
        if (Date.now() - mouseDownTime < 200) { 
          setShowBox(prevState => !prevState)
        }
      }

      async function sendMessage(event) {
        event.preventDefault();
        setLoading(true);
    
        try {
          const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/chat`, {  
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt: userInput }),  
          });
    
          const data = await response.json();
          const botMessage = data.response;
    
          setChatHistory(prevHistory => [...prevHistory, { type: 'user', message: userInput }, { type: 'bot', message: botMessage }]);
          setUserInput('');
        } catch (error) {
          console.error('Error:', error);
        } finally {
          setLoading(false);
        }
    }
    
  return (
    <>
      <Box
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
      <Box
        component="img"
        src="../../chatbot.gif" 
        alt="Gif Toy"
        sx={{
          position: 'absolute',
          top: position.y,
          left: position.x,
          width: '6rem',
          height: '6rem',
          cursor: 'pointer'
          }}
          onMouseDown={handleMouseDown}
        />
        {showBox && (
        <Box
          id="chat-container"
          sx={{
          position: 'absolute',
          top: position.y + 80, 
          left: position.x,
          width: '250px',
          height: '300px',
          backgroundColor: 'white',
          border: '1px solid black',
          padding: 2,
          borderRadius: '8px',
          boxShadow: '2px 2px 10px rgba(0,0,0,0.2)',
          display: 'flex',
          flexDirection: 'column'
          }}
        >
          {/* Close Button */}
          <IconButton 
            sx={{ 
              position: 'absolute', 
              top: 5, 
              right: 5, 
              color: 'black' 
            }} 
            onClick={() => setShowBox(false)}
          >
            <CloseIcon />
          </IconButton>

          <h6 sx={{ textAlign: 'center', marginBottom: '20px', color: '#053245' }}>
            Tell me How Can I help you today??
          </h6>
          <Grid
            id="chat-history"   
            sx={{ flexGrow: 1, overflowY: 'auto', paddingBottom: '10px' }}     
          >
          {chatHistory.map((entry, index) => (
              <Grid key={index} sx={{
                backgroundColor: entry.type === 'user' ? '#d1ecf1' : '#f8d7da',
                padding: '5px',
                borderRadius: '5px',
                marginBottom: '5px',
                textAlign: entry.type === 'user' ? 'right' : 'left'
              }}>
              {entry.message}
              </Grid>
          ))}
          </Grid>
          <form id="chat-form" onSubmit={sendMessage} style={{ display: 'flex' }}>
          <Input
            type="text"
            id="user-input"
            placeholder="Enter your message"
            value={userInput}
            onChange={e => setUserInput(e.target.value)}
            sx={{
              flexGrow: 1,
              border: '1px solid #ccc',
              borderRadius: '5px',
              padding: '5px'
            }}
          />
        <Button
          type="submit"
          disabled={loading}
          sx={{
            backgroundColor: '#0e88bd',
            color: 'white',
            borderRadius: '5px',
            cursor: 'pointer',
            marginLeft: '5px',
            '&:disabled': {
              backgroundColor: '#ccc',
              cursor: 'not-allowed',
          },
          }}
        >
          {loading ? '...' : 'Send'}
        </Button>
        </form>
        </Box>
        )}
      </Box>        
    </>
  )
}

export default Chatbot;
