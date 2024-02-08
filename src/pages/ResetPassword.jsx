import React from 'react'
import { useForm } from 'react-hook-form';
import {useState, useEffect } from 'react';
import {resetPassword,generateOtp} from '../Services/operations/apiAuth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const ResetPassword = () => {

	const { register, handleSubmit, reset, getValues,
		formState: { errors, isSubmitSuccessful } } = useForm();
	
	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({
				password:"",confirmPassword:""
			})
		}
	}, [isSubmitSuccessful, reset]);

	const Navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSubmitResetPassword = (data)=>{
		//console.log(data);
		dispatch(resetPassword(data.email,data.otp,data.password,data.confirmPassword,Navigate));
	}

	const [otpsent,setOtpSent] = useState(false);
	const [email,setEmail] = useState("");
	//const mail = document.getElementById('email').innerText;
	// const emailHandler = ()=>{
	// 	setEmail(event.target.value);
	// 	console.log(email);
	// }
	const handleOtp = () =>{
		setEmail(getValues("email"));
		console.log(email,"send otp");

		dispatch(generateOtp(email));
		
		setOtpSent(true);
		setTimeout(()=>{
			setOtpSent(false);
		},1000*100);
		
	}

	return (
		<div className='items-center justify-center mx-auto mt-10 w-[300px]'>
			<h1>Reset Password Page</h1>

			<form className='flex flex-col' onSubmit={handleSubmit(handleSubmitResetPassword)}>
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
				<div className='mt-2 '>
					{
						otpsent? 
							<label>Wait for Resending Otp...</label>
						:
							<label onClick={handleOtp} className='bg-richblack-400 hover:bg-richblack-500'>Send OTP</label>
					}
				</div>

				<div className='mt-10 flex flex-col mb-2'>
					<label>Enter OTP </label>
					<input type='text' id='otp' name='otp' 
						className='bg-richblack-400'
						{...register('otp',{required:true})}>
						{
							errors.password && <p>OTP is required</p>
						}							
					</input>
				</div>

				{/* password */}
				<div className='mt-10 flex flex-col mb-5'>
					<label>password</label>
					<input type='password' id='password' name='password' 
						className='bg-richblack-400'
						{...register('password',{required:true})}>
						{
							errors.password && <p>Password is required</p>
						}							
					</input>
				</div>
				{/* confirm Password */}
				<div className='mt-3 flex flex-col mb-10'>
					<label> confirm password</label>
					<input type='password' id='confirmPassword' name='confirmPassword' 
						className='bg-richblack-400'
						{...register('confirmPassword',{required:true})}>
						{
							errors.confirmPassword && <p>Confirm Password is required</p>
						}							
					</input>
				</div>
				
				<button type='submit' className='bg-richblack-300 w-[150px] rounded-md h-6'>Reset Password</button>
			</form>

			<div className='bg-richblack-5 h-[2px] mt-10'></div>

			<div className='mt-10'>
				<p>You Don't have account</p>
				<Link to={'/signup'} className=' bg-richblack-500'>Sign Up</Link>
			</div>

		</div>
	)
}

export default ResetPassword;