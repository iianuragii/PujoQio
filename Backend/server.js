const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const { connectDB, getDB } = require('./functionalities/connectDb'); 


let PORT = 5000;

app.post('/signup', async (req, res) => {
  const { email, password, confirmPassword } = req.body;
  console.log("Detalis received for Sign up: ");
  console.log('email: ', email);
  console.log('password: ', password);
  console.log('confirm password: ', confirmPassword);

  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  try {
    const db = await getDB();
    const collection = db.collection('QioCollection');

    const existingUser = await collection.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'Email already registered' });
    }

    // Save the new user in the database
    await collection.insertOne({ email, password });
    res.status(201).json({ success: true });
  } catch (error) {
    console.error('Error in signup endpoint:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log("Detalis received for Login: ")
  console.log('email: ', email);
  console.log('password: ', password);

  try {
    const db = await getDB();
    const collection = db.collection('QioCollection');

    const user = await collection.findOne({ email });
    console.log(user);

    if (user && user.email === email && user.password === password) {
      console.log("True");
      res.status(200).json({ success: true });
    } else {
      console.log("False");
      res.status(401).json({ error: 'Invalid email or password' });  // Unauthorized
    }
  } catch (error) {
    console.error('Error in login endpoint:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, async () => {
  try {
    await connectDB();  // Connect to the DB when the server starts
    console.log(`Server is running at Port ${PORT}`);
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    process.exit(1);
  }
});