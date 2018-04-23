const express = require("express");
const router = express.Router();
const routeCtrl = require("../controllers/mainRoutesController");

//Register Route
router.post("/register", (req,res,next) => {
    routeCtrl.registerController
});
//Authentication Route
router.post("/authenticate", (req,res,next) => {
    routeCtrl.authenticationController
});
//Profile Route
router.get("/profile", (req,res,next) => {
    routeCtrl.profileController
});
//Forgot password route
router.post("/forgot", (req,res,next) => {
    routeCtrl.forgotController
});
//Reset password Route
router.post("/reset/:token", (req,res,next) => { 
    routeCtrl.resetController
});

module.exports = router;
