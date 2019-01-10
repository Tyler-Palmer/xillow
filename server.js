const express = require('express')
const app = express()
require("dotenv").config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 8000
const expressJwt = require("express-jwt")


//Middleware
app.use(express.json({limit: '200mb'}))
app.use(morgan('dev'))


app.use("/api", expressJwt({secret: process.env.SECRET}))

//Routes
app.use("/auth", require("./routes/auth"))
app.use("/listing", require("./routes/listingsServer"))
app.use("/mortgages", require("./routes/mortgages"))
app.use("/savedhouse", require("./routes/SavedHouse"))
//Database
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true }, () => {
    console.log("The database is connected, Guv'nor!")
})

//Error Handling
app.use((err,req, res,next) => {
    console.error(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({message: err.message})
})

// Server listen
app.listen(PORT, () => {
    console.log("I'm running!")
})
