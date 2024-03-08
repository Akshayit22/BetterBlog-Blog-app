const express = require('express');
const router = express.Router();

const {AuthMid} = require('../middlewares/AuthMid');

const {updateProfile,getUserDetails} = require('../controllers/Profile');
const {saveBlog} = require("../controllers/Profile");


router.put('/updateProfile',AuthMid,updateProfile);
router.post('/getUserDetails',AuthMid,getUserDetails);
router.put('/saveBlog',AuthMid,saveBlog)

module.exports = router;