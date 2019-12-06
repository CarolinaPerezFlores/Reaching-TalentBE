const { Schema, model } = require('mongoose');

const firstSchema= new Schema({
    msj: String
})

const first= model ("msj ", firstSchema);
module.exports= first;
