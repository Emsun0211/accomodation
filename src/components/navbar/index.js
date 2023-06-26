import React, { useEffect, useState } from "react";

import { useContext } from "react";
// import { CartContext } from "@/context/cart/CartContext";
// import { FavouriteContext } from "@/context/favourite/FavourteContext";
import { CartContext } from "../../context/cart/CartContext";

import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function NavBar() {
	const [nav, setNav] = useState(false);
	const router = useNavigate();
	// console.log(router.pathname)
	useEffect(() => {
		setNav(false);
	}, [router.pathname]);
	const handleNav = () => {
		setNav(!nav);
	};

	// Cart Functionality Starts here
	const cart = useContext(CartContext).cart;

	return (
		<div className=' sticky top-0 z-40 bg-[#F4F1D6] border-b border-b-[#969696] w-full overflow-x-hidden '>
			<div className=' container flex justify-between items-center  px-5 py-3 mx-auto'>
				<Link to={"/"}>
					<img alt='' src={"/Logo.svg"} width={72} height={20} />
				</Link>
				<div className='hidden sm:flex space-x-7 text-[#1c1b1f]/60 text-sm '>
					<Link to={"/"}>
						<p className='font-medium'>Home</p>
					</Link>
					<Link to={"/"}>
						<p className='font-medium'>Services</p>
					</Link>
					<Link to={"/"}>
						<p className='font-medium'>About</p>
					</Link>

					<Link to={"/contact"}>
						<p className='font-medium'>Contact</p>
					</Link>
					<Link to={"/faq"}>
						<p className='font-medium'>FAQ</p>
					</Link>
				</div>
				<div className='space-x-3 hidden sm:flex text-sm'>
					<Link href={"/login"}>
						<button className='font-medium py-2 px-9 text-white bg-black'>
							Login
						</button>
					</Link>
					<Link href={"/sign-up"}>
						<button className='font-medium py-2 px-9 border border-black'>
							Sign up
						</button>
					</Link>
				</div>
				<div className='space-x-8 flex'>
					<div className='flex space-x-4  items-center justify-center'>
						<Link href={"/"}>
							<img alt='' src={"/search.svg"} width={24} height={24} />
						</Link>
						<Link href={"/favourite"}>
							<img alt='' src={"/favorite.svg"} width={24} height={24} />
						</Link>
						<Link to={"/cart"} className='relative'>
							{cart.length ? (
								<span
									className='bg-black text-center flex items-center justify-center text-xs text-white rounded-full absolute top-0 right-0 p-1'
									style={{ width: "15px", height: "15px" }}>
									{cart.length}
								</span>
							) : null}
							<img alt='' src={"/shopping_bag.svg"} width={24} height={24} />
						</Link>
					</div>
					<div onClick={handleNav} className='sm:hidden '>
						{!nav && <img alt='' src={"/menu.svg"} width={24} height={24} />}
					</div>
				</div>
			</div>

			{/* Side menu */}

			<div
				className={
					!nav
						? "fixed right-[-100%] top-0 duration-700 bg-[#3C3C3C] ease-in-out h-full"
						: "fixed right-0 top-0 w-full duration-700   flex flex-row justify-start items-start ease-in-out h-full"
				}>
				<div
					className='w-[20%] bg-transparent/50 h-full '
					onClick={handleNav}></div>
				{/* right Side menu */}
				<div className='w-[80%] px-4 py-5 space-y-16 flex bg-[#3C3C3C] flex-col ease-in-out justify-start items-start  h-full'>
					<div className=' text-xl self-end text-white ' onClick={handleNav}>
						<img alt='' src={"/close.svg"} width={24} height={24} />
					</div>
					<div className='space-y-10 flex flex-col justify-start items-start'>
						<ul className='flex flex-col space-y-2 ' onClick={handleNav}>
							<Link to={"/"}>
								<li className='text-sm font-medium text-[#FFFFFF]/80 border-b border-b-[#969696]/30 py-4 w-[262px]'>
									Home{" "}
								</li>
							</Link>
							<Link to={"/"}>
								<li className='text-sm font-medium text-[#FFFFFF]/80 py-4 w-[262px] border-b border-b-[#969696]/30'>
									Services
								</li>
							</Link>
							<Link to={"/"}>
								<li className='text-sm font-medium text-[#FFFFFF]/80 py-4 w-[262px] border-b border-b-[#969696]/30'>
									About
								</li>
							</Link>
							<Link to={"/contact"}>
								<li className='text-sm font-medium text-[#FFFFFF]/80 py-4 w-[262px] border-b border-b-[#969696]/30'>
									Contact
								</li>
							</Link>

							<Link to={"/faq"}>
								<li className='text-sm font-medium text-[#FFFFFF]/80 py-4 w-[262px] border-b border-b-[#969696]/30'>
									FAQ
								</li>
							</Link>
						</ul>
						<div className='space-x-2 sm:hidden flex text-white text-sm justify-center items-center'>
							<Link href={"/login"}>
								<p className='font-medium py-2 px-[46px]  bg-black hover:bg-black/60'>
									Login
								</p>
							</Link>
							<Link href={"/sign-up"}>
								<p className='font-medium py-2 px-[39px] border border-black '>
									Sign up
								</p>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
