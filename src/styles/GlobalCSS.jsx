import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`

*{
  padding: 0;
  margin: 0;

  box-sizing: border-box;

  list-style: none;
}

#root {
  font-family: 'Kdam Thmor Pro', sans-serif;
}

a {
  text-decoration: none;
}
body {
  max-width: 100vw;
  overflow-x: hidden;
  min-height: 100vh;
  background: rgb(10,10,10);
background: linear-gradient(180deg, rgba(30,30,30) 0%, rgba(100,100,100,1) 100%);
}
`;
