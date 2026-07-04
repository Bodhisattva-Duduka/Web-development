const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send('This is About page')
})

router.get('/contact', (req, res)=>{
    console.log(req.params)
    res.send('This is contact page')
})

module.exports = router