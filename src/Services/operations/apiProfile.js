import apiConnector from "../apiConnector";
import { ProfileEndpoints } from "../api";
import { toast } from "react-hot-toast";

const {UPDATE_PROFILE_API,GET_PROFILE_DETAILS_API,SAVE_BLOG_IN_PROFILE_API} = ProfileEndpoints;

export function updateProfile(){
	return async(dispatch)=>{
		const toastId = toast.loading("Loading...");

		try{
			console.log("UPDATE_PROFILE_API",UPDATE_PROFILE_API);

		}
		catch(error){
			toast.error(error.response.data.message);
			//toast.error('Something went wrong, please try again')
			console.log(error);
		}

		toast.dismiss(toastId);
	}
}

export function getProfile(){
	return async(dispatch)=>{
		const toastId = toast.loading("Loading...");

		try{
			console.log("GET_PROFILE_DETAILS_API",GET_PROFILE_DETAILS_API);

		}
		catch(error){
			toast.error(error.response.data.message);
			//toast.error('Something went wrong, please try again')
			console.log(error);
		}

		toast.dismiss(toastId);
	}
}

export function saveBlog(){
	return async(dispatch)=>{
		const toastId = toast.loading("Loading...");

		try{
			console.log("SAVE_BLOG_IN_PROFILE_API",SAVE_BLOG_IN_PROFILE_API);

		}
		catch(error){
			toast.error(error.response.data.message);
			//toast.error('Something went wrong, please try again')
			console.log(error);
		}

		toast.dismiss(toastId);
	}
}