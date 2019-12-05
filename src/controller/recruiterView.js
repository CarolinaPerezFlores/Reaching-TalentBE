const express = require('express');
const router = express.Router();

router.get(`/first`,(res)=>{
    res.send(JSON.stringify(first))
    return
});
