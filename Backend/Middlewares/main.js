import express from 'express'
const app = express()
const port = 3000

import blog from './routes/blog.js'
app.use('/blog', blog)

app.get('/' , firstMiddleware, (req,res)=>{
    res.send('Hello')
})

function firstMiddleware(req, res, next){
    res.send("I'm first middleware")
    next()
}


app.listen(port, ()=>{
    console.log(`listening to port on ${port}`)
})