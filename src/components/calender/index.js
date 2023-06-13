import React, { useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import { CartContext } from "../../context/cart/CartContext";

function Calender({ setCalendar }) {
	// View Change
	const [activeStartDate, setActiveStartDate] = useState(new Date());
	const [selectedDates, setSelectedDates] = useState([]);
	const [days, setDays] = useState(1);
	const { addNumberOfDays } = useContext(CartContext);

	const handleNextClick = () => {
		// Update the active start date to the next month
		setActiveStartDate((prevDate) => {
			const nextMonth = new Date(
				prevDate.getFullYear(),
				prevDate.getMonth() + 1
			);
			return nextMonth;
		});
	};

	const handlePrevClick = () => {
		// Update the active start date to the previous month
		setActiveStartDate((prevDate) => {
			const prevMonth = new Date(
				prevDate.getFullYear(),
				prevDate.getMonth() - 1
			);
			return prevMonth;
		});
	};

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

		// Check if the selected date already exists in the selectedDates array
		// const index = selectedDates.findIndex(
		// 	(selectedDate) => selectedDate.getTime() === date.getTime()
		// );

		// if (index > -1) {
		// 	// If the selected date is already in the array, remove it to deselect
		// 	const updatedDates = [...selectedDates];
		// 	updatedDates.splice(index, 1);
		// 	setSelectedDates(updatedDates);
		// } else {
		// 	// If the selected date is not in the array, add it to select
		// 	setSelectedDates([...selectedDates, date]);
		// }
	};

	// Disabled Dates

	const bookedDates = [
		new Date(2023, 6, 15),
		new Date(2023, 6, 16),
		new Date(2023, 6, 17),
		new Date(2023, 6, 20),
		new Date(2023, 6, 25),
	];

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
