import styled from "styled-components";

export const Footer = styled.footer`
	width: 100vw;
	height: 160px;
	display: flex;

	background-color: #101010;

	display: flex;
	justify-content: center;

	padding: 2rem;

	.logo-top {
		width: 120px;
		aspect-ratio: 16/9;
		object-fit: cover;
	}

	.container__description {
		display: flex;
		flex-direction: column;
		justify-content: center;

		padding: 0 2rem;
	}

	h3 {
		font-size: 1rem;
		color: #fff;
		margin-block: 3px;
	}

	h3:last-child {
		color: #8000ff;
	}

	@media screen and (max-width: 1024px) {
		height: auto;
		flex-direction: column;
		align-items: center;
		padding: 1rem 0;

		.container__description {
			margin-top: 1rem;

			padding: 0;

			width: 80%;

			text-align: center;
		}
	}
`;
