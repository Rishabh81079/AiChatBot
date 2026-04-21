const express = require('express')
const main = require('./Models/Llm')


const app = express()

app.use(express.json())


app.post('/chat', async (req,res)=>{
    const {msg} = req.body
    const result = await main(msg)
    res.send(result)
})

app.listen('3000', ()=>{
    console.log("backend started");
    
})