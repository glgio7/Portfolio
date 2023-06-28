import * as S from "./styles";
import Button from "../Button";

type ProjectProps = {
	screenshot: string;
	iconPath: string;
	name: string;
	link: string;
	description: string;
	technologies: string;
};

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
				<span>{technologies}</span>
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
