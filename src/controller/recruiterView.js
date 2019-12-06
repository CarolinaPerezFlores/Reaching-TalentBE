const express = require('express');
const router = express.Router();



router.get('/me',(res)=>{
    res.json("hola");
        console.log("msj");
        
 })

 module.exports= router;