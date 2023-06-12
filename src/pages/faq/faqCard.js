/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const FAQCard = ({ active, onToggle, faq }) => {
	// const handleClick = (id) => {
	// 	console.log(id == idx);
	// 	if (id == idx) setopen(!Open);
	// };
	// const textColor = active ? "text-[#004DB3]" : "text-black";
	return (
		<div
			className='border-[#EEEEEE] border-[1px] mb-[1rem]  relative p-[1.5rem] w-[90%] sm:w-[500px] lg:w-[700px] bg-[#ffffff] sm:rounded-[13px] rounded-[8px] shadow-xs'
			onClick={onToggle}>
			<h3
				className={`text-[14px] md:text-[20px]  font-[700] text-[#001534] mb-[5px]`}>
				{faq.title}
			</h3>
			{active ? (
				<p className='text-[10px] md:text-[14px] text-[#A1A1A1] mb-[5px]'>
					{faq.body}
				</p>
			) : (
				""
			)}
			<span className='absolute top-0 right-0'>{active ? "+" : "-"}</span>
		</div>
	);
};

export default FAQCard;
