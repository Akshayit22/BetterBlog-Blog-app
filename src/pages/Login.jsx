import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from "react-hot-toast";
import { useEffect } from 'react';
import {login} from '../Services/operations/apiAuth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Login = () => {

	const { register, handleSubmit, reset,
		formState: { errors, isSubmitSuccessful } } = useForm();
	
	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({
				password:"",
			})
		}
	}, [isSubmitSuccessful, reset]);

	const Navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSubmitLogin = (data)=>{
		//console.log(data);
		dispatch(login(data.email,data.password,Navigate));
	}



	return (
		<div className='items-center justify-center mx-auto mt-10 w-[300px]'>
			<h1>Login Page</h1>

			<form className='flex flex-col' onSubmit={handleSubmit(handleSubmitLogin)}>
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
					<label>password</label>
					<input type='password' id='password' name='password' 
						className='bg-richblack-400'
						{...register('password',{required:true})}>
						{
							errors.password && <p>Password is required</p>
						}							
					</input>
				</div>
				
				<button type='submit' className='bg-richblack-300 w-[80px] rounded-md h-6'>Login</button>
			</form>
			<Link to='/resetPassword' className='mt-10'>Reset Password</Link>

			<div className='bg-richblack-5 h-[2px] mt-10'></div>

			<div className='mt-10'>
				<p>You Don't have account</p>
				<Link to={'/signup'} className=' bg-richblack-500'>Sign Up</Link>
			</div>

		</div>
	)
}

export default Login;