import { Link } from "react-router-dom";
import HeaderContainer from "./styles";
import { IoGrid } from "react-icons/io5";
import { useContext } from "react";
import { NavContext } from "../../contexts/NavContext";

const Header = ({ scrolled }) => {
	const { nav, setNav } = useContext(NavContext);

	return (
		<HeaderContainer scrolled={scrolled}>
			<Link to={"/"}>
				<h1>
					<span>Dev. Giovane Lucas</span>
					<span>{"<Portfolio/>"}</span>
				</h1>
			</Link>
			<IoGrid className="menu" onClick={() => setNav(!nav)} />
			<ul className={nav ? "lista-navegacao active" : "lista-navegacao"}>
				<Link to={"/"}>
					<li className="lista-navegacao__item">Home</li>
				</Link>
				<a href="https://linkedin.com/in/giovane-lucas/" target="_blank">
					<li className="lista-navegacao__item">About</li>
				</a>
				<Link to={"/projects"}>
					<li className="lista-navegacao__item">Projects</li>
				</Link>
				<Link to={"/contact"}>
					<li className="lista-navegacao__item">Contact</li>
				</Link>
			</ul>
		</HeaderContainer>
	);
};

export default Header;
