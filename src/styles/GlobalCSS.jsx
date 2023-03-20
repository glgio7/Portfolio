import styled, { createGlobalStyle } from "styled-components";

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
  width: 100%;
  min-height: 100vh;

  overflow-x: hidden;
  overflow-y: scroll;

  position: relative;

  z-index: 5;

  background-color: #101010;
}
`;

export const Background = styled.div`
	position: fixed;
	top: 0;

	z-index: -1;
	width: 100vw;
	height: 100vh;

	background-image: url("/assets/landscape.jpg");
	background-size: cover;
	background-repeat: no-repeat;
`;

export default GlobalCSS;
