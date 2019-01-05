const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 8000

//Middleware
app.use(express.json())
app.use(morgan('dev'))

//Routes


//Database
mongoose.connect('mongodb://http:localhost:27017',{ useNewUrlParser:true }, () => {
    console.log("The database is connected, Guv'nor!")
})

//Error Handling

// Server listen
app.listen(PORT, () => {
    console.log("I'm running!")
})
