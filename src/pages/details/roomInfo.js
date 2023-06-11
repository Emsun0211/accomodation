const RoomInfo = ({ service }) => {
	return (
		<ul className='mt-5 sm:mt-3 pl-5 font-medium space-y-1 sm:space-y-0 text-sm list-disc text-[#969696] tracking-[0.007em] marker:text-[#969696]'>
			{service.map((s, idx) => (
				<li key={idx}>{s}</li>
			))}
			{/* <li>Karat: 18K.</li>
			<li>Dimensions: .</li>
			<li>Stone: Lab-Grown Diamond.</li>
			<li>Number of Stones: 5.</li>
			<li>Stone Carat: 5 x 0.05cts.</li>
			<li>Stone Setting Type: 4 prongs..</li>
			<li>Type: Colour: G-H Clarity: SI1+.</li>
			<li>Stone Shape: Brilliant.</li>
			<li>
				Length of chain: 450mm include 3 adjusters: 400mm, 420mm and 450mm
			</li> */}
		</ul>
	);
};

export default RoomInfo;
