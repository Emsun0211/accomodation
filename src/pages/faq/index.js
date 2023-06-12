import { useState } from "react";
import FAQCard from "./faqCard";
import { cancellationPolicy, faqs } from "../../utils/faq";

const FAQ = () => {
	const [clicked, setclicked] = useState("0");

	const handleToggle = (index) => {
		console.log(index);
		if (clicked === index) {
			return setclicked("0");
		}
		setclicked(index);
	};

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

			<div className='flex flex-col items-center justify-center mx-auto mt-10'>
				<h2 className='text-center text-[26px] sm:text-[48px] leading-[55px] text-[#001534] font-Eina01Bold font-bold mb-[2rem]'>
					Cancellation Policy
				</h2>
				<p className='border-[#EEEEEE] border-[1px] mb-[1rem]  relative p-[1rem] w-[90%] sm:w-[500px] lg:w-[700px] bg-[#ffffff] sm:rounded-[13px] rounded-[8px] shadow-xs'>
					We understand that plans can change unexpectedly. Our cancellation
					policy is designed to provide flexibility while also ensuring fairness
					to all guests. Please take note of the following guidelines:
				</p>
				<div>
					{cancellationPolicy.map((policy, idx) => (
						<li
							key={idx}
							className='border-[#EEEEEE] border-[1px] mb-[1rem]  relative p-[1rem] w-[90%] sm:w-[500px] lg:w-[700px] bg-[#ffffff] sm:rounded-[13px] rounded-[8px] shadow-xs mx-auto'>
							{policy}
						</li>
					))}
				</div>
			</div>
		</div>
	);
};

export default FAQ;
