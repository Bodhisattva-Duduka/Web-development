import fs from 'fs'

fs.writeFile('bodhi.txt', 'helloworld', 'utf8', () => {
    console.log('done successfully')
})

let data = fs.readFile('bodhi.txt', (e,d)=>{
    console.log(e,d.toString())
})

fs.appendFile('bodhi.txt', 'appending content', (e)=>{
    console.log(e)
})

console.log(data)