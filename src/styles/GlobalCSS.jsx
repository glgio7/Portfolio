import { createGlobalStyle } from "styled-components";

const GlobalCSS = createGlobalStyle`

*{
  padding: 0;
  margin: 0;

  box-sizing: border-box;

  list-style: none;

  font-family: 'Titillium Web', sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}

body {
  max-width: 100vw;
  min-height: 100vh;

  overflow-x: hidden;

  background: rgb(10,10,10);
  background: linear-gradient(180deg, rgba(30,30,30) 0%, rgba(100,100,100,1) 100%);
}
`;

export default GlobalCSS
