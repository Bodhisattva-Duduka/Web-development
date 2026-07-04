import fs from 'fs/promises'

let a  = await fs.readFile('bodhi.txt', (e,d)=>{
    console.log(d.toString())
})
console.log(a.toString())

let b = await fs.appendFile('bodhi.txt' , 'helllooo')
console.log(b)

let data = await fs.readFile('bodhi.txt', (e,d)=>{
    console.log(d.toString())
})

console.log(data.toString())

