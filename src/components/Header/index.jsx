import HeaderContainer from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Dev. Giovane Lucas | Portfolio</h1>
      <ul className="lista-navegacao">
        <a href="">
          <li className="lista-navegacao__item">Home</li>
        </a>
        <a href="">
          <li className="lista-navegacao__item">About</li>
        </a>
        <a href="">
          <li className="lista-navegacao__item">Jobs</li>
        </a>
        <a href="">
          <li className="lista-navegacao__item">Contact</li>
        </a>
      </ul>
    </HeaderContainer>
  );
};

export default Header;
