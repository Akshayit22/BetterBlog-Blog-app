// import dotenv from "dotenv";
// dotenv.config()
const BASE_URL = process.env.REACT_APP_BASE_URL


// AUTH ENDPOINTS
export const AuthEndpoints = {
	LOGIN_API:BASE_URL+'auth/login',
	SIGNUP_API:BASE_URL+'auth/signup',
	DASHBOARD:BASE_URL+'auth/dashboard',
	OTPGENRATE_API:BASE_URL+'auth/otpGenerator',
	RESETPASSWORD_API:BASE_URL+'auth/resetPassword',
};

// Profile endpoints


// setting endpint

// CONTACT-US API
export const contactusEndpoint = {
	CONTACT_US_API: BASE_URL + "/contact/contactUs",
};