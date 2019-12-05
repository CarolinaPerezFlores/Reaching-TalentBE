const { Schema, model } = require('mongoose');

const firstSchema= new Schema({
    msj: String
})

const first= model ("msj ", firstScheam);
module.exports= first;
