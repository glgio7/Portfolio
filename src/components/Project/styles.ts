import styled from "styled-components";

export const ProjectContainer = styled.section`
	width: 30%;

	margin-block: 2rem;
	position: relative;

	&::before {
		content: "";
		border-radius: 30% 0 30% 0;
		background: linear-gradient(130deg, #00c6ff, #9900ff);
		position: absolute;
		top: -2px;
		left: -2px;
		width: calc(100% + 4px);
		height: calc(100% + 4px);
		z-index: -1;
		opacity: 1;
	}

	.project-image {
		width: 100%;

		object-fit: cover;
	}

	article {
		position: relative;

		width: 100%;
		min-height: 200px;

		background-color: #000;
		color: #fff;

		padding: 1rem;
	}

	.icon {
		width: 1.75rem;
		height: 1.75rem;

		margin-right: 0.5rem;
	}

	h1,
	h2,
	span {
		font-size: 1.1rem;
		align-self: flex-start;
	}

	h1 {
		display: inline-flex;
		align-items: flex-end;
	}
	h2 {
		margin-block: 0.5rem;
		color: #7000ee;
	}

	.description {
		opacity: 0;

		cursor: pointer;

		text-align: center;

		position: absolute;
		top: 0;
		left: 0;

		background-color: rgba(0, 0, 0, 0.75);

		height: 100%;
		width: 100%;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		padding: 1rem;
		backdrop-filter: blur(0px);

		transition: backdrop-filter 1s, opacity 500ms, transform 200ms;
		transform: scaleY(0.75);

		&:hover {
			backdrop-filter: blur(12px);
			transform: scaleY(1);
			opacity: 1;
		}
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

	@media screen and (max-width: 1280px) {
		width: 40%;
	}

	@media screen and (max-width: 900px) {
		width: auto;
		max-width: 90%;

		margin: 0 auto;
		margin-block: 1rem;
		position: relative;
	}

	article {
		position: static;
	}

	.details {
		display: block !important;

		color: #7000ee;

		margin-top: 0.5rem;

		width: 100%;
	}

	.description {
		top: 0;
		backdrop-filter: initial;
		background-color: #000;
		transform: scaleY(0.75);

		&:hover {
			backdrop-filter: initial;
			transform: scaleY(1);
			opacity: 1;
		}

		p {
			overflow-y: auto;
		}
	}
`;
