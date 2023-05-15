import * as S from "./styles";
import { useContext, useEffect } from "react";
import { NavContext } from "../../contexts/NavContext";
import { useLocation } from "react-router-dom";

type ContainerProps = {
	children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
	const { setNav } = useContext(NavContext);
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
		setNav(false);
	}, [pathname]);

	return <S.Container>{children}</S.Container>;
};

export default Container;
