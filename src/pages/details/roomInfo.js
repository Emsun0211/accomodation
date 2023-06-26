const RoomInfo = ({ service }) => {
	return (
		<ul className='mt-5 sm:mt-3 pl-5 font-medium space-y-1 sm:space-y-0 text-sm list-disc text-[#969696] tracking-[0.007em] marker:text-[#969696]'>
			{service.map((s, idx) => (
				<li key={idx}>{s}</li>
			))}
		</ul>
	);
};

export default RoomInfo;
