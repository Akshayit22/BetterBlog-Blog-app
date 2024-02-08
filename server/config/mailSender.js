const nodemailer = require('nodemailer');
require('dotenv').config();

const mailSender = async(email, title, body) => {
	try{
		let transporter = nodemailer.createTransport({
			host:process.env.MAIL_HOST,
			post:587,
			auth:{
				user:process.env.MAIL_USER,
				pass:process.env.MAIL_PASS,
			}
		})

		let info = await transporter.sendMail({
			from:`"for Connection check from" ${process.env.MAIL_USER}`,
			to:`${email}`,
			subject:`${title}`,
			html:`${body}`,
		})

		console.log(info);
           	return info;

	}
	catch(error){
		console.log(error.message);
        	return error;
	}
}
module.exports = mailSender;


/*
How to Use : 

const mailSender = require("../utils/mailSender");
const emailResponse = await mailSender(
				email,
				"Subject",
				"body",
			);
console.log("Email sent successfully:", emailResponse.response);


*/