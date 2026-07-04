const express = require('express')
const app = express()
const blogs = require('./routes/blogs.js')
const about = require('./routes/about.js')
const port = 3000

app.use('/blogs', blogs)
app.use('/about', about)
app.use(express.static('public'))


app.post('/', (req, res)=>{
    res.send("this is post request")
})

app.get('/myindex.html', (req, res)=>{
    res.sendFile('templates/myindex.html', {root : __dirname})
})

app.listen(port, ()=>{
    console.log(`listening to port on ${port}`)
})