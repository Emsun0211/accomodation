import React from "react";
import { Link } from "react-router-dom";
// import { AiFillRightCircle } from "react-icons/ai";

const ContactUs = () => {
	const stylebg = {
		width: "2px",
		height: "500px",
		backgroundColor: "#cccccc",
	};
	return (
		<div
			className='  md:flex-row flex flex-col justify-center items-center  md:justify-between sm:px-[4rem] px-[1rem] '
			id='contactus'>
			<div className='mt-[1rem] mb-[2rem] '>
				<h1 className='font-bold text-[1.5rem] sm:text-[3rem] text-center text-[#404040]'>
					Contact Us
				</h1>
				<div className='hidden sm:block font-semibold text-[1rem] text-[#404040]'>
					<p>Nigeria</p>
					<p>+234103456778</p>
					<p>+234103476983</p>
				</div>
			</div>
			<div style={stylebg} className='hidden sm:block'></div>
			<div className='flex flex-col mt-[2rem]  w-[80%] md:w-[50%]'>
				<form className='flex flex-col mx-auto gap-y-[2rem]'>
					<div className='flex gap-4 flex-col md:flex-row '>
						<input
							placeholder='First Name'
							type='text'
							name='name'
							className='md:w-[50%] border-[2px] border-[#cccccc] rounded-[5px] text-black bg-white-300  p-[0.75rem] '
						/>
						<input
							placeholder='Last Name'
							type='text'
							name='name'
							className='border border-gray-300 rounded outline-none focus:ring-blue-500 focus:ring-1
							md:w-[50%] border-[2px] border-[#cccccc] rounded-[5px] text-black bg-white-300  p-[0.75rem]'
						/>
					</div>

					<div className='flex gap-4 flex-col md:flex-row'>
						<input
							placeholder='Phone Number'
							type='text'
							name='phone'
							className='md:w-[50%] border-[2px] border-[#cccccc] rounded-[5px] text-black bg-white-300  p-[0.75rem] 
							border border-gray-300 rounded outline-none focus:ring-blue-500 focus:ring-1'
						/>
						<input
							placeholder='Email Address'
							type='email'
							name='email'
							className=' outline-none focus:ring-blue-500 focus:ring-1
							md:w-[50%] border-[2px] border-[#cccccc] rounded-[5px] text-black bg-white-300  p-[0.75rem]'
						/>
					</div>
					<textarea
						id='message'
						rows='6'
						placeholder='What Can We Help You With?'
						className='  outline-none focus:ring-blue-500 focus:ring-1
						border-[2px] border-[#cccccc] rounded-[5px] text-black bg-white-300  p-[0.75rem]'
					/>
					{/* <button className=' w-[200px] m-auto bg-white  sm:text-blue-900 focus:border-blue-900 text-[#082EB5] border-[1px] border-blue-800  font-bold   sm:p-3 p-2 rounded-full  flex justify-center gap-x-[1rem] items-center mb-[1rem] justify-self-end hover:text-white hover:bg-[#082EB5]'>
					
					</button> */}
					<Link href={"/login"} className='w-[200px] self-center'>
						<p className='font-medium py-2 px-[46px] text-white text-center bg-black hover:bg-black/50'>
							Send
						</p>
					</Link>
					<p className='text-center sm:text-left text-[0.75rem] sm:text-[0.9rem] mb-[2rem] text-[#5b5b5b]'>
						Please be informed that when you click the send message button,
						Jewels Hotel will process your personal data in accordance with our
						privacy policy notice for the purpose of providing you with
						appropriate information.
					</p>
				</form>
			</div>
		</div>
	);
};

export default ContactUs;
