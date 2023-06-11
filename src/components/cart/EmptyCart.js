import React from "react";
import { Link } from "react-router-dom";

function EmptyCart() {
	return (
		<div className='max-w-[1350px] mx-auto h-[60vh] grid place-items-center'>
			<div className=''>
				<img
					alt='item'
					src='/shopping_bag2.svg'
					className='w-[70px] h-[89px] mx-auto'
					width={72}
					height={22}
				/>

				<p className='my-8 text-[16px] text-[hsla(0,0%,0%,0.8)]'>
					Your bag is Empty.
				</p>
				<Link to={"/"}>
					<button
						type='submit'
						className='text-center mb-8 w-full py-3 px-4 bg-[hsla(0,0%,0%,1)] text-[hsla(0,0%,100%,1)] text-sm'>
						Go to home
					</button>
				</Link>
			</div>
		</div>
	);
}

export default EmptyCart;
