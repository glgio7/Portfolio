import { Link } from "react-router-dom";
import HeaderContainer from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <h1><span>Dev. Giovane Lucas </span><span>| Portfolio</span></h1>
      <ul className="lista-navegacao">
        <Link to={'/'}>
          <li className="lista-navegacao__item">Home</li>
        </Link>
        <a href="">
          <li className="lista-navegacao__item">About</li>
        </a>
        <a href="">
          <li className="lista-navegacao__item">Jobs</li>
        </a>
        <Link to={'/contact'}>
          <li className="lista-navegacao__item">Contact</li>
        </Link>
      </ul>
    </HeaderContainer>
  );
};

export default Header;
