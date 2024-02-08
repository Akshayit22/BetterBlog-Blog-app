import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<div className='mx-auto flex flex-col '>
			<h1>Home Page</h1>

			<Link to={'/login'} className='mt-10 bg-richblack-500'>Login Page</Link>

			<Link to={'/signup'} className='mt-10 bg-richblack-500'>Sign Up Page</Link>
		</div>
	)
}

export default Home