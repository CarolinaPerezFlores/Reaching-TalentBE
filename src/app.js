const express = require('express');
const app = express();
const recruiterView =require(`./controller/recruiterView`)
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(recruiterView);


module.exports = app;
