import styled from "styled-components";

export const ProjectContainer = styled.section`
	width: 30%;

	margin-block: 2rem;

	position: relative;

	background-color: #000;

	padding: 1rem;

	&::before {
		content: "";

		border-radius: 30% 0 30% 0;

		background: linear-gradient(130deg, #00c6ff, #9900ff);

		z-index: -1;
		position: absolute;
		top: -2px;
		left: -2px;

		width: calc(100% + 4px);
		height: calc(100% + 4px);

		opacity: 1;
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
`;

export const ProjectImage = styled.img`
	width: 100%;

	object-fit: cover;
`;

export const ProjectDetails = styled.article`
	width: 100%;
	min-height: 192px;

	background-color: #000;
	color: #fff;

	h1,
	h2,
	span {
		font-size: 1.1rem;
		display: block;
		margin-block: 0.5rem;
	}

	.icon {
		width: 1.75rem;
		height: 1.75rem;

		margin-right: 0.5rem;
	}

	h1 {
		display: inline-flex;
		align-items: flex-end;
	}

	h2 {
		position: relative;
		width: fit-content;

		margin-block: 0.75rem;
		&::before {
			content: "";

			background: #00c6ff;

			height: 2px;

			border-radius: 50%;

			position: absolute;
			bottom: -1px;
			left: 0;
			right: 0;
		}
	}

	.details-tip {
		display: none;
	}

	@media screen and (max-width: 900px) {
		.details-tip {
			display: block;

			position: relative;

			margin-top: 0.5rem;

			width: fit-content;

			&::before {
			content: "";

			background: #00c6ff;

			height: 2px;

			border-radius: 50%;

			position: absolute;
			bottom: -1px;
			left: 0;
			right: 0;
		}
		}
	}
`;

export const Description = styled.div`
	opacity: 0;

	cursor: pointer;

	text-align: center;

	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;

	background-color: rgba(0, 0, 0, 0.75);
	color: #fff;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding: 1rem;
	backdrop-filter: blur(0px);

	transition: backdrop-filter 500ms, opacity 300ms, transform 200ms;
	transform: scaleY(0.75);

	&:hover {
		backdrop-filter: blur(12px);
		transform: scaleY(1);
		opacity: 1;
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

	@media screen and (max-width: 900px) {
		top: 0;
		backdrop-filter: initial;
		background-color: rgba(0, 0, 0);
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
