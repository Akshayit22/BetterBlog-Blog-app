const express = require('express');
const router = express.Router();


const {AuthMid} = require('../middlewares/AuthMid');

const {createBlog,getAllBlogs} = require("../controllers/Blog");




router.post('/createBlog',AuthMid,createBlog);
router.get('/getAllBlogs',AuthMid,getAllBlogs);





module.exports = router;