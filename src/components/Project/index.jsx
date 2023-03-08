import ProjectContainer from "./styles";

const Project = ( { imagePath, name, description}) => {
    return (
      <ProjectContainer>
        <div className="image-box">
            <img src={`/assets/projects/${imagePath}`} />
            <span>{name}</span>
          </div>
          <article>
           {description}
          </article>
      </ProjectContainer>
    );
  };
  
  export default Project;