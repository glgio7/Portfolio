import React from "react";
import { useContext, useEffect } from "react";
import { NavContext } from "../../contexts/NavContext";
import * as S from "./styles";

type ContainerProps = {
	children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
	const { setNav } = useContext(NavContext);
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
		setNav(false);
	}, []);

	return <S.Container>{children}</S.Container>;
};

export default Container;
