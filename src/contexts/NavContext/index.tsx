import React from "react";
import { createContext, useState } from "react";
import { INavContext, NavProviderProps } from "./types";

export const NavContext = createContext<INavContext>({} as INavContext);

const NavProvider = ({ children }: NavProviderProps) => {
	const [nav, setNav] = useState<boolean>(false);

	const contextValue = {
		nav,
		setNav,
	};

	return (
		<NavContext.Provider value={contextValue}>{children}</NavContext.Provider>
	);
};

export default NavProvider;
