const User = require('../models/User');
const jwt = require("jsonwebtoken");

exports.dashboard = async(req,res) =>{
	try{
		const {id,email} = req.user;
		console.log("In the dashboard controller", req.user.email);

		const user = await User.findOne({email}).populate('additionalDetails').exec();

		return res.status(200).json({
			success: true,
			data:user,
			message: "User registered successfully",
		});


	}
	catch(error){
		console.error(error);
		return res.status(500).json({
			success: false,
			message: "Error in Dashboard, Please try again.",
		});
	}
}
