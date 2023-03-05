import Container from "./styles";

const App = () => {
  return (
    <Container>
      <section>
        <div className="images-box">
          <img className="images-box__main" src="/assets/github-logo.png" />
          <button className="images-box__button">Visitar GitHub</button>
        </div>
        <article>
          <h1>Front-End Developer</h1>
          <p>
            Apaixonado por transformar ideias em realidade, trazer vida para as
            telas e criar experiências únicas para os usuários é o que me
            motiva! Unir habilidades técnicas e criatividade para construir
            interfaces incríveis que cativam e surpreendem.
          </p>
          <p>
            Com o poder da codificação, transformo designs em código vivo,
            construindo a web do amanhã com cada linha de código que escrevo.
          </p>
          <p>
            Todos os projetos de sucesso precisaram de profissionais de diversas
            áreas, cada um em sua especialidade, para tornar aquilo real. Isso é
            tecnologia! Minha dedicação e talento me permitem criar sites
            dinâmicos que impressionam e inspiram.
          </p>
          <p>
            Vamos unir arte, habilidade e técnica e continuar transformando a
            experiência web!
          </p>
        </article>
      </section>
      <section>
        <div className="images-box">
          <img className="images-box__main" src="/assets/glgioprofile.jpg" />
          <button className="images-box__button">
            Visitar LinkedIn
          </button>
        </div>
        <article>
          <h1>About me</h1>
          <p>
            Com 26 anos de idade, tive meu primeiro contato com um computador há
            mais de 20 anos. Como toda criança, comecei jogando e logo
            desenvolvi habilidades em fazer pesquisas. Sempre fui muito curioso
            e os jogos me encantavam, principalmente quando contavam histórias
            interessantes que eu queria saber mais.
          </p>
          <p>
            Em 2010, quando o Youtube começou a ganhar popularidade no Brasil,
            comecei a monetizar alguns trabalhos de design para canais. Utilizei
            ferramentas como Photoshop, After Effects e Cinema 4D, o que me
            proporcionou conhecimentos em UI/UX. Nessa época, fiz um curso
            técnico em TI e tive meu primeiro contato contato com HTML. Anos
            depois, por incentivo de um tio que sou muito grato, retomei os
            estudos e me tornei programador.
          </p>
          <p>
            Sempre tive uma habilidade natural de observar a realidade,
            identificar padrões e fazer abstrações. Apesar de tendências
            comportamentais inatas a cada pessoa, acredito que essa habilidade
            possa ser desenvolvida por qualquer um, com tempo, dedicação e as
            influências certas. Além de ser um entusiasta da tecnologia, também
            tenho grande interesse em psicologia. Como se costuma dizer, "somos
            a média das pessoas com quem mais convivemos", e eu sou grato pelas
            boas influências em minha vida.
          </p>
          <p>
            Nesta sessão, gostaria de expressar minha gratidão a familiares,
            amigos e pessoas públicas que me influenciaram a me tornar uma
            pessoa melhor.
          </p>
        </article>
      </section>
      <section>
        <div className="images-box">
          <img className="images-box__main" src="/assets/projects_skills.png" />
          <button className="images-box__button">
            Visitar Projetos
          </button>
        </div>
        <article>
          <h1>Skills and Jobs</h1>
          <p>
            Conhecimentos em: HTML | CSS | SASS | Javascript | React.js +
            FrameWorks | NodeJS
          </p>
          <p>
            Conhecimentos gerais como lógica, gramática, ortogonalidade,
            abstrações e percepção de padrões me diferenciam como profissional.
            Além destes conhecimentos gerais, possuo amplo conhecimento em HTML,
            CSS, Javascript, e em especial React.js.
          </p>
          <p>
            Desenvolvimento com React é o que mais me interessa. Em meus
            trabalhos frequentemente utilizo React Hooks, conceitos de SPA e
            WPA, consumo e criação de APIs com JSON e Styled Components.
          </p>
          <p>
            Atualmente, estou cursando Análise e Desenvolvimento de Sistemas na
            UniAmérica e procuro participar de bootcamps na DIO sempre que
            possível. Além disso, atualmente faço parte de um programa de bolsa
            de estudos na Alura oferecido pela Oracle.
          </p>
        </article>
      </section>
      <section>
        <div className="images-box">
          <img className="images-box__main" src="/assets/contact-image.jpg" />
          <button className="images-box__button">
            Entrar em contato
          </button>
        </div>
        <article>
          <h1>Contact-me</h1>
          <p>
            Se você se interessou pelo meu trabalho, há 3 motivos pelos quais
            você pode entrar em contato comigo.
          </p>
          <p>
            Para discutir uma proposta ou ideia que você tenha em mente e que
            possa ser executada com as minhas habilidades.
          </p>
          <p>
            Para esclarecer qualquer dúvida que possa ter sobre o meu trabalho
            ou processo de desenvolvimento.
          </p>
          <p>
            Para fazer sugestões sobre como podemos melhorar o projeto em que
            estamos trabalhando juntos. Basta clicar no botão entrar em contato
            ou em "contato" no menu de navegação, e você será redirecionado.
          </p>
          <p>
            Agradeço pela sua visita e aguardo ansiosamente para trabalharmos
            juntos!
          </p>
        </article>
      </section>
    </Container>
  );
};

export default App;
