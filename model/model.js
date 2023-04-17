const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:String,
    description:String,
    qty:String,
    price:String,
    rating:String,
    image:String,
    color:String,
    category:String,
    brand:String,
    about:String,
    vendormail:String,
    dimension:String,
    available:String,
    purchased:String
    
})

module.exports = new mongoose.model('Product',productSchema);