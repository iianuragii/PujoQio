const express = require('express');
const cors    = require('cors');
const app     = express();
app.use(cors());
const { runQio } = require('./functionalities/runQio');

let PORT      = 5000;

app.post('/chat', async (req, res) => {
    try {
      const userInput = req.body?.userInput;
      console.log('User: ', userInput);
      if (!userInput) {
        return res.status(400).json({ error: 'Invalid request body' });
      }
      const response = await runQio(userInput);
      res.json({ response });
    } catch (error) {
      console.error('Error in chat endpoint:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.listen(PORT,() =>{
    console.log(`Server running at port ${PORT}`);
})