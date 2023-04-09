import styled from "styled-components";

export const StyledTitle = styled.h1`
	width: 80%;
	height: 54px;

	margin: 0 auto;

	margin-top: calc(0.5rem + 48px);
	margin-bottom: 0.5rem;

	display: flex;

	position: relative;
	z-index: 6;

	&::before {
		content: "";
		background: linear-gradient(130deg, #00c6ff, #9900ff);
		position: absolute;
		top: -1px;
		left: -1px;
		width: calc(100% + 2px);
		height: calc(100% + 2px);
		z-index: -1;
	}

	span {
		background-color: #000;
		color: #fff;

		/* padding: 1rem 0; */
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		font-size: 1.5rem;
		font-weight: bold;
	}

	@media screen and (max-width: 1024px) {
		height: 72px;
		width: 90%;
		margin-top: 0;

		span {
			text-align: center;
		}
	}
`;
