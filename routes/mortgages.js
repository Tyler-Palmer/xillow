const express = requre('express')
const mortgageRouter = express.Router()

mortgageRouter.get("/", (req, res, next) => {
    console.log(res.data)
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(200).send(data)
})

module.exports = mortgageRouter