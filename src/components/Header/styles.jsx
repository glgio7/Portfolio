import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 48px;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2rem;

  background-color: #101010;

  img {
    width: 100%;
  }

  h1 {
    color: #fff;

    height: 100%;

    font-size: 1.75rem;

    display: flex;
    align-items: center;
  }

  span:first-child {
    margin-right: 1rem;
  }

  .lista-navegacao {
    display: flex;

    align-items: center;

    height: 100%;
  }

  .lista-navegacao__item {
    margin-inline: 1rem;

    color: #fff;

    transition: all 200ms;

    &:hover {
      opacity: 0.75;
    }
  }

  @media screen and (max-width: 900px) {
    height: auto;
    
    flex-wrap: wrap;
    justify-content: center;
    
    padding: 0;

    h1 {
      text-align: center;
      
      line-height: 2rem;
      
      margin-block: .75rem;
      
      flex-wrap: wrap;
    }

    span {
      width: 100%;
    }

    span:first-child {
      margin-right: 0;
    }

    .lista-navegacao {
      width: 100%;
      
      background-color: #151515;
      
      justify-content: space-around;
    }
  }
`;

export default HeaderContainer;
