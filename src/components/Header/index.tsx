import * as S from "./styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoGrid } from "react-icons/io5";

type HeaderProps = {
	scrolled: boolean;
};

const Header = ({ scrolled }: HeaderProps) => {
	const [nav, setNav] = useState(false);

	interface navLink {
		text: string;
		href: string;
		external: boolean;
	}

	const resetLayout = () => {
		window.scrollTo(0, 0);
		setNav(false);
	};

	const navLinks: navLink[] = [
		{ text: "Home", external: false, href: "/" },
		{ text: "Projects", external: false, href: "/projects" },
		{
			text: "Github",
			external: true,
			href: "https://github.com/glgio7/",
		},
		{
			text: "LinkedIn",
			external: true,
			href: "https://linkedin.com/in/giovane-lucas/",
		},
		{ text: "Contact", external: false, href: "/contact" },
	];

	return (
		<S.Header scrolled={scrolled}>
			<Link to={"/"} onClick={resetLayout}>
				<h1>
					<span>Dev. Giovane Lucas</span>
					<span>{"<Portfolio/>"}</span>
				</h1>
			</Link>
			<IoGrid className="menu" onClick={() => setNav(!nav)} />
			<ul className={nav ? "lista-navegacao active" : "lista-navegacao"}>
				{navLinks.map((item) =>
					item.external ? (
						<a
							href={item.href}
							target="_blank"
							key={item.href}
							onClick={resetLayout}
						>
							<li className="lista-navegacao__item">{item.text}</li>
						</a>
					) : (
						<Link to={item.href} key={item.href} onClick={resetLayout}>
							<li className="lista-navegacao__item">{item.text}</li>
						</Link>
					)
				)}
			</ul>
		</S.Header>
	);
};

export default Header;
