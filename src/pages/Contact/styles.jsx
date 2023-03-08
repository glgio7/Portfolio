import styled from "styled-components";

const ContactContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;
  overflow-x: hidden;

  height: calc(100vh - 48px);

  padding: 0 2rem;
  padding-top: 2rem;

  form {
    display: flex;
    flex-direction: column;
    
    width: 100%;
  }

  label {
    font-size: 1rem;
    font-weight: bold;
    
    color: #fff;
    
    margin-block: 1rem;
  }

  input {
    padding: 0.25rem 1rem;
    
    background-color: #101010;
    color: #fff;
    
    border: none;
  }
  
  textarea {
    padding: 0.25rem 1rem;

    min-height: 200px;
    min-width: 100%;
    
    color: #fff;
    background-color: #101010;

    border: none;
  }

  .submit-button {
    cursor: pointer;

    border: none;
    border-radius: 6px;

    height: 3rem;

    background-color: #0055ee;
    color: #fff;

    font-size: 1rem;
    font-weight: bold;

    transition: all 300ms;

    &:hover {
      background-color: rgba(0, 55, 200, 1);
    }
  }
  @media screen and (max-width: 900px) {
    height: calc(100vh - 108px);
  }
`;

export default ContactContainer;
