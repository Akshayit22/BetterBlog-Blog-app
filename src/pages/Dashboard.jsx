import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {logout} from '../Services/operations/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const Dashboard = () => {
	const {user} = useSelector((state) => state.profile);
	const [showDetails,setShowDetails] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const logoutFunc = () =>{
		setShowDetails(false);
		dispatch(logout());
		navigate('/');
	}
	const showInfo = () =>{
		if(user === null){
			toast.error('something went wrong, you need to login again.');
			logoutFunc();
		}
		setShowDetails(true);
		console.log(user);
	}

	return (
		<div>
			
			<h1>Welcome to Dashboard</h1> 
			<button onClick={()=>showInfo()}> Show my Details</button>
			{
				showDetails==true? (
					<div>
						<h1>{user.firstName + " " + user.lastName}</h1>
						<h2>{user.email}</h2>
						<p>{user.additionalDetails.dateOfBirth}</p>
					</div>
				):
				(<div></div>)
			}

			<button onClick={()=>logoutFunc()}> LogOut</button>
		</div>
	)
}

export default Dashboard;