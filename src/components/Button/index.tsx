import * as S from "./styles";
import React from "react";

type ButtonProps = {
	children?: string;
};

const Button = ({ children }: ButtonProps) => {
	return <S.Button>{children}</S.Button>;
};

export default Button;
