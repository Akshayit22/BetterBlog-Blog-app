import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getBlog } from '../../../Services/operations/apiBlog';
import { updateBlog } from '../../../Services/operations/apiBlog';

const UpdatedBlog = () => {
	/*
		updateBlog(blogId, title, content, referenceLinks, category,image,token)

	*/
	
	const location = useLocation();
	const dispatch = useDispatch();

	const { OneBlog } = useSelector((state) => state.blog);
	const { user } = useSelector((state) => state.profile);
	const { token } = useSelector((state) => state.auth);

	const [loading, setLoading] = useState(false);
	const ID = location.pathname.split("/").at(-1);
	const SingleBlog = OneBlog.length > 0 ? OneBlog[0] : null;

	useEffect(() => {

		setLoading(true);
		dispatch(getBlog(ID));
		setLoading(false);

		console.log("single blog", SingleBlog);
		console.log("user", user);

	}, []);
	
	return (
		<div className='min-h-screen'>

			{
				loading ?
					<Spinner></Spinner> :
					SingleBlog !== null ?
						(
							<div className='mt-2'>

								Update blog form with initial data inserted
							</div>
						) :
						(
							<h1 className='space-y-2 text-lg font-medium leading-6 text-indigo-300 p-5'>Blog Data Not Found</h1>
						)
			}
		</div >
	)
}

export default UpdatedBlog;