import styled from "styled-components";

const ContactContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 208px);

  padding: 2rem;

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

  input{
    padding: .25rem;
  }

  textarea {
    min-height: 200px;
  }

  .submit-button{
    cursor: pointer;

    border: none;
    border-radius: 6px;

    height: 3rem;

    background-color: #0055ee;
    color: #fff;

    font-size: 1rem;
    font-weight: bold;

    transition: all 300ms;
    
    &:hover{
        background-color: rgba(0,55,200,1);
    }
  }
`;

export default ContactContainer;
