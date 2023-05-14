import React, { SetStateAction } from "react";

export interface INavContext {
	nav: boolean;
	setNav: React.Dispatch<SetStateAction<boolean>>;
}

export type NavProviderProps = {
	children: React.ReactNode;
};
