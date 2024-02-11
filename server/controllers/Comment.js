const User = require('../models/User');
const Comment = require('../models/Comment');
const Blog = require('../models/Blog');

exports.createComment = async(req,res) =>{
	try{
		const {blogId,body} = req.body;

		if(!body || !blogId){
			return res.status(403).send({
				success: false,
				message: "All Fields are required",
			});
		}
		
		const commentResp = await Comment.create({
			Blog:blogId,
			user:req.user.id,
			body:body
		})

		const blogUpdate = await Blog.findByIdAndUpdate({_id:commentResp.Blog},{$push:{comments:commentResp._id}},{new:true});

		return res.status(200).json({
			success: true,
			commentResp,
			message: "Comment Created successfully",
		});


	}
	catch(error){
		console.error(error);
		return res.status(500).json({
			success: false,
			message: "Internal server error, while creating comment.",
		});
	}
}