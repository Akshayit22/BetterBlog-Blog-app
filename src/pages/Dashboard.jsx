import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, updateProfile } from '../Services/operations/apiProfile';
import { CiEdit } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { MdClose } from "react-icons/md";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Dashboard = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [openModal, setOpenModal] = useState(false);

	var { token } = useSelector((s) => s.auth);
	const { profileDetails } = useSelector((state) => state.profile);
	const { UserBlogs } = useSelector((state) => state.profile);

	let { register, handleSubmit, reset,
		formState: { errors, isSubmitSuccessful } } = useForm();

	const toggleModal = () => {
		setOpenModal(!openModal);
	}

	const handleProfileData = async (data) => {

		if (data.about == '' || data.gender == null || data.contact == '') {
			toast.error('please fill All the details');
			isSubmitSuccessful = false;
		}
		else {
			console.log(data);
			dispatch(updateProfile(data.about, data.gender, data.contact, token));
			toast.success("Request stored successfully !!!");
			reset();
			toggleModal();
		}
	}

	useEffect(() => {
		if (!profileDetails || !UserBlogs) {
			dispatch(getProfile(token));
		}
		console.log("profileDetails", profileDetails);
		console.log("UserBlogs", UserBlogs);

	}, []);


	return (
		<div className='min-h-screen relative'>

			{
				openModal ?
					(
						<div className="h-screen w-full flex justify-center items-center  bg-gray-800 absolute bg-richblack-900 overflow-x-hidden z-15">
							<div className="bg-richblack-500 p-5 m-10 rounded-3xl shadow-lg text-black relative">
								<MdClose className='text-3xl top-0 right-0 absolute m-3' onClick={() => toggleModal()}></MdClose>
								<form onSubmit={handleSubmit(handleProfileData)}>

									<div className="flex justify-center mb-3 mt-5 flex-col">
										<label htmlFor='about'>About </label>
										<textarea rows={'4'} name="about" id="about" className="bg-gray-200 px-3 py-3 rounded-xl" placeholder="About" {...register('about')} defaultValue={profileDetails.additionalDetails.about}></textarea>
									</div>
									<div className="flex flex-col mb-3">
										<label htmlFor='gender'> Gender</label>
										<div className='flex gap-5'>
											Male<input type="radio" name="gender" id="gender" className="bg-gray-200 px-5 py-3 scale-125" value={'Male'} {...register('gender')} defaultChecked={profileDetails.additionalDetails.gender == 'Male' ? true : false}></input>
											Female<input type="radio" name="gender" id="gender" className="bg-gray-200 px-5 py-3 scale-125" value={'Female'} {...register('gender')} defaultChecked={profileDetails.additionalDetails.gender == 'Female' ? true : false}></input>
										</div>
									</div>
									<div className="flex justify-center mb-3">
										<input type="text" name="contact" id="" className="bg-gray-200 px-5 py-3 rounded-xl" placeholder="contact details" {...register('contact')} defaultValue={profileDetails.additionalDetails.contact}></input>
									</div>
									<div className="flex justify-center">
										<button className="bg-blue-600 rounded-xl w-40 py-2 text-white hover:bg-blue-700">Submit</button>
									</div>
								</form>

							</div>
						</div>
					) :
					(<div></div>)
			}

			<h1 className='space-y-2 text-lg font-medium leading-6 text-indigo-300 p-5'>Welcome to Your Profile, </h1>
			{
				profileDetails !== null && openModal == false ? (
					<div className='w-full flex justify-center '>
						<div className=" sm:w-[350px] md:w-[400px] px-6 py-6  text-center bg-gray-800 rounded-lg lg:mt-0 xl:px-10 bg-richblack-600 ">

							<div className='relative hover:cursor-pointer'>
								<CiEdit className='text-3xl shadow-md absolute top-0 right-0' onClick={() => toggleModal()} />
							</div>
							<div className="space-y-4 xl:space-y-6 md:flex lg:flex">
								<img className="mx-auto rounded-full h-36 w-36" src={`https://api.dicebear.com/5.x/initials/svg?seed=${profileDetails.firstName} ${profileDetails.lastName}`} alt="User avatar"></img>
								<div className="space-y-2">
									<div className="flex justify-center items-center flex-col space-y-2 text-lg font-medium leading-6">
										<h3 className="text-white">{profileDetails.firstName}{" "}{profileDetails.lastName}</h3>
										<p className="text-indigo-300">{profileDetails.additionalDetails.about}</p>
										<p className="text-indigo-300">{profileDetails.additionalDetails.gender}</p>
										<p className="text-indigo-300">{profileDetails.email}</p>

										<div className="flex justify-center mt-5 space-x-5">

										</div>
									</div>
								</div>
							</div>
						</div>

					</div>
				) :
					(<div></div>)
			}

			<h1 className='space-y-2 text-lg font-medium leading-6 text-indigo-300 p-5'>User Blogs</h1>

			{
				UserBlogs?.length > 0 && openModal == false ?
					(
						<div className='flex flex-wrap p-1 justify-start'>


							{
								UserBlogs.map((blog, index) => (

									<div key={index} onClick={() => { navigate(`/blog/${blog._id}`) }} className='bg-richblack-500 hover:cursor-pointer rounded-md p-3 m-3 md:w-[30%] h-fit flex flex-row w-full'>

										<div className='flex gap-3 h-fit'>
											<img src={blog.image} width={"100px"} className='rounded-sm h-[100px]'></img>
											<div>
												<p className='text-lg wrap font-bold text-richblack-800'>{blog.title.substring(0, 55) + "..."}</p>
												<div className='flex flex-wrap lg:flex-row lg:flex-wrap gap-1'>
													<p className='lg:text-lg mt-1 font-bold text-richblack-700'>{"category: "}</p>
													{
														blog.category.map((c, i) => (
															<p key={i} className='lg:text-md font-bold bg-richblack-400 p-1 rounded-md w-fit'>{c}</p>
														))
													}
												</div>

												<div>
													<p className='font-bold text-richblack-700'>Comments: <span className='font-bold text-white'>{blog.comments?.length}</span></p>

												</div>

											</div>
										</div>






									</div>

								))
							}


						</div>
					) :
					(<div className='space-y-2 text-md font-medium leading-6 text-richblack-300  p-5'>No Blog Created</div>)
			}

			<h1 className='space-y-2 text-lg font-medium leading-6 text-indigo-300 p-5'>User Saved Blogs</h1>

			{
				profileDetails?.savedBlogs?.length > 0 && openModal == false ?
					(
						<div className='flex flex-wrap p-1 justify-start'>
							{
								profileDetails.savedBlogs.map((blog, index) => (
									<div key={index} onClick={() => { navigate(`/blog/${blog._id}`) }} className='bg-richblack-500 hover:cursor-pointer rounded-md p-3 m-3 md:w-[30%] h-fit flex flex-row w-full'>

										<div className='flex gap-3 h-fit'>
											<img src={blog.image} width={"100px"} className='rounded-sm h-[100px]'></img>
											<div>
												<p className='text-lg wrap font-bold text-richblack-800'>{blog.title.substring(0, 55) + "..."}</p>
												<div className='flex flex-wrap lg:flex-row lg:flex-wrap gap-1'>
													<p className='lg:text-lg mt-1 font-bold text-richblack-700'>{"category: "}</p>
													{
														blog.category.map((c, i) => (
															<p key={i} className='lg:text-md font-bold bg-richblack-400 p-1 rounded-md w-fit'>{c}</p>
														))
													}
												</div>

												<div>
													<p className='font-bold text-richblack-700'>Comments: <span className='font-bold text-white'>{blog.comments?.length}</span></p>

												</div>

											</div>
										</div>

									</div>
								))
							}
						</div>
					) :
					(
						<div className='space-y-2 text-md font-medium leading-6 text-richblack-300 p-5'>Nothing saved here</div>
					)
			}

		</div>
	)
}

export default Dashboard;