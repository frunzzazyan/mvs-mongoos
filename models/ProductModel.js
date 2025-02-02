const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    count : {
        type : Number,
        required : true
    }
})

module.exports = mongoose.model("products", ProductSchema)