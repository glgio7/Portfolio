import * as S from "./styles";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

type SectionProps = {
	first?: boolean;
	sectionTitle: string;
	textContent: string[];
	imagePath: string;
	buttonSpan: string;
	route: string;
	skillsList?: string[];
};

const Section = ({
	first,
	sectionTitle,
	textContent,
	imagePath,
	buttonSpan,
	route,
	skillsList,
}: SectionProps) => {
	return (
		<S.Section>
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
		</S.Section>
	);
};

export default Section;
