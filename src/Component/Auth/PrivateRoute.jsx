import React from 'react'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
	const {token} = useSelector((state)=>state.auth);
	const navigator = useNavigate();
	// if(token !== null){
	// 	return children;

	// }
	// else{
	// 	toast.error('You need to Login First to access the private routes.')
		
	// }
	return(
		token !== null ? (children) : (
			// (toast.error('You need to Login First to access the private routes.'))
			<div className='flex flex-col justify-center mx-auto items-center gap-5 my-[15%]'>
				<h1 className='center '>You are Not Logged In</h1>
				<h2 className='center'>Please Login or SignUp</h2>
				<button onClick={()=>{navigator('/user-auth')}} className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static w-fit justify-center' >Get Started</button>
			</div>
		)
	)

}

export default PrivateRoute;