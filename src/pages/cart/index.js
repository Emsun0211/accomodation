import { useContext } from "react";
import Cart from "../../components/cart/Cart";
import EmptyCart from "../../components/cart/EmptyCart";
import { CartContext } from "../../context/cart/CartContext";

const CartScreen = () => {
	const { cart } = useContext(CartContext);
	return <div>{!cart.length ? <EmptyCart /> : <Cart />}</div>;
};

export default CartScreen;
