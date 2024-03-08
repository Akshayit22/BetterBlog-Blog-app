import apiConnector from "../apiConnector";
import { BlogEndpoints } from "../api";
import { toast } from "react-hot-toast";

const {CREATE_BLOG_API,UPDATE_BLOG_API,GET_ALL_BLOG_API,GET_BLOG_API,DELETE_BLOG_API} = BlogEndpoints;

import {addBlogs , addBlog} from '../../redux/slices/blogsSlice';


export function createBlog(title,content,referenceLinks,category,token){
	return async(dispatch)=>{
		const toastId = toast.loading("Loading...");

		try{
			console.log("CREATE_BLOG_API",CREATE_BLOG_API);
			const response = await apiConnector("POST", CREATE_BLOG_API, {title,content,referenceLinks,category,token});
			//image in request.files
			if (!response.data.success) {
				throw new Error(response.data.message)
			}
			//dispatch(editingBlog(reponse.data.data._id));
			toast.success(response.data.message);
		}
		catch(error){
			toast.error(error.response.data.message);
			//toast.error('Something went wrong, please try again')
			console.log(error);
		}

		toast.dismiss(toastId);
	}
}

export function updateBlog(blogId, title, content, referenceLinks, category,image,token){
	return async(dispatch)=>{
		const toastId = toast.loading("Loading...");

		try{
			console.log("UPDATE_BLOG_API",UPDATE_BLOG_API);

			const response = await apiConnector("POST",UPDATE_BLOG_API,{blogId, title, content, referenceLinks, category,image,token});

			if (!response.data.success) {
				throw new Error(response.data.message)
			}
			toast.success(response.data.message);

			dispatch(getBlog(blogId));
		}
		catch(error){
			toast.error(error.response.data.message);
			//toast.error('Something went wrong, please try again')
			console.log(error);
		}

		toast.dismiss(toastId);
	}
}

export function deleteBlog(id){
	return async(dispatch)=>{
		const toastId = toast.loading("Loading...");
		try{
			console.log("DELETE_BLOG_API",DELETE_BLOG_API);
			const response = await apiConnector("PUT",DELETE_BLOG_API,{blogId:id});

			if (!response.data.success) {
				throw new Error(response.data.message)
			}
			toast.success(response.data.message);
			dispatch(getAllBlogs());
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
			
			const response = await apiConnector("GET",GET_ALL_BLOG_API);
			
			// console.log("GET_ALL_BLOG_API",GET_ALL_BLOG_API);
			// console.log("GET_ALL_BLOG_API RESPONSE............", response);

			const data = response.data;
			// console.log(response.data);

			if (!response.data.success) {
				throw new Error(response.data.message)
			}
			dispatch(addBlogs(data.data));
			//return data.data;


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

			// console.log("GET_BLOG_API",GET_BLOG_API+id);

			const response = await apiConnector("GET",GET_BLOG_API+id);

			// console.log("getBlog" , response.data.BlogDetails.title);

			if (!response.data.success) {
				throw new Error(response.data.message)
			}

			dispatch(addBlog(response.data.BlogDetails));
			


		}
		catch(error){
			toast.error(error.response.data.message);
			//toast.error('Something went wrong, please try again')
			console.log(error);
		}

		toast.dismiss(toastId);
	}
}