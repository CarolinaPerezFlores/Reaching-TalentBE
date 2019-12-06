const { Schema, model } = require('mongoose');

const firstSchema= new Schema({
    question: String,
    answerOne: String,
    answerOne: String,
    succes: Number,
    timeFinish: Date
})

const first= model ("msj ", firstSchema);
module.exports= first;
