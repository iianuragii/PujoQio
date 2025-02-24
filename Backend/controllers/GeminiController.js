const { GoogleGenerativeAI } = require("@google/generative-ai");

const gemini = async (req, res) => {
    const apiKey = process.env.GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);
  
    try {
      const { prompt } = req.body;
      if (!prompt) return res.status(400).json({ error: "Prompt is required" });
  
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
  
      const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
      };
  
      const chatSession = model.startChat({ generationConfig, history: [] });
  
      const result = await chatSession.sendMessage(prompt);
  
      return res.json({ response: result.response.text() });
    } catch (error) {
      console.error("Error generating response:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };

module.exports = {gemini};