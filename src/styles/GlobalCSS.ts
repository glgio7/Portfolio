import styled, { createGlobalStyle } from "styled-components";

const GlobalCSS = createGlobalStyle`

*{
  padding: 0;
  margin: 0;

  box-sizing: border-box;

  list-style: none;

  font-family: 'Rajdhani', sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}

img{
  width: 100%;
}

body {
  width: 100%;
  min-height: 100vh;

  overflow-y: scroll;

  position: relative;

  z-index: 5;

  background-color: #000;
}
`;

export const Background = styled.div`
	position: fixed;
	top: 0;

	z-index: -1;
	width: 100vw;
	height: 100vh;

	opacity: 0.3;

	background-image: url("/assets/general/landscape.jpg");
	background-size: cover;
	background-repeat: no-repeat;
`;

export default GlobalCSS;
