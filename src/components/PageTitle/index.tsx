import * as S from "./styles";
import React from "react";

type PageTitleProps = {
	text: string;
};

const PageTitle = ({ text }: PageTitleProps) => {
	return (
		<S.PageTitle>
			<span>{text}</span>
		</S.PageTitle>
	);
};

export default PageTitle;
