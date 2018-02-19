const express = require('express');
const router = express.Router();

//Register Route
router.get('/register',(req,res,next)=>{
    res.send('Register Page');
});
//Authentication Route
router.post('/authenticate',(req,res,next)=>{
    res.send('Authentication Page');
});
//Profile Route
router.get('/profile',(req,res,next)=>{
    res.send('Profile Page');
});
//Validate Route
router.get('/validate',(req,res,next)=>{
    res.send('Validate Page');
});

module.exports = router;