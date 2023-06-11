import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// import { useRouter } from "next/router";

const Userdetails = (props) => {
	const route = useNavigate();
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		homeAddress: "",
		state: "",
		city: "",
	});

	const {
		startDate,
		endDate,
		setEndDate,
		setStartDate,
		setDays,
		setCheckOutOpen,
	} = props;

	useEffect(() => {
		setDays((endDate - startDate) / 86400000);
	}, [endDate, startDate, setDays]);

	const [value, setValue] = useState();

	const { firstName, lastName, email, phone, homeAddress, state, city } =
		formData;

	const handleChange = (e) => {
		// e.preventDefault()
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setCheckOutOpen();
	};

	return (
		<>
			<form className='mt-3' onSubmit={handleSubmit}>
				<div>
					<div>
						<p className='text-xs md:text-sm font-medium text-[hsla(0,0%,59%,1)] mb-2'>
							First name (required)
						</p>
						<input
							required
							type='text'
							id='firstName'
							value={firstName}
							onChange={handleChange}
							className='w-full mb-4 bg-transparent border-[1.5px] border-[hsla(0,0%,59%,0.6)] py-3 px-4 focus:ring-0 
        focus:border-[hsla(0,0%,59%,0.6)] focus:bg-transparent font-medium text-sm text-[hsla(0,0%,0%,1)] sm:text-lg'
						/>
					</div>

					<div>
						<p className='text-xs md:text-sm font-medium text-[hsla(0,0%,59%,1)] mb-2'>
							Last name (required)
						</p>
						<input
							required
							type='text'
							id='lastName'
							value={lastName}
							onChange={handleChange}
							className='w-full mb-4 bg-transparent border-[1.5px] border-[hsla(0,0%,59%,0.6)] py-3 px-4 focus:ring-0 
        focus:border-[hsla(0,0%,59%,0.6)] focus:bg-transparent text-sm text-[hsla(0,0%,0%,1)] sm:text-lg'
						/>
					</div>
				</div>

				<p className='text-xs md:text-sm font-medium text-[hsla(0,0%,59%,1)] mb-2'>
					Email address (required)
				</p>
				<input
					required
					type='email'
					placeholder='example@email.com'
					id='email'
					value={email}
					onChange={handleChange}
					className='w-full mb-5 bg-transparent border-[1.5px] border-[hsla(0,0%,59%,0.6)] py-3 px-4 focus:ring-0 
        focus:border-[hsla(0,0%,59%,0.6)] focus:bg-transparent text-sm text-[hsla(0,0%,0%,1)] sm:text-lg'
				/>

				{/* select phone number */}
				<div className='mb-3'>
					<PhoneInput
						country={"ng"}
						value={value}
						placeholder='Enter phone number'
						onChange={setValue}
						inputStyle={{
							borderColor:
								props.touched && props.error && "hsla(0, 0%, 59% ,0.6)",
							width: "100%",
							background: "transparent",
							paddingTop: "1rem",
							paddingBottom: "1rem",
						}}
					/>
				</div>

				<div className='flex justify-between items-center space-x-5'>
					<div>
						<p className='text-xs md:text-sm font-medium text-[hsla(0,0%,59%,1)] mb-2'>
							Start Date
						</p>
						<DatePicker
							selected={startDate}
							onChange={(date) => setStartDate(date)}
							className='w-full mb-4 bg-transparent border-[1.5px] border-[hsla(0,0%,59%,0.6)] py-3 px-4 focus:ring-0 
                        focus:border-[hsla(0,0%,59%,0.6)] focus:bg-transparent  text-sm text-[hsla(0,0%,0%,1)] sm:text-lg'
						/>
					</div>
					<div>
						<p className='text-xs md:text-sm font-medium text-[hsla(0,0%,59%,1)] mb-2'>
							End Date
						</p>
						<DatePicker
							selected={endDate}
							onChange={(date) => setEndDate(date)}
							className='w-full mb-4 bg-transparent border-[1.5px] border-[hsla(0,0%,59%,0.6)] py-3 px-4 focus:ring-0 
                        focus:border-[hsla(0,0%,59%,0.6)] focus:bg-transparent  text-sm text-[hsla(0,0%,0%,1)] sm:text-lg'
						/>
					</div>
				</div>

				<p className='text-xs md:text-sm font-medium text-[hsla(0,0%,59%,1)] mb-2'>
					Number of Guests
				</p>
				<input
					required
					type='text'
					placeholder='Please select'
					id='state'
					value={state}
					onChange={handleChange}
					className='w-full mb-4 bg-transparent border-[1.5px] border-[hsla(0,0%,59%,0.6)] py-3 px-4 focus:ring-0 
        focus:border-[hsla(0,0%,59%,0.6)] focus:bg-transparent text-sm text-[hsla(0,0%,0%,0.6)] sm:text-lg'
				/>

				<button
					// onClick={setCheckOutOpen}
					type='submit'
					className='text-center mt-4 w-full py-3 px-4 bg-[hsla(0,0%,0%,1)] text-[hsla(0,0%,100%,1)] text-xs font-medium'>
					Book Now
				</button>
			</form>
		</>
	);
};

export default Userdetails;
