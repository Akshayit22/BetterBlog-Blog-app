import React from 'react'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux'
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
	const {token} = useSelector((state)=>state.auth);

	if(token !== null){
		return children
	}
	else{
		toast.error('You need to Login First to access the private routes.')
		return <Navigate to='/user-auth'/>
	}

}

export default PrivateRoute;