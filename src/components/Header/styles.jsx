import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;

  height: 48px;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2rem;

  background-color: ${({ scrolled }) => (scrolled ? "#fff" : "#101010")};

  transition: all 300ms;

  img {
    width: 100%;
  }

  h1 {
    color: ${({ scrolled }) => (scrolled ? "#101010" : "#fff")};

    transition: all 500ms;

    height: 100%;

    font-size: 1.75rem;

    display: flex;
    align-items: center;

    transition: all 300ms;

    &:hover {
      opacity: 0.8;
    }
  }

  span:first-child {
    margin-right: 1rem;
  }

  .lista-navegacao {
    display: flex;

    align-items: center;

    height: 100%;

    background-color: ${({ scrolled }) => (scrolled ? "#fff" : "#101010")};

    transition: all 300ms;
  }

  .lista-navegacao__item {
    margin-inline: 1rem;

    font-weight: bold;

    color: ${({ scrolled }) => (scrolled ? "rgba(0, 55, 200, 1)" : "#fff")};

    transition: all 300ms;

    &:hover {
      opacity: 0.75;
    }
  }

  @media screen and (max-width: 900px) {
    height: 108px;

    padding: 0;

    align-items: center;
    flex-direction: column;

    h1 {
      height: 72px;
      width: 100%;

      flex-direction: column;
    }

    span {
      height: 30px;
    }

    .lista-navegacao {
      width: 100%;
      height: 36px;

      justify-content: space-around;
    }
  }
`;

export default HeaderContainer;
