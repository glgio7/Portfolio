import { StyledTitle } from "./styles";

const PageTitle = ({ text }) => {
	return (
		<StyledTitle>
			<span>{text}</span>
		</StyledTitle>
	);
};

export default PageTitle;
