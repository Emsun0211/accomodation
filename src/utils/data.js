export const rooms = [
	{
		id: 1,
		name: "Radiant Elegance",
		img: [
			"https://res.cloudinary.com/dxz1djlc2/image/upload/v1686396443/accomodation/acc2_xnmqgc.jpg",
		],
		qty: 1,
		short_description: "Elegant Always",
		description:
			"Immerse yourself in the radiant charm of this elegantly designed apartment. With its tasteful decor and graceful ambiance, it sets the stage for a truly luxurious experience.",
		service: [
			"Housekeeping",
			"In-Room Dining",
			"Concierge Services",
			"Laundry and Dry Cleaning",
			"Wake-Up Calls",
			"Turndown Service",
			"Room Amenities",
			"Entertainment Services",
		],
		price: 120000,
		type: "Standard",
	},
	{
		id: 2,
		name: "Opulent Oasis",
		img: [
			"https://res.cloudinary.com/dxz1djlc2/image/upload/v1686396470/accomodation/acc3_alzof4.jpg",
		],
		qty: 1,
		short_description: "Live in Comfort",
		description:
			"Indulge in the lavish comforts of this opulent oasis, where every corner exudes sophistication and style, providing a luxurious escape from the ordinary.",
		service: [
			"Housekeeping",
			"In-Room Dining",
			"Concierge Services",
			"Laundry and Dry Cleaning",
			"Wake-Up Calls",
			"Turndown Service",
			"Room Amenities",
			"Entertainment Services",
		],
		price: 120000,
		type: "Executive",
	},
	{
		id: 3,
		name: "Tranquil Escapes",
		img: [
			"https://res.cloudinary.com/dxz1djlc2/image/upload/v1686396525/accomodation/acc5_dcmm0m.jpg",
		],
		qty: 1,
		short_description: "Natures provides it all",
		description:
			"Find serenity in this serene apartment, where the gentle hues, cozy furnishings, and lush green surroundings create an idyllic retreat for relaxation and rejuvenation.",
		service: [
			"Housekeeping",
			"In-Room Dining",
			"Concierge Services",
			"Laundry and Dry Cleaning",
			"Wake-Up Calls",
			"Turndown Service",
			"Room Amenities",
			"Entertainment Services",
		],
		price: 120000,
		type: "Suite",
	},
	{
		id: 4,
		name: "Ethereal Haven",
		img: [
			"https://res.cloudinary.com/dxz1djlc2/image/upload/v1686396426/accomodation/acc1_yiqmwc.jpg",
		],
		qty: 1,
		short_description: "Beauty that brings peace",
		description:
			"Experience the ethereal beauty of this haven, where soft tones, delicate textures, and a serene atmosphere transport you to a realm of pure tranquility and grace.",
		service: [
			"Housekeeping",
			"In-Room Dining",
			"Concierge Services",
			"Laundry and Dry Cleaning",
			"Wake-Up Calls",
			"Turndown Service",
			"Room Amenities",
			"Entertainment Services",
		],
		price: 120000,
		type: "Deluxe",
	},
];

export const formatter = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
});
