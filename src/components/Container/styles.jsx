import styled from "styled-components";

const StyledContainer = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;

	padding-top: 2rem;

	@media screen and (max-width: 1024px) {
		padding-top: calc(2rem + 64px);
		flex-direction: row;
		flex-wrap: wrap;
	}
`;

export default StyledContainer;
