import React, { useState } from 'react';
import { Box, Button, Grid, Input } from '@mui/material';

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
          const response = await fetch("http://localhost:5000/chat", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userInput }),
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
        src="../../funnygifsbox.gif" 
        alt="Gif Toy"
        sx={{
          position: 'absolute',
          top: position.y,
          left: position.x,
          width: '8rem',
          height: '8rem',
          }}
          onMouseDown={handleMouseDown}
        />
        {showBox && (
        <Box
          id="chat-container"
          sx={{
          position: 'absolute',
          top: position.y + 120, 
          left: position.x,
          width: '10rem',
          height: '10rem',
          backgroundColor: 'white',
          border: '1px solid black',
          padding: 2,
          alignItems: 'center',
          justifyContent: 'center'
          }}
        >
          <h6 sx={{ textAlign: 'center', marginBottom: '20px', color: '#053245' }}>
            Tell me How Can I help you today??
          </h6>
          <Grid
            id="chat-history"        
          >
          {chatHistory.map((entry, index) => (
              <Grid key={index}  className={`${entry.type}-message`}>
              {entry.message}
              </Grid>
          ))}
          </Grid>
          <form id="chat-form" onSubmit={sendMessage} sx={{ display: 'flex' }}>
          <Input
            type="text"
            id="user-input"
            placeholder="Enter your message"
            value={userInput}
            onChange={e => setUserInput(e.target.value)}
            sx={{
            flexGrow: '1',
            border: '1px solid #ccc',
            borderRadius: '5px',
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
          '&:disabled': {
              backgroundColor: '#ccc',
              cursor: 'not-allowed',
          },
          }}
        >
          {loading ? 'Sending...' : 'Send'}
        </Button>
        </form>
        </Box>
        )}
      </Box>        
    </>
  )
}

export default Chatbot