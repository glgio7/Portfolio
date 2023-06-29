import * as S from "./styles";
import Button from "../Button";
import { ProjectProps } from "./types";

const Project = ({
	screenshot,
	iconPath,
	name,
	link,
	description,
	technologies,
}: ProjectProps) => {
	return (
		<S.ProjectContainer onClick={() => {}}>
			<S.ProjectImage src={`/assets/screenshots/${screenshot}`} />
			<S.ProjectDetails>
				<h1>
					<img src={`/assets/projects/${iconPath}`} className="icon" />
					{name}
				</h1>
				<h2>Technologies</h2>
				<span>
					<strong>Front-end: </strong>
					{technologies.frontend}
				</span>
				<span>
					<strong>Back-end: </strong>
					{technologies.backend}
				</span>
				<span className="details-tip">
					Click on project image to more details.{" "}
				</span>
			</S.ProjectDetails>
			<S.Description>
				<p>{description}</p>
				<a href={link} target="_blank" className="visit-link">
					<Button>Visit</Button>
				</a>
			</S.Description>
		</S.ProjectContainer>
	);
};

export default Project;
