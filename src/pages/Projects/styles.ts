import styled from "styled-components";

export const ProjectsPage = styled.main`
	width: 100%;
	padding: 2rem;

	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;

	.alternative-title {
		text-align: center;
	}

	@media screen and (max-width: 900px) {
		padding: 1rem;
	}
`;
