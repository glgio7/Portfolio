import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavProvider from "./contexts/NavContext";
import GlobalCSS, { Background } from "./styles/GlobalCSS";
import Home from "./pages/Home";
import ContactPage from "./pages/Contact";
import ProjectsPage from "./pages/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScroll = () => {
		window.scrollY >= 100 ? setScrolled(true) : setScrolled(false);
	};

	return (
		<NavProvider>
			<BrowserRouter>
				<GlobalCSS />
				<Background />
				<Header scrolled={scrolled} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="/projects" element={<ProjectsPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</NavProvider>
	);
};

export default App;
