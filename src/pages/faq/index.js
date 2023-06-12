import { useState } from "react";
import FAQCard from "./faqCard";
import { faqs } from "../../utils/faq";

const FAQ = () => {
	const [Open, setopen] = useState(false);
	const [clicked, setclicked] = useState("0");

	const handleToggle = (index) => {
		console.log(index);
		if (clicked === index) {
			return setclicked("0");
		}
		setclicked(index);
	};
	const textColor = Open ? "text-[#004DB3]" : "text-black";

	return (
		<div className='w-[100%]  mx-auto py-[3rem] relative'>
			<h2 className='text-center text-[26px] sm:text-[48px] leading-[55px] text-[#001534] font-Eina01Bold font-bold mb-[2rem]'>
				Frequently Asked Questions
			</h2>
			<div className='flex flex-col items-center justify-center mx-auto'>
				{faqs.map((faq, idx) => (
					<FAQCard
						faq={faq}
						key={idx}
						active={clicked === idx}
						onToggle={() => handleToggle(idx)}
					/>
				))}
			</div>
		</div>
	);
};

export default FAQ;
