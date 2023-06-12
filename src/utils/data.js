export const rooms = [
	{
		id: 1,
		name: "Radiant Elegance",
		img: [
			"https://res.cloudinary.com/dxz1djlc2/image/upload/v1686600037/accomodation/newAccomodation/acc2-min_upy5ct.jpg",
			"https://res.cloudinary.com/dxz1djlc2/image/upload/v1686600302/accomodation/newAccomodation/acc12-min_rrumsi.jpg",
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
		price: 200,
		type: "Standard",
	},
	{
		id: 2,
		name: "Opulent Oasis",
		img: [
			"https://res.cloudinary.com/dxz1djlc2/image/upload/v1686600048/accomodation/newAccomodation/acc3-min_zsvzqt.jpg",
			"https://res.cloudinary.com/dxz1djlc2/image/upload/v1686600274/accomodation/newAccomodation/acc10-min_bu7bw0.jpg",
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
		price: 250,
		type: "Executive",
	},
	{
		id: 3,
		name: "Tranquil Escapes",
		img: [
			"https://res.cloudinary.com/dxz1djlc2/image/upload/v1686600221/accomodation/newAccomodation/acc8-min_fsklxw.jpg",
			"https://res.cloudinary.com/dxz1djlc2/image/upload/v1686600287/accomodation/newAccomodation/acc10-min_ntpiqd.jpg",
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
		price: 300,
		type: "Suite",
	},
	{
		id: 4,
		name: "Ethereal Haven",
		img: [
			"https://res.cloudinary.com/dxz1djlc2/image/upload/v1686600124/accomodation/newAccomodation/acc6-min_qgbyh5.jpg",
			"https://res.cloudinary.com/dxz1djlc2/image/upload/v1686600252/accomodation/newAccomodation/acc9-min_s885ym.jpg",
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
		price: 500,
		type: "Deluxe",
	},
];

export const formatter = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
});
