const express = require('express');
const router = express.Router();


const {AuthMid} = require('../middlewares/AuthMid');

const {createComment} = require('../controllers/Comment');




router.post('/createComment',AuthMid,createComment);






module.exports = router;