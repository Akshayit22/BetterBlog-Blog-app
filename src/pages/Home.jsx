import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlogs } from '../Services/operations/apiBlog';
import AllBlogs from './blog/AllBlogs';

const Home = () => {

	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);
	const [data,setData] = useState(null);

	async function fetchBlogsData() {
		setLoading(true);
		try {
			dispatch(getAllBlogs())
			.then((data) => {
				console.log("Ali", data);
				setData(data);
			});

		}
		catch (error) {
			console.log(error);
		}
		setLoading(false);
	}


	useEffect(() => {
		fetchBlogsData();
	}, []);

	return (
		<div>
			<p>Home</p>
			{

				loading ? <Spinner></Spinner> : <AllBlogs data={data}></AllBlogs>
					
			}
			

		</div>
	)
}

export default Home;