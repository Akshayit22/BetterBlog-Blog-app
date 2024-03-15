import React from 'react'
import {formatDate} from '../../Services/formatDate';
import { useDispatch, useSelector } from 'react-redux';
import { MdAddComment, MdKeyboardBackspace, MdDelete } from "react-icons/md";
import {toast} from 'react-toastify';
import { Form, useLocation, useNavigate } from 'react-router-dom';
import { deleteComment, createComment } from '../../Services/operations/apiComment';
import {getBlog} from '../../Services/operations/apiBlog';

function Comment({SingleBlog}) {
	const {user} = useSelector((s) => s.profile);
	const {token} = useSelector((s) => s.auth);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const location = useLocation();
	const ID = location.pathname.split("/").at(-1);

	const AddComment = (e) =>{
		e.preventDefault();
		const CommentBody = e.target.textArea.value
		if(CommentBody=== ''){
			toast.error("Comment can't be Empty !!!")
			return;
		}
		else if(user==null){
			toast.error("Login first to Create Comment !!!")
		}
		else{
			dispatch(createComment(SingleBlog._id, CommentBody, token));
			toast.success("Comment Create Successfully !!!");
			dispatch(getBlog(ID));
		}
	}

	const deleteCommentHandler = (CId)=>{
		dispatch(deleteComment(SingleBlog._id, CId, token));
		toast.success("Comment Deleted Successfully !!!");
		dispatch(getBlog(ID));
	}
	console.log(SingleBlog);

	return (
		<div>
			<div className="flex justify-center items-center">
				<form className="h-fit px-7 w-full rounded-[12px] bg-richblack-600 p-4 shadow-md " onSubmit={(e) => AddComment(e)}>
					<p className="text-xl font-semibold text-blue-900 cursor-pointer transition-all hover:text-black">
						Add Comment
					</p>
					<textarea id="textArea" className="h-40 px-3 py-1 mt-5 text-black text-lg outline-none border-gray-300 w-full resize-none border rounded-lg placeholder:text-sm" defaultValue={''} placeholder="Add your comments here"></textarea>

					<div className="flex justify-between mt-2">
						<p className=" text-blue-900 text-lg">Write some good</p>
						<button type='submit' className="h-12 w-[150px] bg-blue-400 text-sm text-white rounded-lg transition-all cursor-pointer hover:bg-blue-600" >
							Submit comment
						</button>
					</div>
				</form>
			</div>

			<div className='flex flex-col mb-5 mt-5'>
				<p className="text-xl font-semibold text-white">
					Comment
				</p>

				{
					SingleBlog.comments.length > 0 ?
					SingleBlog?.comments?.toReversed().map((comment, index) => {
						return <div key={index} className=" rounded-md p-3 ml-3 my-3 bg-richblack-700">
							<div className='flex justify-between'>
								<div className="flex gap-3 items-center">

									<img src={comment.user.image ? comment.user.image : `https://api.dicebear.com/5.x/initials/svg?seed=${comment.user.firstName} ${comment.user.lastName}`}
										className="object-cover w-12 h-12 rounded-full border-2 border-emerald-400  shadow-emerald-400"></img>

									<div className='flex flex-col'>
										<h3 className="font-bold">
											{comment.user.firstName + " " + comment.user.lastName}
										</h3>
										<p>{formatDate(comment.createdAt)}</p>

									</div>

								</div>
								<div>
									{
										user !==null && comment?.user?._id == user?._id && (
											<MdDelete onClick={deleteCommentHandler(comment._id)}  className='bg-richblack-700 hover:cursor-pointer hover:bg-richblack-600 text-2xl m-5 rounded-lg' />
										)
									}

								</div>
							</div>


							<p className="text-gray-600 mt-2 min-h-[10vh] bg-richblack-500 rounded-lg p-2">
								{comment.body}
							</p>

						</div>


					})
					:
					(<div>Not Found</div>)
				}
			</div>
		</div>
	)
}

export default Comment