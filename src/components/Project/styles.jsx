import styled from "styled-components";

const ProjectContainer = styled.section`
  display: flex;
  /* align-items: center; */
  justify-content: space-evenly;

  width: 100%;
  min-height: 200px;

  margin-block: 2rem;

  img {
    width: 100%;
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

  .image-box span {
    background-color: rgba(0, 55, 200, 1);
    color: #fff;
    padding: 0.5rem 0;

    font-weight: bold;

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
    flex-direction: column;
    align-items: center;

    min-height: initial;

    article {
      margin-top: 1rem;

      width: 80%;
    }
  }
`;

export default ProjectContainer;
