import styled from "styled-components";

export const Header = styled.header<{ scrolled: boolean }>`
	position: sticky;
	top: 0;

	height: 48px;
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 0 2rem;

	z-index: 99;

	background-color: ${({ scrolled }) => (scrolled ? "#fff" : "#101010")};

	transition: all 300ms;

	img {
		width: 100%;
	}

	h1 {
		color: ${({ scrolled }) => (scrolled ? "#101010" : "#fff")};

		transition: all 500ms;

		height: 100%;

		font-size: 1.75rem;

		display: flex;
		align-items: center;

		transition: all 300ms;

		&:hover {
			opacity: 0.8;
		}
	}

	span:first-child {
		margin-right: 1rem;
	}
	span:last-of-type {
		color: #7000ee;
	}

	.menu {
		display: none;
	}

	.lista-navegacao {
		display: flex;

		align-items: center;

		height: 100%;

		background-color: ${({ scrolled }) => (scrolled ? "#fff" : "#101010")};

		transition: all 300ms;
	}

	.lista-navegacao__item {
		margin-inline: 1rem;

		font-weight: bold;

		color: ${({ scrolled }) => (scrolled ? "#7000ee" : "#fff")};

		transition: all 300ms;

		&:hover {
			opacity: 0.75;
		}
	}

	@media screen and (max-width: 1024px) {
		height: 64px;

		padding: 0 0.75rem;

		align-items: center;

		h1 {
			font-size: 1.25rem;
		}

		span:first-child {
			margin-right: 0.5rem;
		}

		.menu {
			cursor: pointer;
			display: block;

			font-size: 1.5rem;
			color: ${({ scrolled }) => (scrolled ? "#101010" : "#fff")};
		}

		.lista-navegacao {
			position: fixed;
			top: 0;
			right: 0;

			margin-top: 96px;

			pointer-events: none;
			opacity: 0;

			flex-direction: column;
			justify-content: space-around;

			height: calc(100vh - 96px);
			width: 50vw;

			border-radius: 12px 0 0 0;

			transform: translateX(100%);

			transition: all 250ms;
		}

		.lista-navegacao.active {
			opacity: 1;
			pointer-events: all;
			transform: translateX(0);
		}
	}
`;
