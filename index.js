require('dotenv').config()

const express = require('express') // common js
// import express from 'express' // modual js
const app = express()
const port = 4000

const gitHubData = {
    "message": "Not Found",
    "documentation_url": "https://docs.github.com/rest/users/users#get-a-user"
}
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

app.get('/github', (req, res) => {
    res.json(gitHubData)
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})

