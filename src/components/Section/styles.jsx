import styled from "styled-components";

const SectionContainer = styled.section`
    min-height: calc(100vh - 48px);

    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
 
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
    border-radius: 9px;

    color: #0055ff;

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
  }`

  export default SectionContainer