const mongoose = require('mongoose');
require ('dotenv').config()


mongoose.connect(process.env.DATA_BASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true  
}).then(db => console.log('Database is connected'))
    

