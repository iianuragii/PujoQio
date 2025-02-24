const express = require('express');
const { gemini } = require('../controllers/GeminiController');

const router = express.Router();

router.post('/chat', gemini);

module.exports = router;
