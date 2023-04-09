import { Link } from "react-router-dom";
import SectionContainer from "./styles";
import Button from "..//Button";

const Section = ({
	first,
	sectionTitle,
	textContent,
	imagePath,
	buttonSpan,
	route,
	skillsList,
}) => {
	return (
		<SectionContainer>
			<article>
				<div className="images-box">
					<img
						src={imagePath}
						className={first ? "images-box__image logo" : "images-box__image"}
					/>
					{route.startsWith("http") ? (
						<a href={route} target="_blank" className="images-box__link">
							<Button>{buttonSpan}</Button>
						</a>
					) : (
						<Link to={route} className="images-box__link">
							<Button>{buttonSpan}</Button>
						</Link>
					)}
				</div>
			</article>
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
				{textContent.map((item) => (
					<p key={item}>{item}</p>
				))}
			</article>
		</SectionContainer>
	);
};

export default Section;
