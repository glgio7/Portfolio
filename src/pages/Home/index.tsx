import Section from "../../components/Section";
import { RiArrowDownSLine } from "react-icons/ri";
import Title from "../../components/Title";

const nextSection = () => {
	window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
};

const Home = () => {
	return (
		<>
			<Section>
				<img src="/assets/general/clean-logo.svg" alt="" className="logo-top" />
				<div className="welcome-container">
					<h1>
						A <span>Fullstack</span>
					</h1>
					<h1>Developer</h1>
				</div>
				<div className="subtitle-container">
					<p className="p-slogan">
						Bringing flexibility, cost savings and easy communication in
						software development.
					</p>
					<RiArrowDownSLine
						className="see-more"
						onClick={() => nextSection()}
					/>
				</div>
			</Section>
			<Section>
				<article>
					<img
						src="/assets/general/glgioprofile.jpg"
						alt=""
						className="section__image"
					/>
				</article>
				<article>
					<Title text="About me" />
					<ul>
						<li>
							<span>
								I was born and raised in the world of computing. In the early
								2000s, during the internet cafe boom, as a child I realized the
								potential of technology to connect people. Since then, I have
								been motivated to explore the possibilities that technology
								offers.
							</span>
						</li>
						<li>
							<span>My first jobs were around 2010, with web design.</span>
						</li>
						<li>
							<span>
								Natural ability to observe reality, identify patterns, and make
								abstractions.
							</span>
						</li>
						<li>
							<span>
								Currently working with Node.js to deliver the best of back-end,
								front-end and mobile development.
							</span>
						</li>
						<li>
							<span>
								Studying Java as my secondary language, I'm always engaged in
								attending bootcamps and researching articles that add to my
								knowledge in the field.
							</span>
						</li>
					</ul>
				</article>
			</Section>
			<Section>
				<article>
					<img
						src="/assets/general/linux.png"
						alt=""
						className="section__image"
					/>
				</article>
				<article>
					<Title text="Skills" />
					<ul>
						<li>
							<img src="/assets/skills/html.png" className="skill-icon" />
							<img src="/assets/skills/css.png" className="skill-icon" />
							<img src="/assets/skills/javascript.png" className="skill-icon" />
							<span>The main technologies of web development.</span>
						</li>
						<li>
							<img src="/assets/skills/typescript.png" className="skill-icon" />
							<img src="/assets/skills/node.png" className="skill-icon" />
							<span>
								Typing in development with Node.js and Typescript for well-built
								software.
							</span>
						</li>
						<li>
							<img src="/assets/skills/react.png" className="skill-icon" />
							<img src="/assets/skills/vitejs.png" className="skill-icon" />
							<img src="/assets/skills/nextjs.png" className="skill-icon" />
							<span>
								A popular library for building dynamic interfaces and the best
								frameworks.
							</span>
						</li>
						<li>
							<img src="/assets/skills/firebase.png" className="skill-icon" />
							<img src="/assets/skills/mongodb.png" className="skill-icon" />
							<span>
								Firebase is a base platform that can streamline software
								development and MongoDB, the most widely used NoSQL database.
							</span>
						</li>
						<li>
							<img src="/assets/skills/sass.png" className="skill-icon" />
							<img src="/assets/skills/sc.png" className="skill-icon" />
							<span>
								A CSS preprocessor and a styling framework that brings
								convenience in development with React.js.
							</span>
						</li>
					</ul>
				</article>
			</Section>
			<Section>
				<article>
					<img
						src="/assets/general/certifications.png"
						alt=""
						className="section__image"
					/>
				</article>
				<article>
					<Title text="Certifications" />
					<ul>
						<li>
							<h3>Oracle and Alura</h3>
							<span>
								Certified by Oracle and Alura as a Front-End Developer
							</span>
						</li>
						<li>
							<h3>DIO</h3>
							<span>Certified in development with React and Typescript</span>
						</li>
						<li>
							<h3>ADA Santander</h3>
							<span>
								Studying Back-end Development in a course offered by Santander
								Bank.
							</span>
						</li>
						<li>
							<h3>Descomplica University</h3>
							<span>Studying Systems Analysis and Development</span>
						</li>
					</ul>
				</article>
			</Section>
		</>
	);
};

export default Home;
