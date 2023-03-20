import styled from "styled-components";

export const StyledTitle = styled.h1`
	background-color: #101010;
	color: #fff;

	border-radius: 20px;

	width: 80%;

	margin-top: calc(0.5rem + 48px);
	margin-bottom: 0.5rem;
	padding: 0.5rem;

	text-align: center;

	@media screen and (max-width: 1024px) {
		margin: 0 auto;
		width: 90%;
	}
`;
