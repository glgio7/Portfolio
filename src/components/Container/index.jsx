import { useContext, useEffect } from "react";
import { NavContext } from "../../contexts/NavContext";
import StyledContainer from "./styles";

const Container = ({ children }) => {
	const { setNav } = useContext(NavContext);
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
		setNav(false);
	}, []);

	return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
