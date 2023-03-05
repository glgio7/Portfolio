import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 48px;
  width: 100%;

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

  .lista-navegacao {
    display: flex;
    
    align-items: center;
   
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
    height: auto;
    justify-content: center;
    flex-wrap: wrap;

    h1{
        text-align: center;
        line-height: 2rem;
        margin-block: 1rem;
    }
  }
`;

export default HeaderContainer;