import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 56px;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  img {
    width: 100%;
  }

  h1 {
    background-color: #0055ee;
    /* background-color: #101010; */

    color: #fff;

    height: 100%;
    font-size: 1.75rem;
    display: flex;
    align-items: center;
    /* text-align: center; */
  }

  .lista-navegacao {
    display: flex;
    align-items: center;
    background-color: #0055ee;
    height: 100%;
  }

  .lista-navegacao__item {
    margin-inline: 1rem;
    color: #fff;

    transition: all 200ms;

    &:hover{
      opacity: .75;
    }
  }

  @media screen and (max-width: 900px) {
  }
`;

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
      {/* <div className="banner">
        <h2>Mestre da tradução de idéias em código!</h2>
      </div> */}
    </HeaderContainer>
  );
};

export default Header;
