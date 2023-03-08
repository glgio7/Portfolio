import styled from "styled-components";

const JobsContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;
  overflow-x: hidden;

  height: calc(100vh - 48px);

  padding: 0 2rem;
  padding-top: 2rem;

  img {
    width: 100%;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 100%;
    min-height: 200px;

    margin-block: 1rem;
  }

  .image-box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .image-box img {
    height: 180px;
    width: 180px;

    object-fit: cover;

    border-radius: 20px 20px 0 0;
  }

  .image-box span{
    background-color: rgba(0, 55, 200, 1);
    color: #fff;
    
    width: 180px;

    text-align: center;
    
    border-radius: 0 0 20px 20px;
  }

  article {
    width: 50%;
    height: 100%;

    background-color: #101010;
    color: #fff;

    border-radius: 40px 40px 40px 0px;

    padding: 2rem;
  }

  @media screen and (max-width: 900px) {
    height: calc(100vh - 108px);

    section {
      flex-direction: column;

      min-height: initial;
    }

    article {
      margin-top: 1rem;

      border-radius: 10px;

      width: 100%;
      height: 144px;
    }
  }
`;

export default JobsContainer;
