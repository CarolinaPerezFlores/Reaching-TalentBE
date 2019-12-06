const { Schema, model } = require('mongoose');

const firstSchema= new Schema({
    contact: String,
    result: Number,
    timeInit: Date,
    approved: Boolean,
   
})

const first= model ("msj ", firstSchema);
module.exports= first;