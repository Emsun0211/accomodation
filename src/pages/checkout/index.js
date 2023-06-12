import { useContext, useEffect, useState } from "react";
// import { CartContext } from "@/context/cart/CartContext";

import { formatter } from "../../utils/data";
import { Link } from "react-router-dom";
import Userdetails from "../../components/userdetails";
import { CartContext } from "../../context/cart/CartContext";

const Checkout = () => {
	const { cart, cartTotal, vat } = useContext(CartContext);

	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [days, setDays] = useState();
	const [total, setTotal] = useState(null);
	const [checkOutOpen, setCheckOutOpen] = useState(false);

	// Perform localStorage action
	useEffect(() => {
		let total = days > 0 ? (cartTotal - vat) * Math.round(days) : cartTotal;
		setTotal(total);
	}, [cartTotal, days, vat]);

	return (
		<div className='mt-3 px-5 max-w-[1350px] mx-auto'>
			<div>
				<Link
					to={"/cart"}
					className='flex items-center gap-x-1 cursor-pointer w-[76.85px] md:w-[120px]  h-[71px] md:h-[100px]'>
					<img
						alt='arrow-back'
						src={"/arrow_back.svg"}
						width={22}
						height={20}
						className=''
					/>

					<h3 className='text-sm font-medium'>Cart</h3>
				</Link>

				{/* flex container */}
				<div className='mt-3 md:grid grid-cols-[0.8fr,1.2fr] items-start gap-x-4 max-w-6xl mx-auto'>
					{/* product summary */}
					<div className=' px-2 py-6 border border-[hsla(0,0%,59%,0.3)] order-2'>
						<h3 className='text-xl font-medium text-[hsla(0,0%,0%,0.6)]'>
							Booking summary
						</h3>

						{cart.map((item, idx) => {
							let price = item.qty * item?.price;
							return (
								<div
									key={idx}
									className='flex justify-between items-start mt-4 gap-x-4'>
									<div className='w-[100px] h-[100px] bg-[#D5D5D5]'>
										<img
											alt=''
											src={item?.img[0]}
											width={72}
											height={20}
											className='w-full h-full  mx-auto'
										/>
									</div>

									<div className='text-[hsla(0,0%,59%,1)] tracking-[0.008em]'>
										<h4 className='pb-1 text-sm'>{item?.name}</h4>
										<p className='text-xs'>{item?.short_description}</p>
									</div>
									<p className='self-center text-xs text-[#000000]/80 tracking-[0.008em]'>
										{formatter.format(price)}
										{/* <span className='text-[8px] text-[#000000]/60'>.00</span> */}
									</p>
								</div>
							);
						})}

						<div className='w-full h-[1px] mt-6 bg-[hsla(0,0%,59%,0.3)]'></div>

						<div>
							<div className='mt-4 flex justify-between'>
								<h4 className='text-[hsla(0,0%,59%,1)] text-xs tracking-[0.008em]'>
									VAT
								</h4>
								<p className='self-end text-xs text-[#000000]/80 tracking-[0.008em]'>
									{formatter.format(vat)}
									<span className='text-[8px] text-[#000000]/60'>.00</span>
								</p>
							</div>
						</div>

						<div className='w-full h-[1px] mt-6 bg-[hsla(0,0%,59%,0.3)]'></div>

						{/* TOTAL */}
						<div className='mt-4 flex justify-between'>
							<h4 className='text-[hsla(0,0%,0%,0.8)] font-semibold text-xs tracking-[0.008em]'>
								Total
							</h4>
							<p className='self-end text-xs text-[#000000]/80 tracking-[0.008em]'>
								{formatter.format(cartTotal - vat)}
								<span className='text-[8px] text-[#000000]/60'>.00</span>
							</p>
						</div>
					</div>

					{/* form div */}

					<div className='mt-8 md:mt-0 px-2 py-6 border border-[hsla(0,0%,59%,0.3)]'>
						<h3 className='text-xl font-medium text-[hsla(0,0%,0%,0.6)]'>
							Customer's details
						</h3>

						{/* <ShippingAddress /> */}
						<Userdetails
							startDate={startDate}
							endDate={endDate}
							setEndDate={setEndDate}
							setStartDate={setStartDate}
							setDays={setDays}
							setCheckOutOpen={() => setCheckOutOpen(true)}
						/>
					</div>
				</div>
			</div>
			{/* <div>
				<p>
					Kindly note that the total amount to be paid for{" "}
					{`${days > 0 ? Math.round(days) : 1}`} day(s) is{" "}
					{`${formatter.format(total)} `}
				</p>
			</div> */}

			{checkOutOpen && (
				<Link to={"/"}>
					<div className='fixed top-0 right-0 left-0  h-full w-full z-40'>
						{/* <div>Go back to product page</div> */}
						<div className='flex justify-center flex-col w-[100%] mx-auto h-full items-center gap-[1rem] bg-white px-4 text-center '>
							<img src={"/Logo.svg"} width='200' height='200' alt='logo' />
							<h3>Thank you for your patience, your order has been recieved</h3>
							<p>
								Kindly note that the total amount to be paid for{" "}
								{`${days > 0 ? Math.round(days) : 1}`} day(s) is{" "}
								{`${formatter.format(total)} `}
							</p>
							<p>
								You are advised to pay at least 10% of this amount in order to
								make your reservation
							</p>
							<Link to={"/"}>
								<button className='text-center mt-4 w-full py-3 px-4 bg-[hsla(0,0%,0%,1)] text-[hsla(0,0%,100%,1)] text-xs font-medium'>
									Go Back Home
								</button>
							</Link>
						</div>
					</div>
				</Link>
			)}
		</div>
	);
};

export default Checkout;
