import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 2rem;

  img {
    width: 100%;
  }

  section {
    min-height: calc(100vh - 48px);

    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }
  h1 {
    width: 100%;
    font-size: 2rem;
    color: #fff;
  }

  .images-box {
    width: 50%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .images-box__main {
    width: 360px;
    
    border-radius: 50%;
  }

  .images-box__button {
    margin-block: 1rem;
    width: 25%;
    height: 2rem;

    border: none;
    border-radius: 6px;

    color: #0055ee;

    font-weight: bolder;
    font-size: 1rem;

    font-family: "Kdam Thmor Pro", sans-serif;
  }

  article {
    width: 50%;
    
    display: flex;
    flex-direction: column;
  }
  p {
    margin-block: 1rem;
    
    max-width: 100%;
    
    color: #fff;
  }

  @media screen and (max-width: 900px){
    section{
        flex-direction: column;
        
        text-align: center;
    }

    .images-box__main {
    width: 240px;
    
    border-radius: 50%;
  }

    .images-box__button{
        width: 90%;
    }

    article{
        width: 100%;
        margin-bottom: 1rem;
    }
    
  }
`;

export default Container;