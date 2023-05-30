import styled from "styled-components";

export const Section = styled.section`
	min-height: calc(100vh - 46px);
	width: 100%;

	padding: 2rem;

	position: relative;

	display: flex;
	flex-wrap: wrap;
	align-content: center;
	justify-content: center;

	.logo-top {
		top: 2rem;
		left: 2rem;
		width: 72px;
		aspect-ratio: 16/9;
		object-fit: cover;
		position: absolute;
	}

	.welcome-container {
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 100%;

		h1 {
			font-size: 6rem;
			line-height: 6rem;

			color: #fff;
		}

		h1 span {
			color: #8000ee;

			text-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
		}

		h1:nth-of-type(1) {
			margin-right: 150px;
		}
		h1:nth-of-type(2) {
			margin-left: 150px;
		}
	}

	.subtitle-container {
		display: flex;
		align-items: center;
		flex-direction: column;

		width: 100%;

		margin-top: 8rem;

		p {
			color: #fff;
			width: 100%;
			font-size: 1.25rem;
			text-align: center;
		}
	}
	.see-more {
		cursor: pointer;

		font-size: 3rem;

		color: #fff;

		animation: flashButton 2s linear infinite;
	}

	@keyframes flashButton {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0.1;
		}
		100% {
			opacity: 1;
		}
	}

	article {
		width: 50%;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.section__image {
		width: 360px;
		object-fit: contain;

		border-radius: 0 50% 0 50%;
	}

	ul,
	li {
		width: 100%;
		color: #fff;
	}
	li {
		display: inline-flex;
		flex-wrap: wrap;
	}

	li span {
		margin-block: 1rem;

		font-size: 1.15rem;

		width: 100%;
	}

	.skill-icon {
		width: 42px;
		height: 42px;

		padding: 3px;

		border-radius: 50%;

		object-fit: cover;
		aspect-ratio: 1;
	}

	@media screen and (max-width: 900px) {
		min-height: calc(100vh - 64px);

		padding: 1rem;

		flex-direction: column;

		.logo-top {
			position: static;
			align-self: center;
		}

		.welcome-container {
			margin-block: 4rem;

			h1 {
				font-size: 4rem;
				line-height: 4rem;
			}

			h1:nth-of-type(1) {
				margin-right: 0;
			}
			h1:nth-of-type(2) {
				margin-left: 0;
			}
		}

		.subtitle-container {
			margin-top: 0;
		}

		.section__image {
			width: 256px;
		}

		article {
			width: 100%;
		}

		h2 {
			text-align: center;
			margin-block: 0.5rem;
		}

		li {
			text-align: center;
			justify-content: center;
		}
	}
`;
