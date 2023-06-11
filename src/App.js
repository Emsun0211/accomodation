// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./components/layout";
import RoomDetails from "./pages/details";
import CartScreen from "./pages/cart";
import Checkout from "./pages/checkout";

function App() {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='details/:roomid' element={<RoomDetails />} />
				<Route path='/cart' element={<CartScreen />} />
				<Route path='/checkout' element={<Checkout />} />
			</Routes>
		</Layout>
	);
}

export default App;
