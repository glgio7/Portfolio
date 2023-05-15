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
		<S.ProjectContainer>
			<div className="image-container">
				<img src={`/assets/screenshots/${screenshot}`} />
			</div>
			<article>
				<h1>
					<img src={`/assets/projects/${iconPath}`} className="icon" />
					{name}
				</h1>
				<p>{description}</p>
				<h2>
					Technologies:<span>{technologies}</span>
				</h2>
				<a href={link} target="_blank" className="visit-link">
					<Button>Visit</Button>
				</a>
			</article>
		</S.ProjectContainer>
	);
};

export default Project;
