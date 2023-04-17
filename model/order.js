const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema({
    clientid:String,
    name: String,
    description: String,
    qty: String,
    price: String,
    rating: String,
    image: String,
    status:String,
    mail:String,
    address:String,
    city:String,
    province:String,
    areacode:String,

});

const order = new mongoose.model("order", orderSchema);
module.exports = order;