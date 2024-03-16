// importing necessary libraries
const express = require('express')
const bp = require('body-parser')

// configuring the app & port
const app = express()
const port = process.env.PORT || 3000

// use body-parser middleware to handle HTTP parsing
app.use(bp.json())

//setting the routing
app.get('/', (req, res)=>{
    res.send('Hello, world!')
})

// launching the server
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})