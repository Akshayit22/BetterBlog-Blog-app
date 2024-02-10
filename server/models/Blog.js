const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
	content:[{
		title:String,
		body:String,
	}],
	image:{
		type:String,
		require:true,
	},
	referenceLinks:[{
		type:String,
	}],
	createdAt:{
		type:Date,
		default:Date.now(),
	},
	user:{
		type:mongoose.Schema.Types.ObjectId,
		ref:"User",
		require:true,
	},
	comment:{
		type:mongoose.Schema.Types.ObjectId,
		ref:"Comment"
	},
	category:[{
		type:String,
		require:true
	}]

});

module.exports = mongoose.model("Blog",blogSchema);
