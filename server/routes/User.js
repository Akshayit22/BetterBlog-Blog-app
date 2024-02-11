const express = require('express');
const router = express.Router();

const {demo} = require('../middlewares/Demo'); 
const {AuthMid} = require('../middlewares/AuthMid');
const {login,signup,resetPassword,otpGenerator} = require('../controllers/Auth');

const {dashboard} = require('../controllers/Dashboard');

const {CloudMail} = require('../controllers/Auth');


router.post("/uploader",demo,CloudMail);

router.post("/login",demo,login);
router.post("/signup",demo,signup);

router.put("/otpGenerator",demo,otpGenerator);
router.post("/resetPassword",demo,resetPassword);

router.get('/dashboard',AuthMid,dashboard);



module.exports = router;