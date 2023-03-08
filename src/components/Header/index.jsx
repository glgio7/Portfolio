import { Link } from "react-router-dom";
import HeaderContainer from "./styles";

const Header = ({ scrolled }) => {
  return (
    <HeaderContainer scrolled={scrolled}>
    <Link to={"/"}>
      <h1>
        <span>Dev. Giovane Lucas </span>
        <span>| Portfolio</span>
      </h1>
      </Link>
      <ul className="lista-navegacao">
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
