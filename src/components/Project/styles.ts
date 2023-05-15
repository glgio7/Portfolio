import styled from "styled-components";

export const ProjectContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	padding: 0 4rem;

	width: 100%;

	margin-block: 2rem;

	img {
		width: 100%;
	}

	.image-container {
		width: 30%;
		height: 100%;

		display: flex;
		flex-direction: column;

		border-radius: 20px;

		background-color: #222;
	}

	.image-container img {
		width: 100%;

		aspect-ratio: 16/9;
		object-fit: cover;

		border-radius: 20px;
	}

	article {
		width: 60%;
		height: 100%;

		display: flex;
		flex-direction: column;
		justify-content: space-between;

		background-color: #101010;
		color: #fff;

		border-radius: 40px 40px 40px 0px;

		padding: 2rem;
		padding-bottom: 0;
	}

	h1,
	h2 {
		font-size: 1.25rem;
		color: rgb(0, 140, 255);
		line-height: 1.5rem;
	}

	h1 {
		display: inline-flex;
		align-items: flex-end;
	}

	.icon {
		width: 1.75rem;
		height: 1.75rem;

		margin-right: 0.5rem;
	}

	p,
	span {
		color: #fff;
		font-weight: normal;
		font-size: 1rem;
	}

	p {
		margin: 12px 0;
	}

	h2 span {
		margin-left: 6px;
	}

	.visit-link {
		margin-block: 1rem;

		width: 100%;

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

	@media screen and (max-width: 1024px) {
		flex-direction: column;
		padding: 0;

		article {
			margin-top: 1rem;
			padding: 1.5rem;
			padding-bottom: 0;

			width: 90%;
		}

		.image-container {
			width: 90%;
		}

		.image-container img {
			width: 100%;
			aspect-ratio: 16/9;
		}

		.visit-link {
			margin-top: 1rem;
			width: 100%;
		}
	}
`;
