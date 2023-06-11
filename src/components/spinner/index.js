import React from "react";
// import Image from "next/image";

const Spinner = () => {
	return (
		<div
			className='bg-black bg-opacity-50 flex items-center justify-center
      fixed left-0 right-0 bottom-0 top-0 z-50'>
			<div>
				<img
					src='/spinner.svg'
					alt='loading...'
					width={120}
					height={20}
					className='h-24'
				/>
			</div>
		</div>
	);
};

export default Spinner;
