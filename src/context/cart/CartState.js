import { CartContext } from "./CartContext";
import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	ADDED_TO_CART,
	INCREASE_QTY,
	DECREASE_QTY,
	CART_TOTAL,
	VAT,
	NUMBER_OF_DAYS,
	NUMBER_OF_ROOMS,
	ADD_NUMBER_OF_DAYS,
	REMOVE_NUMBER_OF_DAYS,
	ADD_NUMBER_OF_ROOMS,
	REMOVE_NUMBER_OF_ROOMS,
} from "./CartActionType";
import { cartReducer } from "./CartReducer";
import { useReducer } from "react";

export const CartState = ({ children }) => {
	// const [cartItem, setCartItems] = useState(null);
	const initialState = {
		cart: [],
		cartTotal: 0,
		vat: 0,
		numberOfDays: 1,
		numberOfRooms: 1,
		isCompleted: false,
		isaddedToCart: false,
	};

	const [state, dispatch] = useReducer(cartReducer, initialState);
	console.log(state.numberOfDays);

	const addToCart = (cartObj) => {
		dispatch({ type: ADD_TO_CART, payload: cartObj });
	};

	const addedToCart = (cartObjId) => {
		dispatch({ type: ADDED_TO_CART, payload: cartObjId });
	};
	const removeFromCart = (cartObjId) => {
		dispatch({ type: REMOVE_FROM_CART, payload: cartObjId });
	};

	const increaseQty = (cartObjId) => {
		dispatch({ type: INCREASE_QTY, payload: cartObjId });
	};

	const decreaseQty = (cartObjId) => {
		dispatch({ type: DECREASE_QTY, payload: cartObjId });
	};
	const setCartTotal = () => {
		dispatch({ type: CART_TOTAL });
	};
	const setVatTotal = () => {
		dispatch({ type: VAT });
	};
	const addNumberOfDays = (days) => {
		dispatch({ type: ADD_NUMBER_OF_DAYS, payload: days });
	};
	const removeNumberOfDays = () => {
		dispatch({ type: REMOVE_NUMBER_OF_DAYS });
	};
	const addNumberOfRooms = () => {
		dispatch({ type: ADD_NUMBER_OF_ROOMS });
	};
	const removeNumberOfRooms = () => {
		dispatch({ type: REMOVE_NUMBER_OF_ROOMS });
	};

	return (
		<CartContext.Provider
			value={{
				cart: state.cart,
				isCompleted: state.isCompleted,
				cartTotal: state.cartTotal,
				addToCart,
				removeFromCart,
				dispatch,
				addedToCart,
				increaseQty,
				decreaseQty,
				setCartTotal,
				setVatTotal,
				vat: state.vat,
				numberOfDays: state.numberOfDays,
				numberOfRooms: state.numberOfRooms,
				addNumberOfDays,
				removeNumberOfDays,
				addNumberOfRooms,
				removeNumberOfRooms,
				...state,
			}}>
			{children}
		</CartContext.Provider>
	);
};

// import { CartContext } from "./CartContext";
// import {
// 	ADD_TO_CART,
// 	REMOVE_FROM_CART,
// 	UPDATE_CART,
// 	ADDED_TO_CART,
// 	INCREASE_QTY,
// 	DECREASE_QTY,
// } from "./CartActionType";
// import { cartReducer } from "./CartReducer";
// import { useEffect, useReducer, useState } from "react";

// export const CartState = ({ children }) => {
// 	const [cartItem, setCartItems] = useState(["1"]);

// 	useEffect(() => {
// 		const storedItems = localStorage.getItem("cart");
// 		if (storedItems) {
// 			setCartItems(JSON.parse(storedItems));
// 		}
// 	}, []);

// 	const initialState = {
// 		cart: cartItem ? cartItem : [],
// 		cartTotal: 0,
// 		isCompleted: false,
// 		isaddedToCart: false,
// 	};
// 	const [state, dispatch] = useReducer(cartReducer, initialState);

// 	useEffect(() => {
// 		localStorage.setItem("cart", JSON.stringify(state.cart));
// 	}, [state.cart]);

// 	const addToCart = (cartObj) => {
// 		dispatch({ type: ADD_TO_CART, payload: cartObj });
// 	};

// 	const addedToCart = (cartObjId) => {
// 		dispatch({ type: ADDED_TO_CART, payload: cartObjId });
// 	};
// 	const removeFromCart = (cartObjId) => {
// 		dispatch({ type: REMOVE_FROM_CART, payload: cartObjId });
// 	};

// 	const increaseQty = (cartObjId) => {
// 		dispatch({ type: INCREASE_QTY, payload: cartObjId });
// 	};

// 	const decreaseQty = (cartObjId) => {
// 		dispatch({ type: DECREASE_QTY, payload: cartObjId });
// 	};

// 	return (
// 		<CartContext.Provider
// 			value={{
// 				cart: state.cart,
// 				isCompleted: state.isCompleted,
// 				cartTotal: state.cartTotal,
// 				addToCart,
// 				removeFromCart,
// 				dispatch,
// 				addedToCart,
// 				increaseQty,
// 				decreaseQty,
// 				...state,
// 			}}>
// 			{children}
// 		</CartContext.Provider>
// 	);
// };
