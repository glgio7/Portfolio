import styled from "styled-components";

const Form = styled.form`
	display: flex;
	flex-direction: column;

	margin: 0 auto;
	padding: 1rem;

	margin-top: 1rem;
	margin-bottom: 2rem;

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
		padding: 0.25rem 1rem;

		min-height: 200px;
		min-width: 100%;

		color: #fff;
		background-color: #101010;

		border: none;
		border-radius: 6px 6px 0 0;

		resize: none;
	}

	.submit-button {
		cursor: pointer;

		border: none;
		border-radius: 0 0 6px 6px;

		height: 3rem;

		background-color: #0055ee;
		color: #fff;

		font-size: 1rem;
		font-weight: bold;

		transition: all 300ms;

		&:hover {
			background-color: rgba(0, 55, 200, 1);
		}
	}
`;

export default Form;
