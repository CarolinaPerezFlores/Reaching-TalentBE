const app = require('./app');
require('./database');
require ('dotenv').config()


async function initServe() {
    await app.listen(process.env.PORT || 3000);
    console.log('server on port 5000');

    
}

initServe()