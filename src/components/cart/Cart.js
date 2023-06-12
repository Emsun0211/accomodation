import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/cart/CartContext";
import { formatter } from "../../utils/data";

const Cart = () => {
	// const [quantity, setQuantity] = useState(1);
	// Formater for price

	const {
		cart,
		removeFromCart,
		increaseQty,
		decreaseQty,
		cartTotal,
		setCartTotal,
	} = useContext(CartContext);
	const [subTotal, setsubTotal] = useState(0);
	const [checkOpen, setCheckOpen] = useState(false);
	console.log(cart);

	const handleQty = (item, type) => {
		if (type === "INCREASE") {
			increaseQty(item);
		} else if (type === "DECREASE") {
			decreaseQty(item);
		}
	};

	// useEffect(() => {
	// 	setsubTotal(
	// 		cart.reduce((acc, curr) => acc + Number(curr?.price) * curr.qty, 0)
	// 	);
	// }, [cart]);
	useEffect(() => {
		setCartTotal();
	}, [cart]);

	console.log(cartTotal);

	// JSON.stringify(localStorage.setItem("cartTotal", subTotal));

	return (
		<div className='max-w-4xl  mx-auto px-5 mt-12 sm:mt-24 mb-48 w-full '>
			<div>
				{/* title */}
				<div className='flex items-center gap-x-1 cursor-pointer'>
					<img
						alt=''
						src={"/arrow_back.svg"}
						width={22}
						height={20}
						className=''
					/>

					<h3 className='text-sm font-medium'>Shopping bag</h3>
				</div>

				{/* cart items */}
				<div className='mt-7'>
					{/* item */}
					{cart.map((item) => {
						console.log(item.qty);
						return (
							<div
								key={item.id}
								className=' flex justify-between items-start px-2 py-6
        gap-x-4 border border-[hsla(0,0%,59%,0.3)]'>
								{/* image div */}
								<div className='w-[200px] h-[200px] bg-[#D5D5D5]'>
									<img
										alt='product '
										src={item?.img[0]}
										width={72}
										height={20}
										className='w-full h-full  mx-auto'
									/>
								</div>

								{/* item details */}
								<div className='-start'>
									<h3 className=''>{item?.name}</h3>
									<p className=' pr-3 text-xs tracking-[0.08em] text-[hsla(0,0%,59%,1)]'>
										{item?.type}
									</p>
									<p className='mt-1 text-sm text-[#000000]/80 tracking-[0.008em]'>
										{formatter.format(item?.price)}
										{/* <span className='text-xs text-[#000000]/60'>.00</span> */}
									</p>

									<div className=' mt-1'>
										<h4 className='text-sm'>Quantity:</h4>
										<div
											className='flex justify-center gap-x-4 mt-1 border-[1.5px] max-w-[80px] w-full border-[hsla(0,0%,59%,0.6)]
							 py-1 px-1'>
											<button
												// onClick={() =>
												// 	setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
												// }
												onClick={() => handleQty(item, "DECREASE")}>
												-
											</button>

											{item.qty}

											<button onClick={() => handleQty(item, "INCREASE")}>
												+
											</button>
										</div>
									</div>
								</div>
								<button onClick={() => removeFromCart(item?.id)}>
									<img
										alt=''
										src={"/delete.svg"}
										width={12}
										height={12}
										className='cursor-pointer'
									/>
								</button>
							</div>
						);
					})}

					{/* Product summary */}

					<div className='mt-7 px-2 py-6 border border-[hsla(0,0%,59%,0.3)]'>
						<h3 className='text-sm font-medium text-[hsla(0,0%,0%,0.6)]'>
							Booking summary
						</h3>

						{cart.map((item) => {
							let price = item.qty * item?.price;
							return (
								<div className='mt-4 flex justify-between' key={item.id}>
									<div className='text-[hsla(0,0%,59%,1)] text-xs tracking-[0.008em]'>
										<h4 className='pb-1'>{item?.name}</h4>
										{/* <p>{item?.short_description}</p> */}
									</div>
									<p className='self-end text-xs text-[#000000]/80 tracking-[0.008em]'>
										{formatter.format(price)}
										<span className='text-[8px] text-[#000000]/60'>.00</span>
									</p>
								</div>
							);
						})}
						<div className='w-full h-[1px] mt-6 bg-[hsla(0,0%,59%,0.3)]'></div>

						<div>
							<div className='mt-4 flex justify-between'>
								<h4 className='text-[hsla(0,0%,59%,1)] text-xs tracking-[0.008em]'>
									Shipping
								</h4>
								<p className='self-end text-xs text-[#000000]/80 tracking-[0.008em]'>
									$0
									<span className='text-[8px] text-[#000000]/60'>.00</span>
								</p>
							</div>
							<div className='mt-4 flex justify-between'>
								<h4 className='text-[hsla(0,0%,59%,1)] text-xs tracking-[0.008em]'>
									VAT
								</h4>
								<p className='self-end text-xs text-[#000000]/80 tracking-[0.008em]'>
									$0
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
								{formatter.format(cartTotal)}
								<span className='text-[8px] text-[#000000]/60'>.00</span>
							</p>
						</div>

						<div className='w-full h-[1px] mt-6 bg-[hsla(0,0%,59%,0.3)]'></div>
						<Link to={"/checkout"}>
							<button
								// onClick={() => setCheckOpen(true)}

								className='text-center mt-8 w-full py-3 px-4 bg-[hsla(0,0%,0%,1)] text-[hsla(0,0%,100%,1)] text-xs font-semibold'>
								Proceed to checkout
							</button>
						</Link>

						{/* </Link> */}

						{/* shipment */}
						<div className='mt-8 flex flex-col gap-y-3'>
							<div className='flex items-start gap-x-2'>
								<img
									alt=''
									src={"/local_shipping.svg"}
									width={22}
									height={20}
									className='mt-1 h-6'
								/>
								<div>
									<h4 className='text-sm tracking-[0.007em] text-[#000000]'>
										Note:
									</h4>
									<p className='text-[#969696] tracking-[0.007em] text-xs'>
										Amount above is calculated for 24hrs
									</p>
								</div>
							</div>

							<div className='flex items-start gap-x-2'>
								<img
									alt=''
									src={"/verified_user.svg"}
									width={18}
									height={20}
									className='mt-1 h-6'
								/>
								<div>
									<h4 className='text-sm tracking-[0.007em] text-[#000000]'>
										100% secured
									</h4>
									<p className='text-[#969696] tracking-[0.007em] text-xs'>
										Maximum Security
									</p>
								</div>
							</div>

							<div className='flex items-start gap-x-2'>
								<img
									alt=''
									src={"/military_tech.svg"}
									width={18}
									height={10}
									className='mt-1 h-6'
								/>
								<div>
									<h4 className='text-sm tracking-[0.007em] text-[#000000]'>
										Top rated on trustpilot
									</h4>
									<p className='text-[#969696] tracking-[0.007em] text-xs'>
										Our customers rate us above others
									</p>
								</div>
							</div>

							<div className='flex items-start gap-x-2'>
								<img
									alt=''
									src={"/support_agent.svg"}
									width={18}
									height={12}
									className='mt-1 h-6'
								/>
								<div>
									<h4 className='text-sm tracking-[0.007em] text-[#000000]'>
										Contact us
									</h4>
									<p className='text-[#969696] tracking-[0.007em] text-xs'>
										Have you got a question? we’re happy to help
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
