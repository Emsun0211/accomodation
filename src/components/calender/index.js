import React, { useContext, useEffect, useMemo, useState } from "react";
import Calendar from "react-calendar";
import { CartContext } from "../../context/cart/CartContext";

function Calender({ setCalendar }) {
	// View Change
	const [selectedDates, setSelectedDates] = useState([]);
	const [days, setDays] = useState(1);
	const { addNumberOfDays } = useContext(CartContext);

	// Date change event

	const handleDateChange = (date) => {
		// // Check if there are already two dates selected
		if (selectedDates.length === 2) {
			// If two dates are already selected, clear the selection and set the new date as the start of the range
			setSelectedDates([date]);
		} else if (selectedDates.length === 1) {
			// If one date is already selected, set the new date as the end of the range
			setSelectedDates([selectedDates[0], date]);
		} else {
			// If no dates are selected, set the new date as the start of the range
			setSelectedDates([date]);
		}

		bookedDates.push(date);
	};

	// Disabled Dates

	const bookedDates = useMemo(
		() => [
			new Date(2023, 6, 15),
			new Date(2023, 6, 16),
			new Date(2023, 6, 17),
			new Date(2023, 6, 18),
			new Date(2023, 6, 19),
			new Date(2023, 6, 21),
			new Date(2023, 6, 20),
			new Date(2023, 6, 25),
		],
		[]
	);

	// console.log(bookedDates);

	const isDateDisabled = (date) => {
		const today = new Date();

		// Check if the date is included in the bookedDates array
		return (
			bookedDates.some(
				(bookedDate) =>
					new Date(bookedDate).toDateString() === date.toDateString()
			) || date < today
		);
	};

	const numberOfdaysDifference =
		selectedDates[1] === undefined || selectedDates[0] === undefined
			? 1
			: selectedDates[1] - selectedDates[0];

	useEffect(() => {
		setDays((selectedDates[1] - selectedDates[0]) / 86400000);

		addNumberOfDays(
			numberOfdaysDifference === 1 ? 1 : numberOfdaysDifference / 86400000
		);
	}, [setDays, selectedDates, days]);

	return (
		<div className='relative'>
			<button
				onClick={setCalendar}
				className='absolute top-2 right-2 p-1 rounded-full bg-red-400'>
				<img src='/close.svg' alt='' />
			</button>
			<Calendar
				// activeStartDate={activeStartDate}
				onChange={handleDateChange}
				value={selectedDates}
				tileDisabled={({ date }) => isDateDisabled(date)}
			/>
			{/* <button onClick={handleNextClick}>Next</button> */}
		</div>
	);
}

export default Calender;
