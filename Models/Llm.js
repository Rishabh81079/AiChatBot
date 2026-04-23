const  {GoogleGenAI} = require('@google/genai');

require('dotenv').config()



const GEMINI_API_KEY = process.env.GEMINI_API_KEY;


const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});

async function main(msg) {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: msg,
  });

  return response.text;
  
}

module.exports = main