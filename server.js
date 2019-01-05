const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 8000
require("dotenv").config()

//Middleware
app.use(express.json())
app.use(morgan('dev'))

//Routes


//Database
mongoose.connect('mongodb://http:localhost:27017',{ useNewUrlParser:true }, () => {
    console.log("The database is connected, Guv'nor!")
})

//Error Handling
app.use((res,req,next,err) => {
    return res.status(500).send(err)
})

// Server listen
app.listen(PORT, () => {
    console.log("I'm running!")
})
