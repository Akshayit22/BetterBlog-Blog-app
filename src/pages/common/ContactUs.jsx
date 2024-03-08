import React, { useEffect } from 'react'
import './Contact.css';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import {contactUs} from '../../Services/operations/apiContactUs'
function ContactUs() {

	const { register, handleSubmit, reset,
		formState: { errors, isSubmitSuccessful } } = useForm();

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({
				email: "",name:"",body:""
			})
		}
	}, [ reset]);

	const dispatch = useDispatch();

	const handleContactUs = (data) => {
		console.log(data);
		if (data.email === '' || data.name === '' || data.body === '') {
			toast.error('please fill the details');
			return;
		}
		toast.success("Request stored successfully !!!");
		dispatch(contactUs(data.name,data.email,data.body));
		reset();
	}

	return (
		<div>
			<section className="contactMeSection bg-richblack-600" id="contactMe">
				<div className="container" >

					<h2 className='text-[2.5rem] md:text-[5rem]'>Contact Us</h2>
					<h3 className='text-[1.5rem] md:text-[3rem]'>Questions, Thoughts, Or Just Want To Say Hello?</h3>
					{
						isSubmitSuccessful===true?
						(
							<div>
								<h2 className='text-[1rem] md:text-[2rem]'>Request Received, Thank You!!!</h2>
							</div>
						):
						(<div></div>)
					}

					<div className="contactUsForm lg:ml-5">
						<form onSubmit={handleSubmit(handleContactUs)} className='w-[95%] md:w-[50%]'>
							<div className="formFieldContainer">
								<input className="formField" type="text" {...register('name')} placeholder="Enter your name" />
							</div>
							<div className="formFieldContainer">
								<input className="formField" type="email" {...register('email')} placeholder="Enter your email address" />
							</div>

							<div className="formFieldContainer">
								<textarea className="formField" name="message" id="" cols="20" rows="10" {...register('body')}
									placeholder="Enter your message"></textarea>
							</div>
							<div className="formBtn">
								<button type="submit" className="btn" id="submit-btn">
									Send Message
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</div>
	)
}

export default ContactUs