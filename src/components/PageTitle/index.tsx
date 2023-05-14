import { StyledTitle } from "./styles";
import React from "react";

type PageTitleProps = {
	text: string;
};

const PageTitle = ({ text }: PageTitleProps) => {
	return (
		<StyledTitle>
			<span>{text}</span>
		</StyledTitle>
	);
};

export default PageTitle;
