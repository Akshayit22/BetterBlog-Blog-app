import apiConnector from "../apiConnector";
import { BlogEndpoints } from "../api";
import { toast } from "react-hot-toast";

const {CREATE_BLOG_API,UPDATE_BLOG_API,GET_ALL_BLOG_API,GET_BLOG_API} = BlogEndpoints;

export function createBlog(){
	return async(dispatch)=>{
		const toastId = toast.loading("Loading...");

		try{
			console.log("CREATE_BLOG_API",CREATE_BLOG_API);

		}
		catch(error){
			toast.error(error.response.data.message);
			//toast.error('Something went wrong, please try again')
			console.log(error);
		}

		toast.dismiss(toastId);
	}
}

export function updateBlog(){
	return async(dispatch)=>{
		const toastId = toast.loading("Loading...");

		try{
			console.log("UPDATE_BLOG_API",UPDATE_BLOG_API);


		}
		catch(error){
			toast.error(error.response.data.message);
			//toast.error('Something went wrong, please try again')
			console.log(error);
		}

		toast.dismiss(toastId);
	}
}

export function getAllBlogs(){
	return async(dispatch)=>{
		const toastId = toast.loading("Loading...");

		try{
			console.log("GET_ALL_BLOG_API",GET_ALL_BLOG_API);


		}
		catch(error){
			toast.error(error.response.data.message);
			//toast.error('Something went wrong, please try again')
			console.log(error);
		}

		toast.dismiss(toastId);
	}
}

export function getBlog(id){
	return async(dispatch)=>{
		const toastId = toast.loading("Loading...");

		try{
			console.log("GET_BLOG_API",GET_BLOG_API);


		}
		catch(error){
			toast.error(error.response.data.message);
			//toast.error('Something went wrong, please try again')
			console.log(error);
		}

		toast.dismiss(toastId);
	}
}