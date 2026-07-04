const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/heloo', (req, res)=>{
  res.send('helooooo')
})

app.get('/about-us', (req, res)=>{
  res.send('about-us-page')
} )

app.get('/home/:userId', (req, res)=>{
  res.send(`user ID is: ${req.params.userId}`)
  console.log(req.params)
  console.log(req.query)
})

