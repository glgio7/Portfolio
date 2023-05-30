import * as S from "./styles";
import React from "react";

type SectionProps = {
	id?: string;
	children: React.ReactNode;
};

const Section = ({ children }: SectionProps) => {
	return <S.Section>{children}</S.Section>;
};

export default Section;
