import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactPage from "./pages/Contact";
import ProjectsPage from "./pages/Projects";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/contact" element={<ContactPage />} />
			<Route path="/projects" element={<ProjectsPage />} />
		</Routes>
	);
};

export default AppRoutes;
