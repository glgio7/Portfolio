import styled from "styled-components";

export const Footer = styled.footer`
	width: 100vw;
	height: 160px;
	display: flex;

	background-color: #101010;

	padding: 2rem;
	/* margin-top: 3rem; */

	.container__image {
		width: 45%;
		background-image: url("/assets/cyberpunk-banner.png");
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;

		border-radius: 16px;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.container__description {
		display: flex;
		flex-direction: column;
		justify-content: center;

		width: 55%;

		padding: 0 2rem;
	}

	h3 {
		font-size: 1rem;
		color: #fff;
		margin-block: 3px;
	}

	h3:last-child {
		color: #00c6ff;
	}

	@media screen and (max-width: 1024px) {
		height: auto;
		flex-direction: column;
		align-items: center;
		padding: 1rem 0;

		.container__image {
			width: 90%;
			height: 96px;
			object-fit: contain;

			h3 {
				display: none;
			}
		}

		.container__description {
			margin-top: 1rem;

			padding: 0;

			width: 80%;

			text-align: center;
		}
	}
`;
