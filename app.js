const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
//connect to database

mongoose.connect(config.database);
//On connection
mongoose.connection.on('connected', ()=> {
    console.log(`Connected to database ${config.database}`);
});
//On Error
mongoose.connection.on('error', (error)=> {
    console.log(`Database error ${error}`);
});

const app = express();

const users = require('./routes/users.js');

const port = 3000;
//middleware
app.use(cors());
app.use(bodyParser.json());

//Password middleware
app.use(passport.initialize());
app.use(passport.session());

app.use('/users', users);
//set static folder
app.use(express.static(path.join(__dirname,'public')));

//index route
app.get('/', (req,res) => {
    res.send('Invalid Endpoint');
});
//setup server
app.listen(port, () =>{
    console.log(`The application is running on port ${port}`);
});