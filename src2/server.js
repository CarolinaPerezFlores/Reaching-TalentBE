const express= require('express');
const app = express();
const mongoose = require('mongoose');
const url= "mongodb+srv://karen242615:RK*@_LQ6rQXyN@h@reaching-talent-bxnk1.mongodb.net/reachin-talent?retryWrites=true&w=majority"
require('dotenv').config();
// const recruiterView= require("../src/controller/recruiterView")


app.use(express.json());
app.use(express.urlencoded({extended: false}));
// app.use(recruiterView)
require('../src2/')(app);
// require('./routes/products.routes')(app);




async function init() {
    await app.listen(process.env.PORT || 3000);
    console.log('server on port 3000');

    app.get('/', (req, res) => {
        res.json({"message": "Hey!"});
    });

    
}

init()

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});