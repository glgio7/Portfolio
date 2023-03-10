import { Link } from "react-router-dom";
import SectionContainer from "./styles";

const Section = ({
	sectionTitle,
	textContent,
	imagePath,
	buttonSpan,
	route,
}) => {
	return (
		<SectionContainer>
			<div className="images-box">
				<img className="images-box__main" src={imagePath} />
				<button className="images-box__button">
					{route.startsWith("http") ? (
						<a href={route} target="_blank">
							{buttonSpan}
						</a>
					) : (
						<Link to={route}>{buttonSpan}</Link>
					)}
				</button>
			</div>
			<article>
				<h1>{sectionTitle}</h1>
				{textContent.map((item, index) => {
					return <p key={index}>{item}</p>;
				})}
			</article>
		</SectionContainer>
	);
};

export default Section;
