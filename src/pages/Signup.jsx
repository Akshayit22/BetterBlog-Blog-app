import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from "react-hot-toast";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {signup} from '../Services/operations/apiAuth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Signup = () => {

	const { register, handleSubmit, reset,
		formState: { errors, isSubmitSuccessful } } = useForm();
	
	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({
				password:"",
			})
		}
	}, [isSubmitSuccessful, reset]);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmitLogin = (data)=>{
		console.log(data);
		dispatch(signup(data.firstName, data.lastName, data.email, data.password, navigate))
	}



	return (
		<div className='items-center justify-center mx-auto mt-10 w-[300px]'>
			<h1>Sign Up Page</h1>

			<form className='flex flex-col' onSubmit={handleSubmit(handleSubmitLogin)}>
				{/* first and last Name */}
				<div className='flex flex-row gap-5'>
					<div className='mt-10 flex flex-col w-[140px]'>
						<label htmlFor='firstName'>first Name</label>
						<input type='firstName' id='firstName' name='firstName'
							className='bg-richblack-400'
							{...register('firstName',{required:true})}>

							{
								errors.firstName && <p>Name is required</p>
							}
						</input>
					</div>
					<div className='mt-10 flex flex-col w-[140px]'>
						<label htmlFor='lastName'>last Name</label>
						<input type='lastName' id='lastName' name='lastName'
							className='bg-richblack-400'
							{...register('lastName',{required:true})}>

							{
								errors.lastName && <p>lastName is required</p>
							}
						</input>
					</div>
				</div>
				{/* Email */}
				<div className='mt-10 flex flex-col'>
					<label htmlFor='email'>Email</label>
					<input type='email' id='email' name='email'
						className='bg-richblack-400'
						{...register('email',{required:true})}>

						{
							errors.email && <p>Email is required</p>
						}
					</input>
				</div>
				{/* Password */}
				<div className='mt-10 flex flex-col mb-10'>
					<label htmlFor='password'>password</label>
					<input type='password' id='password' name='password' 
						className='bg-richblack-400'
						{...register('password',{required:true})}>
						{
							errors.password && <p>Password is required</p>
						}							
					</input>
				</div>
				
				<button type='submit' className='bg-richblack-300 w-[80px] rounded-md h-6'>Sign Up</button>
			</form>

				<div className='bg-richblack-5 h-[2px] mt-10'></div>
			<div className='mt-10'>
				<p>Already Have An Account</p>
				<Link to={'/login'} className=' bg-richblack-500'>Login</Link>
			</div>

		</div>
	)
}

export default Signup;