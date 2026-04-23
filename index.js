const express = require('express')
const main = require('./Models/Llm')


const app = express()

app.use(express.json())

const History = {}

app.post('/chat', async (req,res)=>{
    const {id,msg} = req.body

    if(!History[id]){
        History[id] = []
    }

    const texts = History[id]

    const prompt = [...texts, {
        role:'user',
        parts: [{text:msg}]
    }]

    const result = await main(prompt)

    texts.push({role:'user', parts: [{text:msg}]})
    texts.push({role:'model', parts: [{text:result}]})

    res.send(result)



})

app.listen('3000', ()=>{
    console.log("backend started");
    
})