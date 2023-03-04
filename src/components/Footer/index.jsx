import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100vw;
  height: 196px;
  display: flex;

  padding: 2rem;

  .container__image {
    width: 47%;
    background-image: url("/assets/cyberpunk-banner.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    border-radius: 16px;

  }

  .container__description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    /* text-align: center; */
    padding: 0 2rem;
  }

  h3{
    font-size: 1rem;
    color: #fff;
    margin-block: 3px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container__image"></div>
      <div className="container__description">
        <h3>Full Stack Developer | Front-End Development specialist.</h3>
        <h3>
          All the images, text content and code was developed by Giovane Azevedo.
        </h3>
        <h3> All rights reserved ©</h3>
      </div>
    </FooterContainer>
  );
};

export default Footer;
