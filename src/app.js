const express = require('express');
const app = express();
const recruiterView =require(`./controller/recruiterView`)


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(recruiterView);


module.exports = app;
