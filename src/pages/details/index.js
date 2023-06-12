import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
import Spinner from "../../components/spinner";

// import { useRouter } from "next/router";
import { useContext } from "react";
import { CartContext } from "../../context/cart/CartContext";
// import ProductInfo from "@/components/ProductInfo/ProductInfo";
import Star from "../../components/start";
import { Link, useNavigate, useParams } from "react-router-dom";
import { rooms } from "../../utils/data";
import RoomInfo from "./roomInfo";
// import Cookies from "js-cookie";

const RoomDetails = () => {
	const { roomid } = useParams();
	console.log(roomid);
	const navigate = useNavigate();

	const [selectedImg, setSelectedImg] = useState("");
	const [product, setProduct] = useState(null);
	const [quantity, setQuantity] = useState(1);

	const room = rooms[Number(roomid) - 1];
	console.log(room);
	console.log(rooms);

	// cart Functionality starts here
	const { addToCart, cart } = useContext(CartContext);

	const handleAddToCart = (room) => {
		addToCart(room);
	};

	const handleBookNow = (room) => {
		addToCart(room);
		navigate("/cart");
	};
	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	// useEffect(() => {
	// 	const fetchSingleProduct = async () => {
	// 		setLoading(true);
	// 		const product = await fetch(
	// 			`https://jewels-server.onrender.com/api/products/${productId}?populate=*`
	// 		);
	// 		const productJson = await product.json();
	// 		setProduct(productJson.data);
	// 		setLoading(false);
	// 	};
	// 	fetchSingleProduct();
	// }, [productId]);

	// if (loading) {
	// 	return <Spinner />;
	// }

	return (
		<div className='max-w-[1350px] grid sm:grid-cols-[0.4fr,1.6fr] gap-x-2 items-start sm:mt-0 px-4 mx-auto'>
			{/* left hand side */}
			<div className='mt-8'>
				<div className='flex items-center gap-x-1 cursor-pointer mt-8'>
					<Link to={"/"}>
						<img
							alt=''
							src={"/arrow_back.svg"}
							width={22}
							height={20}
							className=''
						/>
					</Link>

					<h3 className='text-sm font-medium'>Home</h3>
				</div>

				<div className='hidden lg:block  mt-8 '>
					<div>
						<h2 className='font-bold text-xl'>{room.type}</h2>
					</div>

					<div
						className='
					 flex   flex-col my-5 gap-y-5'>
						<div className='bg-[#E9E9E9] cursor-pointer w-[200px] h-[200px] border-[0.77336px] hover:bg-[hsla(255,7%,11%,0.3)] transition ease-in duration-300'>
							<img
								alt='item'
								src={room.img[0]}
								className='w-[100%] h-[100%] '
								width={72}
								height={20}
								onClick={(e) => setSelectedImg(room.img[0])}
							/>
						</div>

						<div className='bg-[#E9E9E9] cursor-pointer w-[200px] h-[200px] border-[0.77336px] hover:bg-[hsla(255,7%,11%,0.3)] transition ease-in duration-300'>
							<img
								alt='item'
								src={room.img[1]}
								className='w-[100%] h-[100%] mx-auto'
								width={72}
								height={20}
								onClick={(e) => setSelectedImg(room.img[1])}
							/>
						</div>
					</div>
				</div>
			</div>
			{/* middle */}
			<div className='grid sm:grid-cols-[1.2fr,0.8fr] gap-x-2 sm:gap-x-12'>
				<div>
					{/* image container */}
					<div className='relative max-w-[472px] mt-8 sm:mt-0 mx-auto h-[450px] sm:h-[520px] lg:h-[700px] flex items-start sm:items-start justify-center bg-[hsla(0,0%,84%,1)]'>
						<img
							alt='item'
							src={selectedImg !== "" ? selectedImg : room.img[0]}
							className='w-[100%] h-[100%]'
							width={72}
							height={20}
						/>
					</div>

					{/* quantity */}
				</div>

				{/* right hand side */}
				<div className=''>
					{/* product details */}

					<div className='mt-6 lg:mt-24'>
						<h3 className='text-lg font-normal text-[hsla(0,0%,0%,0.8)]'>
							{room.name}
						</h3>
						<p
							className='text-xs pt-3 sm:pt-1 tracking-[0.007rem] text-[#969696]
						 font-medium'>
							{room.short_description}
						</p>

						{/* ratings */}
						<div className='flex mt-1 items-center gap-x-2'>
							<Star />
							<p className='text-xs mt-1'>156 ratings</p>
						</div>

						<p className='mt-3 text-xl text-[#000000]/80 tracking-[0.008em]'>
							${room.price}
							<span className='text-sm text-[#000000]/60'>.00</span>
						</p>

						<div className='w-full h-[1px] mt-6 sm:mt-2 bg-[hsla(0,0%,59%,0.3)]'></div>
					</div>

					<div className='my-4 sm:my-2'>
						<h4>Quantity:</h4>
						<div
							className='flex justify-center gap-x-4 mt-1 border-[1.5px] max-w-[80px] w-full border-[hsla(0,0%,59%,0.6)]
							 py-1 px-1'>
							<button
								onClick={() =>
									setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
								}>
								-
							</button>

							{quantity}

							<button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
						</div>
					</div>

					<div className='w-full h-[1px] mt-6 sm:mt-2 bg-[hsla(0,0%,59%,0.3)]'></div>
					<div className='flex items-center space-x-5'>
						{cart.find((item) => item.id === room.id) ? (
							<button
								disabled
								onClick={() => handleAddToCart(room)}
								className={
									"text-center mt-8 sm:mt-4 w-full py-3 px-4 bg-slate-400 text-[hsla(0,0%,100%,1)] text-xs font-semibold"
								}>
								Add to bag
							</button>
						) : (
							<button
								onClick={() => handleAddToCart(room)}
								className={
									"text-center mt-8 sm:mt-4 w-full py-3 px-4 hover:bg-black/50 bg-[hsla(0,0%,0%,1)] text-[hsla(0,0%,100%,1)] text-xs font-semibold"
								}>
								Add to bag
							</button>
						)}

						<button
							onClick={() => handleBookNow(room)}
							className={
								"text-center mt-8 sm:mt-4 w-full py-3 px-4 bg-[hsla(0,0%,0%,1)]  hover:bg-black/50 text-[hsla(0,0%,100%,1)] text-xs font-semibold"
							}>
							Book Now
						</button>
					</div>
					<p className='text-sm lg:text-sm mt-6 sm:mt-3 text-[#969696] tracking-[0.007em]'>
						{room.description}
					</p>

					{/* <ProductInfo /> */}
					<RoomInfo service={room.service} />
				</div>
			</div>
		</div>
	);
};

export default RoomDetails;
