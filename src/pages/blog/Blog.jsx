import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBlog } from '../../Services/operations/apiBlog';
import { useLocation } from 'react-router-dom';
import Spinner from '../../Component/Commen/Spinner';


function Blog() {

	const dispatch = useDispatch();
	const location = useLocation();
	const [loading, setLoading] = useState(false);
	const { OneBlog } = useSelector((state) => state.blog);

	const ID = location.pathname.split("/").at(-1);


	useEffect(() => {
		setLoading(true);
		dispatch(getBlog(ID));
		setLoading(false);
	}, []);

	return (
		<div>
			<div>blog</div>
			{
				loading ?
					<Spinner></Spinner> :
					OneBlog ?
						(
							<h1>{OneBlog.title}</h1>
						) :
						(
							<h1>Blog Not Found</h1>
						)
			}
		</div>

	);
}

export default Blog;