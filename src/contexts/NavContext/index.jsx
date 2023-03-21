import { createContext, useState } from "react";

export const NavContext = createContext();

const NavProvider = ({ children }) => {
	const [nav, setNav] = useState(false);

	const contextValue = {
		nav,
		setNav,
	};

	return (
		<NavContext.Provider value={contextValue}>{children}</NavContext.Provider>
	);
};

export default NavProvider;
