// import Link from "next/link";
import React, { useEffect, useState } from "react";
import Testimonial from "../../components/testimonial";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { rooms } from "../../utils/data";

function Home() {
	const [focus, setIsfocus] = useState(false);
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);

	const handleHoverOn = (id) => {
		rooms.forEach((room) => {
			if (room.id === id) {
				setIsfocus(true);
			}
		});
	};

	return (
		<div className='  text-center sm:px-[120px] pb-6 pt-[33px] sm:pt-[59px] flex flex-col  items-center justify-center'>
			{/* Header text */}
			<h1
				data-aos='fade-down'
				className=' text-[#000000]/80 font-south max-w-[400px] sm:max-w-[1075px] leading-[35px] sm:leading-[96px] text-center text-[32px] sm:text-[74px] '>
				{/* The finest of jewelries there is from all around the world */}
				Discover a World of Exquisite Accommodations.
			</h1>
			{/* find what fits you button */}
			<Link href={"#"}>
				<div className='bg-black flex items-center justify-center space-x-2  py-3 px-4 mt-6'>
					<p className='font-medium  text-white bg-black'>Find what fits you</p>
					<img src={"./arrow_outward.svg"} width={24} height={24} alt='' />
				</div>
			</Link>
			{/* Hero img */}
			<img
				alt='alt'
				src={
					"https://res.cloudinary.com/dxz1djlc2/image/upload/v1686396549/accomodation/acc6_srzxzv.jpg"
				}
				width={1000}
				height={586}
				className='hidden sm:block mt-14'
			/>
			{/* Hero img mobile */}
			<img
				alt='alt'
				src={
					"https://res.cloudinary.com/dxz1djlc2/image/upload/v1686396549/accomodation/acc6_srzxzv.jpg"
				}
				width={351}
				height={380}
				className='sm:hidden mt-14'
			/>
			<h2
				data-aos='fade-right'
				className='font-south  text-center  text-[24px] sm:text-[57px] sm:leading-[62px] leading-[26.4px] max-w-[351px] sm:max-w-[560px] mt-14 '>
				{/* Perfectly forged by hands by the best craftsmen */}
				Immerse Yourself in the Splendid of Our Hotels
			</h2>
			{/* products */}
			<div className='   grid grid-cols-2 sm:grid-cols-4 gap-5 mt-14'>
				{rooms.map((room, idx) => (
					<Link to={`/details/${room.id}`} key={idx}>
						<div className='flex flex-col items-center justify-center space-y-6 relative group '>
							<img
								alt='alt'
								src={
									// "https://res.cloudinary.com/dxz1djlc2/image/upload/v1686396426/accomodation/acc1_yiqmwc.jpg"
									room.img
								}
								width={165}
								height={180}
								className='sm:w-auto     sm:h-[295px] '
							/>
							<div>
								<p className='font-medium text-sm  text-[#000000]/80 mb-2'>
									{room.name}
								</p>
								<Link to={`/details/${room.id}`} className='block sm:hidden'>
									<p className='font-medium py-2 px-[46px]  bg-black hover:bg-black/60 text-white'>
										Details
									</p>
								</Link>
							</div>
							<div
								className={`absolute sm:top-[-7%] top-[-15%] right-0 left-0 sm:h-[87%] h-[70%] w-[100%] bg-black/50 z-20 
									
								hidden group-hover:flex items-center justify-center cursor-pointer`}>
								<p className='text-white'>view details</p>
							</div>
						</div>
					</Link>
				))}
			</div>

			{/* texts */}
			<div className='flex  flex-col items-center justify-center sm:flex-row space-y-6 sm:space-x-20 sm:space-y-0 mt-14'>
				<div
					data-aos='fade-right'
					className='sm:w-1/2 sm:text-left flex flex-col pl-5 pr-[21px]  space-y-4 sm:space-y-[29px] '>
					<h1 className='font-south  text-[24px] sm:leading-[62px]  sm:text-[57px] text-left sm:text-left '>
						There’s something for everyone
					</h1>
					<p className=' text-sm sm:text-xl text-[#000000]/50 text-left sm:text-left sm:max-w-[560px] max-w-[349px]'>
						Experience the ethereal beauty of this haven, where soft tones,
						delicate textures, and a serene atmosphere transport you to a realm
						of pure tranquility and grace.
					</p>
				</div>
				<img
					alt='alt'
					src={
						"https://res.cloudinary.com/dxz1djlc2/image/upload/v1686396583/accomodation/acc8_btbsaw.jpg"
					}
					width={349}
					height={372}
					className=' sm:hidden '
					data-aos='zoom-in'
				/>
				<img
					alt='alt'
					src={
						"https://res.cloudinary.com/dxz1djlc2/image/upload/v1686396583/accomodation/acc8_btbsaw.jpg"
					}
					width={560}
					height={534}
					className='hidden sm:block sm:w-1/2'
					data-aos='zoom-in'
				/>
			</div>

			<div className='flex flex-col items-center justify-center sm:flex-row-reverse space-y-6 sm:gap-20 sm:space-y-0 mt-[59px]'>
				<div
					data-aos='fade-left'
					className='sm:w-1/2 sm:text-left flex flex-col space-y-4 pl-5 pr-[21px] sm:space-y-[29px] '>
					<h1 className='font-south  text-[22px] sm:leading-[62px]   sm:text-[57px] text-left sm:text-left '>
						Priceless peace you can ever find
					</h1>
					<p className=' text-sm sm:text-2xl text-[#000000]/50 sm:text-left text-left max-w-[349px] sm:max-w-[560px] '>
						{/* Our products are limited editions of the finest pieces the craftsmen
						make */}
						Find serenity in this serene apartment, where the gentle hues, cozy
						furnishings, and lush green surroundings create an idyllic retreat
						for relaxation and rejuvenation
					</p>
				</div>
				{/* <div className='relative w-[349px] h-[380px]'> */}
				<img
					alt='alt'
					src={
						"https://res.cloudinary.com/dxz1djlc2/image/upload/v1686396630/accomodation/acc10_lxliu8.jpg"
					}
					width={349}
					height={380}
					className=' sm:hidden '
					data-aos='zoom-in'
				/>

				{/* </div> */}
				<img
					alt='alt'
					src={
						"https://res.cloudinary.com/dxz1djlc2/image/upload/v1686396630/accomodation/acc10_lxliu8.jpg"
					}
					width={560}
					height={534}
					className='hidden sm:block sm:w-1/2'
					data-aos='zoom-in'
				/>
			</div>
			{/* video */}
			<div className='mt-14'>
				<img
					alt='alt'
					src={"/Video.jpg"}
					width={349}
					height={228}
					className=' sm:hidden '
				/>
				<img
					alt='alt'
					src={"/Video.jpg"}
					width={1182}
					height={475}
					className='hidden sm:block '
				/>
			</div>
			{/* Testimonial section */}
			<div className='flex flex-col space-y-6 items-center justify-center mt-14'>
				<div
					className='text-center flex flex-col space-y-2 items-center '
					data-aos='fade-right'>
					<h2 className=' text-2xl font-south  sm:text-[64px] sm:leading-[70.4px] sm:max-w-md'>
						Customers have these to say
					</h2>
					<p className='text-sm sm:text-2xl text-[#000000]/50'>
						Customer satisfaction is at the core of our service.
					</p>
					<Testimonial />
				</div>
			</div>
		</div>
	);
}

export default Home;
