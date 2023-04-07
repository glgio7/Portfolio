import { Link } from "react-router-dom";
import SectionContainer from "./styles";

const Section = ({
	sectionTitle,
	textContent,
	imagePath,
	buttonSpan,
	route,
	skillsList,
}) => {
	return (
		<SectionContainer>
			<div className="images-box">
				<img className="images-box__main" src={imagePath} />
				{route.startsWith("http") ? (
					<a href={route} target="_blank" className="images-box__link">
						<button>{buttonSpan}</button>
					</a>
				) : (
					<Link to={route} className="images-box__link">
						<button>{buttonSpan}</button>
					</Link>
				)}
			</div>
			<article>
				<h1>{sectionTitle}</h1>
				{skillsList && (
					<ul className="skills-list">
						{skillsList.map((item) => (
							<li key={item}>
								<img src={`/assets/skills/${item}.png`} alt={item} />
							</li>
						))}
					</ul>
				)}
				{textContent.map((item, index) => {
					return <p key={index}>{item}</p>;
				})}
			</article>
		</SectionContainer>
	);
};

export default Section;
