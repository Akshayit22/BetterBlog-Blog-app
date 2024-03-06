import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function AllBlogs() {

	const {AllBlogs} = useSelector((state)=> state.blog);
	const navigate = useNavigate();
	const data = AllBlogs;
	
	return (
		<div>
			{
				data?.length > 0 ?
					(

						data.map((blog) => (
							<div key={blog._id}>
								<h1 > {blog.title}</h1>
								<p onClick={()=>{navigate(`/blog/${blog._id}`)}}>Link</p>
							</div>

						))
					) :
					(
						<div className="flex justify-center items-center"><p>No Data Found</p></div>
					)
			}

		</div>
	)
}

export default AllBlogs;