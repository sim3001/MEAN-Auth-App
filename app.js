const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();

const users = require('./routes/users.js')

const port = 3000;
//middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/users', users);

//index route
app.get('/', (req,res) => {
    res.send('Invalid Endpoint');
})
//setup server
app.listen(port, () =>{
    console.log(`The application is running on port ${port}`);
})