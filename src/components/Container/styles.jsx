import styled from "styled-components";

const StyledContainer = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;

	padding-top: calc(2rem + 48px);

	overflow-y: scroll;
	overflow-x: hidden;

	height: 100vh;
	width: 100vw;

	background-image: url("/assets/landscape.jpg");
	background-size: cover;
	background-repeat: no-repeat;

	@media screen and (max-width: 900px) {
		flex-direction: row;
		flex-wrap: wrap;
		height: 100vh;

		padding-top: calc(2rem + 108px);
	}
`;

export default StyledContainer;
