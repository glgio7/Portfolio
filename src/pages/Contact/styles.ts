import styled from "styled-components";

export const Contact = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;

	.alternative-title {
		text-align: center;
	}

	.file-download {
		font-size: 48px;
		color: #fff;
		text-align: center;
	}

	.util-container {
		margin-block: 2rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		width: 100%;
	}

	.util-container__icon {
		width: 48px;
		height: 48px;

		padding: 3px;

		margin-inline: 6px;

		background-color: #fff;

		border-radius: 10px;

		object-fit: cover;
		aspect-ratio: 1;
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;

	margin: 0 auto;
	padding: 1rem;

	width: 80%;
	background-color: #fff;

	border-radius: 10px;

	label {
		font-size: 1rem;
		font-weight: bold;

		color: #000;

		margin-block: 1rem;
	}

	input {
		padding: 0.25rem 1rem;

		background-color: #101010;
		color: #fff;

		border: none;

		height: 42px;

		border-radius: 6px;
	}

	textarea {
		padding: 1rem;

		min-height: 200px;
		width: 100%;

		color: #fff;
		background-color: #101010;

		border: none;
		border-radius: 6px 6px 0 0;

		resize: none;
	}

	button[type="submit"] {
		cursor: pointer;

		border: none;
		border-radius: 0 0 6px 6px;

		height: 3rem;

		background-color: #000;

		font-size: 1rem;
		font-weight: bold;

		transition: all 300ms;

		color: #fff;

		&::first-letter {
			color: #7000ee;
		}

		&:hover {
			background-color: #050505;
		}
	}

	@media screen and (max-width: 900px) {
		width: 90%;
	}
`;

export const FormLoader = styled.div`
	height: 3rem;

	justify-content: center;
	display: flex;
	align-items: center;

	background-color: #000;
	transition: all 300ms;

	.spinner {
		background-image: linear-gradient(rgb(186, 66, 255) 35%, rgb(0, 225, 255));
		width: 2rem;
		height: 2rem;
		animation: spinningLoading 1.7s linear infinite;
		text-align: center;
		border-radius: 50px;
		filter: blur(1px);
		box-shadow: 0px 0px 3px 0px rgb(186, 66, 255),
			0px 0px 3px 0px rgb(0, 225, 255);
	}

	.spinner1 {
		background-color: rgb(0, 80, 255);
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		filter: blur(10px);
	}

	@keyframes spinningLoading {
		to {
			transform: rotate(360deg);
		}
	}
`;
