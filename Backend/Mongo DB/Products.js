const mongoose = require('mongoose')

const productsSchema = mongoose.Schema({
    name : String,
    description :{
        type : String,
        required : true
    },
    price : Number,
    inStock : Boolean,
    categories : [String],
    images : []
})

module.exports = mongoose.model('Products' , productsSchema)