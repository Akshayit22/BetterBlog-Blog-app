import apiConnector from "../apiConnector";
import { contactusEndpoint } from "../api";
import { toast } from "react-hot-toast";

const {CONTACT_US_API} = contactusEndpoint;

export function contactUs(name,email,body){
	return async(dispatch)=>{
		const toastId = toast.loading("Loading...");

		try{
			console.log("CONTACT_US_API",CONTACT_US_API);
			const response = await apiConnector("POST",CONTACT_US_API,{name,email,body});

			console.log("ContactUs API RESPONSE............", response);

			if (response.data.success === false) {
				throw new Error(response.message);
			}

			toast.success('Information Store Successfully, Thank You!!!');
		}
		catch(error){
			toast.error(error.response.data.message);
			//toast.error('Something went wrong, please try again')
			console.log(error);
		}

		toast.dismiss(toastId);
	}
}