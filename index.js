const express = require('express')

const app = express()
const  PORT = 3000

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

let parser = express.urlencoded({extended:false})

app.post('/',parser,(req,res)=>{
    if(!req.body) return res.sendStatus(400)
    console.log(req.body)
    res.send(`${req.body.userName} - ${req.body.userAge}`)
})

app.listen(PORT,()=>{
    console.log(`Server has been started on port ${PORT}...`)
})
