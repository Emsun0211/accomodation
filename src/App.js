// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./components/layout";
import RoomDetails from "./pages/details";
import CartScreen from "./pages/cart";
import Checkout from "./pages/checkout";
import ContactUs from "./pages/contact";
import FAQ from "./pages/faq";

function App() {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='details/:roomid' element={<RoomDetails />} />
				<Route path='/cart' element={<CartScreen />} />
				<Route path='/checkout' element={<Checkout />} />
				<Route path='/contact' element={<ContactUs />} />
				<Route path='/faq' element={<FAQ />} />
			</Routes>
		</Layout>
	);
}

export default App;
