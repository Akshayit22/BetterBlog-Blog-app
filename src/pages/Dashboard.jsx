import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getProfile} from '../Services/operations/apiProfile';

const Dashboard = () => {
	const dispatch = useDispatch();
	const {token} =useSelector((s)=>s.auth);
	const {profileDetails} = useSelector((state)=>state.profile);
	const {UserBlogs} = useSelector((state)=> state.profile);

	useEffect(()=>{
		dispatch(getProfile(token));
		console.log("profileDetails" , profileDetails);
		console.log("UserBlogs" , UserBlogs);

	},[]);
	

	return (
		<div>
			
			<h1>Welcome to Your Profile, </h1> 
			{/* <button onClick={()=>showInfo()}> Show my Details</button> */}
			{
				profileDetails!==null? (
					<div>
						<h1>{profileDetails.firstName + " " + profileDetails.lastName}</h1>
						<h2>{profileDetails.email}</h2>
						<p>{profileDetails.additionalDetails.gender}</p>
						
					</div>
				):
				(<div></div>)
			}

			{
				UserBlogs!==null?
				(
					<div>
						<h1>User Blogs</h1>
						<p>{UserBlogs[0].title}</p>
					</div>
				):
				(<div></div>)
			}

		</div>
	)
}

export default Dashboard;