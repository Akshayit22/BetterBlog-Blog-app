import React from 'react'
import './Contact.css'
import { TfiEmail } from "react-icons/tfi";
import { SiMinutemailer } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram,FaGithub } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


function Footer() {
	const navigate = useNavigate();
	return (
		<div className='bg-richblack-700 h-[30vh]'>
			
			<footer className=" rounded-lg shadow dark:bg-gray-900 m-4">
				<div className=" max-w-screen-xl mx-auto p-4 md:py-8">
					<div className="sm:flex sm:items-center sm:justify-between">
						<div className='font-bold text-2xl cursor-pointer flex items-center gap-1' onClick={() => Navigate('/home')}>

							<span>Better Blog{":)"}</span>
						</div>
						<ul className="flex flex-wrap items-center mb-6 mt-6 lg:mt-0 text-sm font-medium text-gray-500 dark:text-gray-400">
							<li className='flex text-[1rem] gap-1' >
								<TfiEmail className='mt-1'/> 
								<a href="#" className="hover:underline me-4 md:me-6">Email</a>
							</li>
							<li className='flex text-[1rem] gap-1'>
								<FaGithub className='mt-1'/>
								<a href="#" className="hover:underline me-4 md:me-6">GitHub</a>
							</li>
							<li className='flex text-[1rem] gap-1'>
								<FaLinkedinIn className='mt-1'/>
								<a href="#" className="hover:underline me-4 md:me-6">LinkedIn</a>
							</li>
							<li className='text-[1rem]' onClick={()=> navigate()}>
								<a href="#" className="hover:underline me-4 md:me-6">About</a>
							</li>
							<li className='text-[1rem]' onClick={()=> navigate()}>
								<a  className="hover:underline">Contact</a>
							</li>
						</ul>
					</div>
					<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
					<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Better Blog. All Rights Reserved.</span>
				</div>
			</footer>


		</div >
	)
}

export default Footer