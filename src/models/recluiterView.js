const { Schema, model } = require('mongoose');

const firstScheme= new Schema({
    msj: String
})

const first= model ("msj ", firstScheme);
module.exports= first;
