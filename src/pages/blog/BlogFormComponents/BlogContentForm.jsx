import React, { useEffect, useState } from 'react'

const BlogContentForm = ({ name, label, register, setValue }) => {

	const [content, setContent] = useState([
		{'header':'','body':''}
	]);
	const [length,setLength] = useState(1);

	const HandleTextChange = (text,index,type) =>{
		content[index].type = text;
		console.log(content);
	}


	useEffect(() => {
		register(name);
		setValue(name, content);
	}, [content])

	return (
		<div className='mb-4'>
			<label className="mb-2 block text-base font-medium text-white" htmlFor={name}>{label}</label>
			<div className='flex flex-col '>
				{
					content.map((obj,index)=>(
						<div key={index} className='flex flex-col'>
							<label className="mb-1 block text-base font-medium text-white" htmlFor={`header_${index}`}>{`Enter Heading and Body ${index+1}`}</label>
							<input name={`header_${index}`} placeholder={`Heading ${index+1}`} onChange={(e)=> HandleTextChange(e.target.value,index,header)}
								className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md "
								></input>
							<textarea name={`body_${index}`} placeholder={`Heading ${index+1} Body`} onChange={(e)=> HandleTextChange(e.target.value,index,body)}
								className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md mt-1" 
								></textarea>
						</div>
					))
				}
			</div>
			<div className='flex justify-between mt-2'>
				<p className='hidden md:block'>You can add more content</p>
				<button className="hover:bg-blue-200  rounded-md bg-blue-400 py-2 px-4 text-center text-base font-semibold text-white outline-none"
					onClick={(e)=> {
						e.preventDefault();
						setContent([...content,{'header':'','body':''}])
					}}>
					Add More
				</button>
			</div>
		</div>
	)
}

export default BlogContentForm