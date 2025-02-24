const express = require('express');
const cors = require('cors');
const app = express();
const chatRoutes = require('./routes/GeminiRoute');
require('dotenv').config();

let PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api', chatRoutes);

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <style>
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: rgba(255, 237, 201, var(--tw-bg-opacity, 1));
            font-size: 70;
            font-family: Arial, sans-serif;
          }
        </style>
      </head>
      <body>
        <div>This is the server for PujoQio</div>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});