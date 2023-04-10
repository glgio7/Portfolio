import styled from "styled-components";

const SectionContainer = styled.section`
	min-height: calc(100vh - 48px);
	width: 100%;

	display: flex;
	flex-wrap: wrap;

	padding: 4rem;

	h1 {
		width: 100%;
		font-size: 2.25rem;
		color: #fff;
	}

	.images-box {
		width: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.images-box__image {
		width: 360px;
		object-fit: contain;

		border-radius: 50%;
	}

	.images-box__image.logo {
		border-radius: 0px;
		object-fit: cover;
		aspect-ratio: 16/9;
	}

	.images-box__link {
		margin-block: 1rem;

		width: 360px;

		position: relative;
		z-index: 6;

		transition: all 300ms;

		&::before {
			content: "";
			background: linear-gradient(130deg, #00c6ff, #9900ff);
			position: absolute;
			top: -1px;
			left: -1px;
			width: calc(100% + 2px);
			height: calc(100% + 2px);
			z-index: -1;
			opacity: 1;
		}

		&:hover {
			opacity: 0.75;
		}
	}

	.images-box__link button {
		transition: all 300ms;
		cursor: pointer;

		background-color: #000;
		border: none;
		color: #fff;

		padding: 1rem 0;
		width: 100%;

		font-size: 1rem;
		font-weight: bold;
	}

	article {
		width: 50%;

		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	.skills-list {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		padding: 1rem 0;
		align-items: center;
		gap: 6px;
	}

	.skills-list li {
		display: inline-flex;
		align-items: center;
		padding: 6px;
		border-radius: 10px;
		background-color: #111;
	}

	.skills-list li img {
		width: 42px;
		height: 42px;
		border-radius: 50%;
		object-fit: cover;
		aspect-ratio: 1;
	}

	p {
		max-width: 100%;

		color: #fff;

		border-radius: 6px;
		padding: 1rem;
		padding-left: 0;

		font-size: 1.2rem;
	}
	@media screen and (max-width: 1024px) {
		flex-direction: column;

		padding: 0 2rem;

		text-align: center;

		.images-box__image {
			width: 256px;

			border-radius: 50%;
		}

		.images-box__link {
			width: 80%;
		}

		article {
			width: 100%;
			padding: 0;
			margin-bottom: 1rem;
		}

		p {
			padding: 0;
			margin-block: 0.5rem;
		}

		.skills-list {
			justify-content: center;
		}
	}
`;

export default SectionContainer;
