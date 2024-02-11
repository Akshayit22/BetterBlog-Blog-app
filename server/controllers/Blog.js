// import { uploadImageToCloudinary } from "../config/imageUploader";
// import {RandomBlogImage} from "../config/cloudinary";
// import Blog from "../models/Blog";
// import User from "../models/User";

const { uploadImageToCloudinary } = require('../config/imageUploader');
const { RandomBlogImage } = require('../config/cloudinary');
const Blog = require('../models/Blog');
const User = require('../models/User')

exports.createBlog = async (req, res) => {
	try {
		const { content, referenceLinks, category } = req.body;

		const { email, id } = req.user;
		const userDetails = await User.findOne({ email });

		var url = "";

		if (!content || !category || content[0].title === '' || content[0].body === '') {
			return res.status(403).send({
				success: false,
				message: "All Fields are required",
			});
		}

		if (req.files) {
			//Image Uploader
			const Image = req.files.Image;
			const ImageUpload = await uploadImageToCloudinary(
				Image,
				process.env.FOLDER_NAME,
			)
			url = ImageUpload.secure_url;
		} else {
			url = RandomBlogImage[Math.floor(Math.random() * 4)];
		}


		const NewBlog = await Blog.create({
			content: content, image: url,
			referenceLinks: referenceLinks,
			category: category, user: userDetails,
		});
		console.log("Blog Created :", NewBlog);


		return res.status(200).json({
			success: true,
			message: "Blog Created Successfull.",
		});


	}
	catch (error) {
		console.error(error);
		return res.status(500).json({
			success: false,
			message: "Internal server error while creating blog.",
		});
	}
}
/*
{
    "content":[{"title":"First Blog","body":"This is First Blog"}],
    "referenceLinks":["http://github.com"],
    "category":["one"]
}

*/

exports.getAllBlogs = async (req, res) => {
	try {
		const AllBlogs = await Blog.find({})
			.populate("user").populate("comments").exec();

		return res.status(200).json({
			success: true,
			data:AllBlogs,
			message: "All blogs fetched successfully",
		});
	}
	catch (error) {
		console.error(error);
		return res.status(500).json({
			success: false,
			message: "Internal server error, while fetching all blogs",
		});
	}
}


