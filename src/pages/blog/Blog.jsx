import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getBlog } from '../../Services/operations/apiBlog';
import { useLocation } from 'react-router-dom';

function Blog() {

	const dispatch = useDispatch();
	const location = useLocation();
	const [loading, setLoading] = useState(false);
	const [blog,setBlog] = useState(null);

	const ID = location.pathname.split("/").at(-1);

	async function fetchBlogData() {
		setLoading(true);
		try {
			dispatch(getBlog(ID))
			.then((data) => {
				console.log("Ali", data);
				setBlog(data);
			});

		}
		catch (error) {
			console.log(error);
		}
		setLoading(false);
	}


	useEffect(() => {
		fetchBlogData();
	}, []);

	return (
		<div>
			<div>blog</div>
			{
				blog?(
					<h1>{blog.title}</h1>
				):(
					<h1>Blog Not Found</h1>
				)
			}
		</div>
		
	);
}

export default Blog;