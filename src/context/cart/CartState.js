import { CartContext } from "./CartContext";
import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	UPDATE_CART,
	ADDED_TO_CART,
	INCREASE_QTY,
	DECREASE_QTY,
	CART_TOTAL,
	VAT,
} from "./CartActionType";
import { cartReducer } from "./CartReducer";
import { useEffect, useReducer, useState } from "react";

export const CartState = ({ children }) => {
	// const [cartItem, setCartItems] = useState(null);
	const initialState = {
		cart: [],
		cartTotal: 0,
		vat: 0,
		isCompleted: false,
		isaddedToCart: false,
	};
	const [state, dispatch] = useReducer(cartReducer, initialState);

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
