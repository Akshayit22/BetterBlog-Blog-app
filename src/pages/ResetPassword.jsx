import React from 'react'
import { useForm } from 'react-hook-form';
import {useState, useEffect } from 'react';
import {resetPassword,generateOtp} from '../Services/operations/apiAuth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from './common/Navbar';
import toast from 'react-hot-toast';
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
		if (data.email === '') {
			toast.error('please fill the details');
			return;
		}
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
		if (email === '') {
			toast.error('please fill the details');
			return;
		}
		console.log(email,"send otp");

		dispatch(generateOtp(email));
		
		setOtpSent(true);
		setTimeout(()=>{
			setOtpSent(false);
		},1000*100);
		
	}

	return (
		<div className='items-center justify-center mx-auto mt-10 w-[300px]'>
			{/* <div className='pb-[50px]'>
				<Navbar></Navbar>
			</div> */}
			<h1 className='text-center text-xl'>Reset Password Page</h1>

			<form className='flex flex-col' onSubmit={handleSubmit(handleSubmitResetPassword)}>
				{/* Email */}
				<div className=' flex flex-col'>
					<label htmlFor='email'>Email :</label>
					<input type='email' id='email' name='email'
						className='bg-white text-black p-1 rounded-md text-lg'
						{...register('email')}>

						{
							errors.email && <p>Email is required</p>
						}
					</input>
				</div>
				<div className='mt-5 '>
					{
						otpsent? 
							<label>Wait for Resending Otp...</label>
						:
							<label onClick={handleOtp} className='bg-richblack-600 p-3 rounded-md h-5 hover:bg-richblack-700 transition:0.5s'>Send OTP</label>
					}
				</div>

				<div className='mt-5 flex flex-col mb-2'>
					<label>Enter OTP :</label>
					<input type='text' id='otp' name='otp' 
						className='bg-white text-black p-1 rounded-md text-lg'
						{...register('otp')}>
						{
							errors.password && <p>OTP is required</p>
						}							
					</input>
				</div>

				{/* password */}
				<div className='flex flex-col mb-3'>
					<label>Password :</label>
					<input type='password' id='password' name='password' 
						className='bg-white text-black p-1 rounded-md text-lg'
						{...register('password')}>
						{
							errors.password && <p>Password is required</p>
						}							
					</input>
				</div>
				{/* confirm Password */}
				<div className=' flex flex-col mb-10'>
					<label>Confirm password :</label>
					<input type='password' id='confirmPassword' name='confirmPassword' 
						className='bg-white text-black p-1 rounded-md text-lg'
						{...register('confirmPassword')}>
						{
							errors.confirmPassword && <p>Confirm Password is required</p>
						}							
					</input>
				</div>
				
				<button type='submit' className='bg-richblack-600 p-3 rounded-md h-10 hover:bg-richblack-700 transition:0.5s'>Reset Password</button>
			</form>

			<div className='bg-richblack-5 h-[2px] mt-10'></div>

			<div className='mt-10 mb-5'>
				
				<Link to={'/user-auth'} className='bg-richblack-600 p-3 rounded-md h-5 hover:bg-richblack-700 transition:0.5s'>Sign Up</Link>
			</div>

		</div>
	)
}

export default ResetPassword;