import apiConnector from "../apiConnector";
import { CommentEndpoints } from "../api";
import { toast } from "react-hot-toast";

const {CREATE_COMMENT_API,UPDATE_COMMENT_API,DELETE_COMMENT_API} = CommentEndpoints;

export function createComment(){
	return async(dispatch)=>{
		const toastId = toast.loading("Loading...");

		try{
			console.log("CREATE_COMMENT_API",CREATE_COMMENT_API);

		}
		catch(error){
			toast.error(error.response.data.message);
			//toast.error('Something went wrong, please try again')
			console.log(error);
		}

		toast.dismiss(toastId);
	}
}

export function updateComment(){
	return async(dispatch)=>{
		const toastId = toast.loading("Loading...");

		try{
			console.log("UPDATE_COMMENT_API",UPDATE_COMMENT_API);

		}
		catch(error){
			toast.error(error.response.data.message);
			//toast.error('Something went wrong, please try again')
			console.log(error);
		}

		toast.dismiss(toastId);
	}
}

export function deleteComment(){
	return async(dispatch)=>{
		const toastId = toast.loading("Loading...");

		try{
			console.log("DELETE_COMMENT_API",DELETE_COMMENT_API);

		}
		catch(error){
			toast.error(error.response.data.message);
			//toast.error('Something went wrong, please try again')
			console.log(error);
		}

		toast.dismiss(toastId);
	}
}