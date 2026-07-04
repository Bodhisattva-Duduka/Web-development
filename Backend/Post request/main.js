import express, { urlencoded } from 'express'
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(urlencoded({extended : true}))
app.use(express.json())

app.get('/hi' , (req, res)=>{
    res.send('hello world')
})

app.post('/button-clicked', (req, res)=>{
    let content  = req.body.text
    console.log(content)
})

app.get('/notes', (req,res)=>{
    res.redirect('https://www.google.com')
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})