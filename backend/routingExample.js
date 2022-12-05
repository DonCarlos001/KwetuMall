// const express= require('express')
import express from 'express'
const app= express()
const port= 3000

app.get('/helloworld', (req, res) =>{
    res.send('Hello World')
})


app.get('/getmethod',(req, res)=>{
    let name="Carlos";
    res.send(`Hello ${name}`)
})


app.post('/postrequest',(req, res)=>{
    res.send(`Got a POST request`)
})

app.put('/user', (req, res)=>{
    res.send(`Got a PUT requst at /user`)
})

app.delete('/user', (req, res)=>{
    res.send(`Got a DELETE request at /user`)
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})