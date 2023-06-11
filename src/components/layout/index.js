import Footer from "../footer";
import NavBar from "../navbar";

function Layout({ children }) {
	return (
		<div>
			<NavBar />
			{children}
			<Footer />
		</div>
	);
}

export default Layout;
