import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 2rem;

  overflow-y: scroll;
  overflow-x: hidden;
  
  height: calc(100vh - 48px);
  img {
    width: 100%;
  }
  
  @media screen and (max-width: 900px) {
    flex-direction: row;
    flex-wrap: wrap;
    height: calc(100vh - 108px);
  }
`;

export default Container;