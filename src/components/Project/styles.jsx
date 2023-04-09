import styled from "styled-components";

const ProjectContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	width: 100%;

	margin-block: 2rem;

	img {
		width: 100%;
	}

	.image-box {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.image-box img {
		height: 240px;
		aspect-ratio: 1;
		object-fit: cover;

		border-radius: 20px 20px 0 0;
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

	article {
		width: 50%;
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

	@media screen and (max-width: 1024px) {
		flex-direction: column;

		article {
			margin-top: 1rem;
			padding: 1.5rem;
			padding-bottom: 0;

			width: 80%;
		}

		.image-box {
			width: 80%;
			border-radius: 40px;
		}

		.image-box img {
			border-radius: 40px;
			width: 100%;
			aspect-ratio: 16/9;
		}

		.visit-link {
			margin-top: 1rem;
			width: 100%;
		}
	}
`;

export default ProjectContainer;
