import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalCSS, { Background } from "./styles/GlobalCSS";
import Header from "./components/Header";
import AppRoutes from "./routes";
import Footer from "./components/Footer";

const App = () => {
	const [scrolled, setScrolled] = useState(false);

	const handleScroll = () => {
		window.scrollY >= 100 ? setScrolled(true) : setScrolled(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<BrowserRouter>
			<GlobalCSS />
			<Background />
			<Header scrolled={scrolled} />
			<AppRoutes />
			<Footer />
		</BrowserRouter>
	);
};

export default App;
