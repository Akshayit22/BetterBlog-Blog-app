import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineCurrencyRupee } from 'react-icons/hi';
import { toast } from 'react-toastify';
import ChipInput from '../BlogFormComponents/ChipInput';
import BlogContentForm from '../BlogFormComponents/BlogContentForm';
import Upload from '../BlogFormComponents/Upload';

const NewBlog = () => {
	/*
		createBlog(title,content,referenceLinks,category,token)

		{
		    "title":"First Blog",
		    "content":[{"header":"First Blog","body":"This is First Blog"}],
		    "referenceLinks":["http://github.com"],
		    "category":["one"]
		}

		{
		    "blogId":"65c9b452091462a32e429e43",
		    "title":"First Blog.",
		    "content":[{"header":"First Blog.","body":"This is First updated Blog"}],
		    "referenceLinks":["http://www.github.com"],
		    "category":["updated"],
		    "image":"https://res.cloudinary.com/dwvnhmzvu/image/upload/v1707656948/setup/zisqss984okudza6nxtt.jpg"
		}

	*/

	const {
		register,
		handleSubmit,
		setValue,
		getValues,
		formState: { errors },
	} = useForm();


	useEffect(() => {

	}, []);

	const onSubmit = async (data) => {

		//validate

		const formData = new FormData();


		console.log("AFTER add course API call");
		console.log("PRINTING FORMDATA", data);
	}


	return (
		<div className='min-h-screen bg-gradient-to-r from-richblack-700 to-blue-800'>
			<div className="flex items-center justify-center p-12">
				<div className="mx-auto w-full max-w-[550px] ">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='mb-4'>
							<label htmlFor="name" className="mb-3 block text-base font-medium text-white">
								Blog Title
							</label>
							<textarea name="BlogTitle" id="BlogTitle" placeholder="Enter Blog Title" {...register("BlogTitle")}
								className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md " />
						</div>

						<Upload
							name={"thumbnailImage"}
							label={"Blog Image"}
							register={register}
							errors={errors}
							setValue={setValue}
						/>

						<BlogContentForm
							label="Blog Content"
							name="BlogContent"
							placeholder="Enter Blog Content"
							register={register}
							setValue={setValue}
							getValues={getValues}
						/>


						<ChipInput
							label="Category"
							name="Category"
							placeholder="Enter category and press enter"
							register={register}
							setValue={setValue}
							getValues={getValues}
						/>

						<ChipInput
							label="Reference Links"
							name="ReferenceLinks"
							placeholder="Enter Reference Links and press enter"
							register={register}
							setValue={setValue}
							getValues={getValues}
						/>


						{/* <div className="mb-5">
							<label for="phone" className="mb-3 block text-base font-medium text-white">
								Phone Number
							</label>
							<textarea type="text" name="phone" id="phone" placeholder="Enter your phone number"
								className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
						</div>
						<div className="mb-5">
							<label for="email" className="mb-3 block text-base font-medium text-white">
								Email Address
							</label>
							<textarea type="email" name="email" id="email" placeholder="Enter your email"
								className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
						</div> */}

						{/* <div className="-mx-3 flex flex-wrap">
							<div className="w-full px-3 sm:w-1/2">
								<div className="mb-5">
									<label for="date" className="mb-3 block text-base font-medium text-white">
										Date
									</label>
									<input type="date" name="date" id="date"
										className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
								</div>
							</div>
							<div className="w-full px-3 sm:w-1/2">
								<div className="mb-5">
									<label for="time" className="mb-3 block text-base font-medium text-white">
										Time
									</label>
									<input type="time" name="time" id="time"
										className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
								</div>
							</div>
						</div> */}

						{/* <div className="mb-5 pt-3">
							<label className="mb-5 block text-base font-semibold text-white sm:text-xl">
								Address Details
							</label>
							<div className="-mx-3 flex flex-wrap">
								<div className="w-full px-3 sm:w-1/2">
									<div className="mb-5">
										<input type="text" name="area" id="area" placeholder="Enter area"
											className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
									</div>
								</div>
								<div className="w-full px-3 sm:w-1/2">
									<div className="mb-5">
										<input type="text" name="city" id="city" placeholder="Enter city"
											className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
									</div>
								</div>
								<div className="w-full px-3 sm:w-1/2">
									<div className="mb-5">
										<input type="text" name="state" id="state" placeholder="Enter state"
											className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
									</div>
								</div>
								<div className="w-full px-3 sm:w-1/2">
									<div className="mb-5">
										<input type="text" name="post-code" id="post-code" placeholder="Post Code"
											className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
									</div>
								</div>
							</div>
						</div> */}

						<div>
							<button type="submit"
								className="hover:bg-blue-200 w-full rounded-md bg-blue-400 py-3 px-8 text-center text-base font-semibold text-white outline-none">
								Create Blog
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default NewBlog;