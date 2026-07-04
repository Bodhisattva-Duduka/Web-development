const express = require('express')
const router = express.Router()

router.get('/' , (req, res)=>{
    res.send('hey, welcome to blogs')
})

router.get('/:id', (req, res)=>{
    console.log(`this is ID ${req.params.id}`)
    res.send(`this is ID ${req.params.id}`)
})

router.get('/cars-blog' , (req,res)=>{
    res.send('blog about cars')
})

module.exports = router