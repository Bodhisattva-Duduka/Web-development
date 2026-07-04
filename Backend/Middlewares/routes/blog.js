import express from "express"
const router = express.Router()


router.get('/', middleware ,(req, res)=>{
    res.send('Blogs page')
})

router.get('/1st-blog', (req, res)=>{
    res.send('This is first blog')
})

router.get('/2nd-blog', (req, res)=>{
    res.send('This is second blog')
})

function middleware(req ,res, next){
    res.send("I'm middleware")
    next()
}


export default router