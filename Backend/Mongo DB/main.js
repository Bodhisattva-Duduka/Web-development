const mongoose = require('mongoose')
const User = require('./User.js')
const Products = require('./Products.js')

mongoose.connect('mongodb://localhost:27017/')

async function userRun() {
    try {
        const user = await User.create({
            name: 'bodhisattva',
            age: 18,
            email: 'bodhisattva.duduka@gmail.com',
            hobbies: ['drawing', 'playing', 'gaming'],
            address: {
                city: 'warangal',
                street: 'RNR colony'
            }
        })
        console.log(user)
    } catch (error) {
        console.log(error)
    }
}

async function productsRun() {
    try {
        const dress3 = await Products.create({
            name: "sweat shirt",
            description: "A black sweat shirt",
            price: 1000,
            inStock: true,
            categories: ['sweat shirts', 'fashion', 'streetwear'],
            images: ['url1', 'url2', 'url3']
        })
        console.log(dress3)
    } catch (error) {
        console.log(error)
    }
}

async function queries() {
    try {
        const data = await Products.findOne({ 'name' : 'sweat shirt'})
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

queries()

// productsRun()
// userRun()