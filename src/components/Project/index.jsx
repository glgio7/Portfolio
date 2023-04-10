import ProjectContainer from "./styles";
import Button from "../Button";

const Project = ({
	screenshot,
	iconPath,
	name,
	link,
	description,
	technologies,
}) => {
	return (
		<ProjectContainer>
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
		</ProjectContainer>
	);
};

export default Project;
