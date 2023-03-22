import styled from "styled-components";

const SectionContainer = styled.section`
	min-height: calc(100vh - 48px);
	width: 100%;

	display: flex;
	align-items: center;
	flex-wrap: wrap;

	padding: 0 4rem;

	h1 {
		width: 100%;
		font-size: 2rem;
		color: #fff;
	}

	.images-box {
		width: 50%;

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.images-box__main {
		width: 360px;

		border-radius: 50%;
	}

	.images-box__link {
		margin-block: 1rem;

		width: 25%;
	}
	.images-box__link button {
		transition: all 300ms;
		cursor: pointer;
		border-radius: 6px;
		border: none;

		height: 2rem;
		width: 100%;

		color: rgba(0, 55, 200, 1);

		font-size: 1rem;
		font-weight: bold;
	}

	article {
		width: 50%;

		display: flex;
		flex-direction: column;
	}
	p {
		margin-block: 1rem;

		max-width: 100%;

		color: #fff;
		background-color: rgb(0, 0, 0, 0.5);

		border-radius: 6px;
		padding: 1rem;
	}
	@media screen and (max-width: 1024px) {
		flex-direction: column;

		padding: 0 2rem;

		text-align: center;

		.images-box__main {
			width: 240px;

			border-radius: 50%;
		}

		.images-box__button {
			width: 100%;
		}

		article {
			width: 100%;
			padding: 0;
			margin-bottom: 1rem;
		}
	}
`;

export default SectionContainer;
