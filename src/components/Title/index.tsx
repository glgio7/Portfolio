import * as S from "./styles";

type TitleProps = {
	className?: string;
	text: string;
};

const Title = ({ text, className }: TitleProps) => {
	return (
		<S.Title className={className}>
			<span>{text}</span>
		</S.Title>
	);
};

export default Title;
