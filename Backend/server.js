const express = require('express');
const cors = require('cors');
const app = express();
const chatRoutes = require('./routes/GeminiRoute');
require('dotenv').config();

let PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api', chatRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});