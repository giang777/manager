const db = require("../model/db.js");
const  model  = require("mongoose");

const studentModel = new  db.mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    mark:{
        type:Number,
        required:true,
    }
});

module.exports = model.model('products',studentModel);