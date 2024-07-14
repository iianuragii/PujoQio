const express = require('express');

const app = express();
let PORT = 5000;

app.get('/', (req,res) =>{
    res.send("Hello there!!");
})

app.listen(PORT,() =>{
    console.log(`Server running at port ${PORT}`);
})