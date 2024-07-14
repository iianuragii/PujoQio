const express = require('express');
const cors    = require('cors');

const app     = express();
app.use(cors());
const { runQio } = require('./functionalities/runQio');

let PORT      = 5000;

app.get('/', (req,res) =>{
    res.send("Hello there!!");
})

app.listen(PORT,() =>{
    console.log(`Server running at port ${PORT}`);
})