import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import { IoGrid } from "react-icons/io5";
import { NavContext } from "../../contexts/NavContext";

type HeaderProps = {
	scrolled: boolean;
};

const Header = ({ scrolled }: HeaderProps) => {
	const { nav, setNav } = useContext(NavContext);

	return (
		<S.Header scrolled={scrolled}>
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
		</S.Header>
	);
};

export default Header;
