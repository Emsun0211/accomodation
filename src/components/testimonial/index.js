// import Image from "next/image";
import React, { useEffect } from "react";
import Star from "../start";
import AOS from "aos";
import "aos/dist/aos.css";

function Testimonial() {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);
	return (
		<div className='pb-6 pt-6 ' data-aos='zoom-out'>
			<div className='bg-black flex flex-col space-y-4 items-start justify-center px-7 py-10 sm:py-[90px] sm:px-28 '>
				<div className='flex items-start space-x-2'>
					<img
						alt=''
						src={"./Avatar.png"}
						width={26}
						height={25}
						className='sm:w-11 sm:h-10 '
					/>
					<div className='flex flex-col sm:space-y-2 items-start w-full'>
						<p className='text-sm text-white sm:text-2xl'>Julius Williams</p>
						<Star />
					</div>
				</div>
				<p className='text-xs sm:text-base sm:max-w-[560px] font-normal text-[#FFFFFF]/80 max-w-[297px] text-left'>
					I have never been the type that goes for holiday outside of my home
					for obvious reasons. But with this, my experience with haven travels
					and tours my perspertive have changed.
				</p>
			</div>
		</div>
	);
}

export default Testimonial;
