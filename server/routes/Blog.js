const express = require('express');
const router = express.Router();


const {AuthMid} = require('../middlewares/AuthMid');

const {createBlog,getAllBlogs} = require("../controllers/Blog");
const {updateBlog,getBlog} = require("../controllers/Blog");



router.post('/createBlog',AuthMid,createBlog);
router.get('/getAllBlogs',getAllBlogs);
router.put('/updateBlog',AuthMid,updateBlog);
router.get('/getBlog/:id',getBlog);




module.exports = router;