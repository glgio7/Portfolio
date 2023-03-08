import styled from "styled-components";

const ProjectContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;

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

  .visit-link {
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

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: #101010;
    color: #fff;

    border-radius: 40px 40px 40px 0px;

    padding: 2rem;
  }

  h1,
  h2 {
    font-size: 1.25rem;
    color: rgb(0, 140, 255);
    line-height: 1.5rem;
  }

  p,
  span {
    color: #fff;
    font-weight: normal;
    font-size: 1rem;
  }

  p {
    margin: 12px 0;
  }

  h2 span {
    margin-left: 6px;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;

    article {
      margin-top: 1rem;
      padding: 1.5rem;

      width: 80%;
    }
  }
`;

export default ProjectContainer;
