const mongoose = require('mongoose');

const uri = "mongodb+srv://karen242615:RK*@_LQ6rQXyN@h@reaching-talent-bxnk1.mongodb.net/reachin-talent?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true  
}).then(db => console.log('Database is connected'))
    

