import styled from "styled-components";

const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: calc(2rem + 48px);

  overflow-y: scroll;
  overflow-x: hidden;

  height: 100vh;
  width: 100vw;

  position: relative;

  .translator {
    position: fixed;
    bottom: 1rem;
    right: 2rem;
    width: 32px;
    height: 32px;
  }

  @media screen and (max-width: 900px) {
    flex-direction: row;
    flex-wrap: wrap;
    height: 100vh;

padding-top: calc(2rem + 108px); 

    .translator {
      bottom: 1rem;
      right: 1rem;
    }
  }
`;

export default StyledContainer;
