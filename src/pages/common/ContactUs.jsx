import React, { useEffect } from 'react'
import './Contact.css';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { contactUs } from '../../Services/operations/apiContactUs'
import { toast } from 'react-toastify';


function ContactUs() {

	let { register, handleSubmit, reset,
		formState: { errors, isSubmitSuccessful } } = useForm();

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({
				email: "", name: "", body: ""
			})
		}
	}, [reset]);

	const dispatch = useDispatch();

	const handleContactUs = (data) => {
		console.log(data);
		if (data.email === '' || data.name === '' || data.body === '') {
			toast.error('please fill the details');
			isSubmitSuccessful = false;
			return;
		}
		else{
			dispatch(contactUs(data.name, data.email, data.body));
			toast.success("Request stored successfully !!!");
			reset();
		}
	}

	return (
		<div>
			<section className="contactMeSection bg-richblack-600" id="contactMe">
				<div className="container" >

					<h2 className='text-[2.5rem] md:text-[5rem]'>Contact Us</h2>
					<h3 className='text-[1.5rem] md:text-[3rem]'>Questions, Thoughts, Or Just Want To Say Hello?</h3>
					{
						isSubmitSuccessful === true ?
							(
								<div>
									<h2 className='text-[1rem] md:text-[2rem]'>Request Received, Thank You!!!</h2>
								</div>
							) :
							(<div></div>)
					}

					<div className="flex items-center justify-center p-12">
						
						<div className="mx-auto w-full max-w-[550px]">
							<form onSubmit={handleSubmit(handleContactUs)}>
								<div className="mb-5">
									<label for="name" className="mb-3 block text-base font-medium text-[#07074D]">
										Full Name
									</label> 
									<input type="text" name="name" id="name" placeholder="Full Name" {...register('name')}
										className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
								</div>
								<div className="mb-5">
									<label for="email" className="mb-3 block text-base font-medium text-[#07074D]">
										Email Address
									</label>
									<input type="email" name="email" id="email" placeholder="example@domain.com" {...register('email')}
										className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
								</div>
								
								<div className="mb-5">
									<label for="message" className="mb-3 block text-base font-medium text-[#07074D]">
										Message
									</label>
									<textarea rows="4" name="message" id="message" placeholder="Type your message" {...register('body')}
										className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"></textarea>
								</div>
								<div>
									<button type='submit'
										className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default ContactUs