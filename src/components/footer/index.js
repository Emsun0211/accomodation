// import Image from "next/image";
import React from "react";

function Footer() {
	return (
		<div className='mt-20 sm:mt-24 bg-black     '>
			<div className='flex flex-col text-[#FFFFFF]/60  items-start px-5 py-6 sm:px-[120px] sm:py-[52px] space-y-2 sm:space-y-6  '>
				<img
					src={"/Jewels.svg"}
					width={24}
					height={7}
					className='sm:w-[87px] sm:h-[24px]'
					alt=''
				/>
				<div className='flex flex-row justify-between   w-full'>
					<div className='flex flex-col space-y-2 sm:space-y-6'>
						<h3 className='font-bold text-[#FFFFFF]/60 text-[8px] sm:text-sm'>
							Home
						</h3>
						<div className='flex flex-col space-y-1'>
							<p className='text-[#FFFFFF]/60 text-[8px] sm:text-sm font-normal'>
								Products
							</p>
							<p className='text-[#FFFFFF]/60 text-[8px] sm:text-sm font-normal'>
								About
							</p>
							<p className='text-[#FFFFFF]/60 text-[8px] sm:text-sm font-normal'>
								Testimonials
							</p>
						</div>
					</div>
					<div className='flex flex-col space-y-2 sm:space-y-6'>
						<h3 className='font-bold text-[#FFFFFF]/60 text-[8px] sm:text-sm'>
							Categories
						</h3>
						<div className='flex flex-col space-y-1'>
							<p className='text-[#FFFFFF]/60 text-[8px] sm:text-sm font-normal'>
								Standard
							</p>
							<p className='text-[#FFFFFF]/60 text-[8px] sm:text-sm font-normal'>
								Deluxe
							</p>
							<p className='text-[#FFFFFF]/60 text-[8px] sm:text-sm font-normal'>
								Suite
							</p>
							<p className='text-[#FFFFFF]/60 text-[8px] sm:text-sm font-normal'>
								Executive
							</p>
						</div>
					</div>
					<div className='flex flex-col space-y-2 sm:space-y-6'>
						<h3 className='font-bold text-[#FFFFFF]/60 text-[8px] sm:text-sm'>
							Contact us
						</h3>
						<div className='flex flex-col space-y-1'>
							<p className='text-[#FFFFFF]/60 text-[8px] max-w-[76px] sm:max-w-none sm:text-sm font-normal'>
								Email: enquiries@jewel.com
							</p>
							<p className='text-[#FFFFFF]/60 text-[8px] max-w-[76px] sm:max-w-none sm:text-sm font-normal'>
								Phone: +2348031234567
							</p>
							<p className='text-[#FFFFFF]/60 text-[8px] max-w-[76px] sm:max-w-none sm:text-sm font-normal'>
								WhatsApp: +2348031234567
							</p>
							<p className='text-[#FFFFFF]/60 text-[8px] max-w-[76px] sm:max-w-none sm:text-sm font-normal'>
								Instagram: Jewel_storez
							</p>
						</div>
					</div>
					<div className='flex flex-col space-y-2 sm:space-y-6'>
						<h3 className='font-bold text-[#FFFFFF]/60 text-[8px] sm:text-sm'>
							Address
						</h3>
						<div className='flex flex-col space-y-1'>
							<p className='text-[#FFFFFF]/60 text-[8px] max-w-[75px] sm:max-w-[150px] sm:text-sm font-normal'>
								14b Shanty town Surulere, Lagos Nigeria
							</p>
						</div>
					</div>
				</div>
				<hr className='border-[#969696] w-full' />

				<div className='flex flex-row  justify-between w-full'>
					<div className='flex items-center sm:items-end justify-center space-x-1'>
						<p className='text-[#FFFFFF]/60 text-[8px] sm:text-sm font-normal max-w-[32px] sm:max-w-none'>
							2022 Jewels<span className='hidden sm:inline'>, Inc.</span>
						</p>
						<p className='text-[#FFFFFF]/60 text-[8px] sm:text-base font-normal '>
							.
						</p>
						<p className='text-[#FFFFFF]/60 text-[8px] sm:text-sm font-normal'>
							Privacy
						</p>
						<p className='text-[#FFFFFF]/60 text-[8px] sm:text-base font-normal'>
							.
						</p>
						<p className='text-[#FFFFFF]/60 text-[8px] sm:text-sm font-normal'>
							Terms
						</p>
						<p className='text-[#FFFFFF]/60 text-[8px] sm:text-base font-normal'>
							.
						</p>
						<p className='text-[#FFFFFF]/60 text-[8px] sm:text-sm font-normal'>
							Sitemap
						</p>
					</div>

					<div className='flex items-center justify-center space-x-1 sm:space-x-2'>
						<div className='flex items-center justify-center space-x-[2px] sm:space-x-2'>
							<img
								alt=''
								src={"/web.svg"}
								width={8}
								height={8}
								className='sm:w-[14px] sm:h-[14px]'
							/>
							<p className='text-[#FFFFFF]/60 text-[8px] sm:text-sm font-normal underline '>
								English (US)
							</p>
						</div>
						<div className='flex items-center justify-center space-x-[2px]'>
							<img
								alt=''
								src={"/dollar.svg"}
								width={5}
								height={5}
								className='sm:w-[14px] sm:h-[14px]'
							/>
							<p className='text-[#FFFFFF]/60 text-[8px] sm:text-sm font-normal'>
								USD
							</p>
						</div>
					</div>
					<div className='flex space-x-2 sm:space-x-3'>
						<img
							alt=''
							src={"/facebook.svg"}
							width={8}
							height={8}
							className='sm:w-[18px] sm:h-[18px]'
						/>
						<img
							alt=''
							src={"/twitter.svg"}
							width={8}
							height={8}
							className='sm:w-[18px] sm:h-[18px]'
						/>
						<img
							alt=''
							src={"/instagram.svg"}
							width={8}
							height={8}
							className='sm:w-[18px] sm:h-[18px]'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
