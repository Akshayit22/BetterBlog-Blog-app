const jwt = require("jsonwebtoken");


exports.AuthMid = async(req,res,next) =>{
	try{
		const token = req.cookies.token || req.body.token 
				|| req.header('Authorization').replace('Bearer ','');

		if(!token){
			return res.status(401).json({
				success:false,
				message:'Token is missing',
			})
		}

		try{
			const decode =  jwt.verify(token, process.env.JWT_SECRET);
			console.log("decode ",decode);
			req.user = decode; // IMP
		}
		catch(error) {
			//verification - issue
			console.log(error);
			return res.status(401).json({
			    success:false,
			    message:'token is invalid',
			});
		}

		console.log("This is Auth middleWare to testing",token);
		next();
	}
	catch(error){
		return res.status(401).json({
			success: false,
			message: "Token is missing, you need to login first,",
		});
	}
}