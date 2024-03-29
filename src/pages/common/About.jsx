import React from 'react'

function About() {

	return (
		<div className='w-[90%] min-h-max h-screen'>
			<div className="sm:flex items-center max-w-screen-xl">
				<div className="sm:w-1/2 p-10">
					<div className="image object-center text-center">
						<img src="https://i.imgur.com/WbQnbas.png" />
					</div>
				</div>
				<div className="sm:w-1/2 p-5">
					<div className="text">
						<span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
						<h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-indigo-600">This Project.</span>
						</h2>
						<span className="text-gray-500 border-indigo-600 ">• My Name is Akshay Telang</span>
						<p className="text-gray-700 mt-5">
							• I Developed this full-stack application that allows users to create, update, read, search, save and comment on blogs of different categories.
						</p>
						<p className="text-gray-700 mt-3">
							• I build this Application using React, Redux, TailwindCss, Axios in frontend and
							Nodejs, Mongodb, Nodemailer, Cloudinary, JWT authentication in backend.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About;