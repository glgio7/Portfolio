import ProjectContainer from "./styles";

const Project = ( { imagePath, name, link, description, technologies}) => {
    return (
      <ProjectContainer>
        <div className="image-box">
            <img src={`/assets/projects/${imagePath}`} />
            <a href={link} target="_blank" className="visit-link">
            Visit
            </a>
          </div>
          <article>
            <h1>{name}</h1>
            <p>
           {description}
            </p>
           <h2>Technologies:<span>{technologies}</span></h2>
          </article>
      </ProjectContainer>
    );
  };
  
  export default Project;