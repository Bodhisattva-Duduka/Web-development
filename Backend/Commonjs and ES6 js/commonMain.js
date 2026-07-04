// Common js

const data = require('./commonjs.js') // 1st method

console.log(data)
console.log(data.a)
console.log(data.name)
console.log(data.college)

// 2nd method => object destructing

const {a , name , college} = require('./commonjs.js')

console.log(a)
console.log(name)
console.log(college)