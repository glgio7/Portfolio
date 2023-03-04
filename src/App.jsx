import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 2rem; */

  img {
    width: 100%;
  }

  section {
    /* margin-top: 2rem; */
    border: 3px solid #fff;
    min-height: 100vh;

    display: flex;
    /* align-items: center; */
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  h1 {
    width: 100%;
    font-size: 2rem;
    color: #fff;
  }

  .images-box {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .images-box__main {
    width: 360px;
    border-radius: 50%;
  }

  .images-box__span {
    margin-top: 1rem;
  }

  article {
    width: 50%;
  }
  p {
    max-width: 100%;
    color: #fff;
  }

  /* @media screen and (max-width: 900px){
    section{
      flex-direction: column;
      align-items: center;
    }

    .main-image {
    width: 240px;
    }
    
    p{max-width: 100%;}
  } */
`;

const App = () => {
  return (
    <Container>
      <section>
        <div className="images-box">
          <img className="images-box__main" src="/src/assets/github-logo.png" />
          <span className="images-box__span">Lorem ipsum dolor sit amet.</span>
        </div>
        <article>
          <h1>Front-End Developer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            dignissimos expedita fugit hic voluptatum non. Quia ab nisi officiis
            id sit distinctio itaque sunt aliquam. Nam ipsa eum labore magnam
            nostrum illo ipsum id veritatis voluptates quas incidunt corrupti
            magni, adipisci ipsam nulla a voluptatum nesciunt neque quasi sunt
            ex nisi facilis assumenda soluta. Nobis distinctio et quos corrupti
            culpa voluptas nemo, ipsum deleniti consectetur laudantium
            accusamus, dolore esse molestias. Iure itaque ab nihil commodi,
            labore deserunt suscipit? Accusantium dolor vitae, ipsa officia, sit
            dolore minima maiores officiis harum optio, earum laborum fuga
            dignissimos ut facere magnam deleniti totam non.
          </p>
        </article>
      </section>
      <section>
        <div className="images-box">
          <img
            className="images-box__main"
            src="/src/assets/glgioprofile.jpg"
          />
          <span className="images-box__span">Lorem ipsum dolor sit amet.</span>
        </div>
        <article>
          <h1>About me</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus,
            recusandae? Facere explicabo eius non voluptates est sapiente ipsum
            voluptate vel mollitia amet nihil, molestiae quidem harum
            architecto. Necessitatibus nisi reiciendis exercitationem placeat
            ipsa voluptatum similique maxime quos? Esse facere consectetur quam
            accusamus. Maxime natus laudantium expedita possimus doloremque.
            Recusandae maiores, harum, tempore esse saepe alias temporibus
            minima provident doloremque nemo doloribus cupiditate labore
            sapiente rem repudiandae laborum numquam nobis tempora expedita est
            reiciendis adipisci. Error repudiandae, officiis laborum soluta
            debitis vitae assumenda totam officia, libero facere veritatis a
            cumque rerum aperiam quas? Nisi aspernatur, vero aliquam neque porro
            atque possimus.
          </p>
        </article>
      </section>
      <section>
        <div className="images-box">
          <img
            className="images-box__main"
            src="/src/assets/projects_skills.png"
          />
          <span className="images-box__span">Lorem ipsum dolor sit amet.</span>
        </div>
        <article>
          <h1>Skills and Jobs</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
            fugit iusto qui, nobis dignissimos animi quaerat illo accusamus
            optio eaque omnis, explicabo ullam, amet expedita sunt! Itaque omnis
            soluta neque molestias repudiandae consectetur sapiente quibusdam
            nemo. Reprehenderit recusandae dicta autem laborum totam saepe,
            nulla odit mollitia id minus explicabo sint architecto amet quia
            optio cupiditate nihil. Aperiam iusto quae, nostrum ratione esse
            rem. Iure explicabo ratione hic dolorum beatae natus libero!
            Necessitatibus, atque. Maxime, tempora quibusdam neque aut rem
            perspiciatis.
          </p>
        </article>
      </section>
      <section>
        <div className="images-box">
          <img
            className="images-box__main"
            src="/src/assets/contact-image.jpg"
          />
          <span className="images-box__span">Lorem ipsum dolor sit amet.</span>
        </div>
        <article>
          <h1>Contact-me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
            voluptatibus. Iure, porro, delectus illo fugit repellat fuga odio
            eligendi accusamus ipsum atque repellendus dicta maiores reiciendis
            itaque neque sunt ipsa voluptatibus! Nesciunt temporibus nostrum
            eaque est. Possimus repudiandae, error tempore accusantium excepturi
            perferendis inventore dolores omnis quo sapiente non doloremque,
            tempora delectus voluptatum rem autem? Sapiente, ratione illo!
            Veritatis, ad molestias. Eligendi fugit at fugiat, assumenda atque
            blanditiis earum deserunt, quam cumque quaerat ex repellat ipsa
            magni ipsum labore commodi dolorem repudiandae dolore! Quasi
            laudantium velit, consequatur in eveniet enim.
          </p>
        </article>
      </section>
    </Container>
  );
};

export default App;
