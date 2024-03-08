import apiConnector from "../apiConnector";
import { ProfileEndpoints } from "../api";
import { toast } from "react-hot-toast";

const { UPDATE_PROFILE_API, GET_PROFILE_DETAILS_API, SAVE_BLOG_IN_PROFILE_API } = ProfileEndpoints;

import {setProfileDetails,setUserBlogs} from '../../redux/slices/profileSlice';

export function updateProfile(gender, about, contact,token) {
	return async (dispatch) => {
		const toastId = toast.loading("Loading...");

		try {
			console.log("UPDATE_PROFILE_API", UPDATE_PROFILE_API);

			const response = await apiConnector("POST",UPDATE_PROFILE_API,{gender, about, contact,token});

			

			if (!response.data.success) {
				throw new Error(response.data.message)
			}

			toast.success(response.data.message);

			getProfile(token);

		}
		catch (error) {
			toast.error(error.response.data.message);
			//toast.error('Something went wrong, please try again')
			console.log(error);
		}

		toast.dismiss(toastId);
	}
}

export function getProfile(token) {
	return async (dispatch) => {
		const toastId = toast.loading("Loading...");

		try {
			console.log("GET_PROFILE_DETAILS_API", GET_PROFILE_DETAILS_API );

			const response = await apiConnector("POST",GET_PROFILE_DETAILS_API,{token});
			//console.log("GET_PROFILE_DETAILS_API",response);
			
			//dispatch(getDashboardDetails(token));

			if (!response.data.success) {
				throw new Error(response.data.message)
			}

			toast.success(response.data.message);

			dispatch(setProfileDetails(response.data.UserDetails));
			dispatch(setUserBlogs(response.data.UserBlogs));

		}
		catch (error) {
			console.log(error);
			toast.error(error?.response?.data?.message);
			//toast.error('Something went wrong, please try again')
		}

		toast.dismiss(toastId);
	}
}

export function saveBlog(blogId,mode,token) {
	return async (dispatch) => {
		const toastId = toast.loading("Loading...");

		try {
			console.log("SAVE_BLOG_IN_PROFILE_API", SAVE_BLOG_IN_PROFILE_API);
			const response = await apiConnector("PUT",SAVE_BLOG_IN_PROFILE_API,{blogId,mode,token});

			if (!response.data.success) {
				throw new Error(response.data.message)
			}
			toast.success(response.data.message);

		}
		catch (error) {
			toast.error(error.response.data.message);
			//toast.error('Something went wrong, please try again')
			console.log(error);
		}

		toast.dismiss(toastId);
	}
}