const mongoose = require('mongoose');

const CandidateSchema = mongoose.Schema({
    question: String,
    answerOne: String,
    answerOne: String,
    succes: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);