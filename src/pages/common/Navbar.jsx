import React, { useEffect, useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../../Services/operations/apiAuth';
const Navbar = ({getstarted=true}) => {

	let [open, setOpen] = useState(false);
	const Navigate = useNavigate();
	const dispatch = useDispatch();
	const location = useLocation();
	getstarted = getstarted?true:false;

	const logoutFunc = () =>{
		dispatch(logout());
		Navigate('/');
	}

	let Links =[
		{name:"home",link:"/home"},
		{name:"profile",link:"/dashboard"},
		{name:"about",link:"/about"},
		{name:"contact us",link:"/contactUs"},
	      ];
	
	useEffect(()=>{
		setOpen(false);
	},[location]);

	return (
		<div className='shadow-md w-full fixed top-0 left-0'>
			<div className='md:flex items-center justify-between bg-richblack-700 py-4 md:px-10 px-7'>
				{/* logo  */}
				<div className='font-bold text-2xl cursor-pointer flex items-center gap-1' onClick={()=>Navigate('/home')}>
					
					<span>Better Blog{":)"}</span>
				</div>
				{/* Menu icon */}
				<div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
					{
						open ? <RxCross1 /> : <CiMenuBurger />
					}
				</div>
				{/* linke items */}
				<ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12 bg-richblack-800' : 'top-[-490px]'} `}>
					{
						Links.map((link,index) => (
							<li key={index} className='md:ml-8 md:my-0 my-7 font-semibold'>
								<a onClick={()=>Navigate(link.link)} className='text-gray-800 hover:text-blue-400 duration-500 cursor-pointer'>{link.name.toUpperCase()}</a>
							</li>))
					}
					{
						getstarted===true?
						<button onClick={()=> Navigate('/user-auth')} className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static' >Get Started</button>
						:<button onClick={()=>logoutFunc()} className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded  duration-500 hover:bg-blue-800 md:static' >Log Out</button>
					}
					
				</ul>
				{/* button */}
			</div>
		</div>
	)
};

export default Navbar;