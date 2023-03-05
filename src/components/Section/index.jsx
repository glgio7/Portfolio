import SectionContainer from "./styles";

const Section = ({ sectionTitle, textContent, imagePath, buttonSpan }) => {
  return (
    <SectionContainer>
      <div className="images-box">
        <img className="images-box__main" src={imagePath} />
        <button className="images-box__button">{buttonSpan}</button>
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
