require('dotenv').config()

const express = require('express') // modual js
// import express from 'express' // common js
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Sunny.com')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please Login At Chai And Code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('sunny with code')
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})