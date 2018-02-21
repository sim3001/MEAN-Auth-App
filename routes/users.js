const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

//Register Route
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({
                success: false,
                msg: 'Fail to register user'
            });
        } else {
            res.json({
                success: true,
                msg: 'User registered!'
            });
        }
    });
});
//Authentication Route
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUsername(username, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({
                success: false,
                msg: 'User not found.'
            });
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                // using JSON.parse(JSON.stringify(doc)) as Passport have changed methods and now just passing user won't work
                const token = jwt.sign(JSON.parse(JSON.stringify(user)), config.secret, {
                    expiresIn: 604800 //1 week
                });
                res.json({
                    success: true,
                    token: `JWT ${token}`,
                    user: {
                        id: user._id,
                        name: user.name,
                        email: user.email
                    }
                });
            }else {
                return res.json({success:false, msg: 'Wrong Password!'});
            }
        });
    });
});
//Profile Route
router.get('/profile', (req, res, next) => {
    res.send('Profile Page');
});


module.exports = router;