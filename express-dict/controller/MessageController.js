const express = require('express');
const router = express.Router();

router.get('/hello' , async(req,res) =>{
    res.status(200).send('Hello , App is up and running'); 
})

module.exports = router;