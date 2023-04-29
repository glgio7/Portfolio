import Container from "../../components/Container";
import Section from "../../components/Section";

const openingParagraphs = [
	"Passionate about turning ideas into reality, bringing screens to life, and creating unique experiences for users is what motivates me! Combining technical skills and creativity to build amazing interfaces that truly satisfy.",
	"All successful projects require professionals from different fields, each in their own specialty, to make it real. That's technology! ",
	"With the power of coding, I turn designs into living code, building tomorrow's web with every line of code I write.",
	"Let's unite art, skill, and technique and keep transforming the web experience!",
];
const aboutMeParagraphs = [
	"Currently at 26 years old, my first contact with a computer was through games, over 20 years ago. I have always been very curious and games fascinated me, especially when they had interesting stories. So, I quickly developed a huge interest in learning and along with it, skills in conducting research.",
	"In 2010, when Youtube began to gain popularity in Brazil, I started monetizing some design work for channels. I used tools like Photoshop, After Effects, and Cinema 4D, which gave me knowledge in UI/UX. During this time, I took a technical course in IT and had my first contact with HTML. Years later, encouraged by an uncle for whom I am very grateful, I resumed my studies and became a programmer.",
	'I have always had a natural ability to observe reality, identify patterns, and make abstractions. Despite innate behavioral tendencies in each person, I believe this skill can be developed by anyone with time, dedication, and the right influences. In addition to being a technology enthusiast, I also have a great interest in psychology. As they say, "we are the average of the people we spend the most time with," and I am grateful for the good influences in my life.',
];
const skillsParagraphs = [
	"General knowledge in logic, grammar, orthogonality, abstractions, and pattern recognition set me apart as a professional. Along with these general skills, I possess extensive knowledge in all technologies in the list above.",
	"I am most interested in development with React and Typescript. In my work, I frequently use React Hooks, Styled Components, SPA and PWA concepts, API consumption and creation with Node.js.",
	"Currently, I am studying Systems Analysis and Development at UniAmérica and seek to participate in bootcamps at DIO whenever possible. Additionally, I am currently part of a scholarship program at Alura offered by Oracle.",
];
const contactMe = [
	"If you're interested in my work, there are 3 reasons why you can get in touch with me. Just click on the \"get in touch\" button or link in the navigation menu, and you'll be redirected.",
	"∙To discuss a proposal or idea you have in mind that can be executed with my skills.",
	"∙To clarify any doubts you may have about my work or development process.",
	"∙To make suggestions on how we can improve the project we're working on together.",
	"Thank you for visiting, and I look forward to working together!",
];

const Home = () => {
	return (
		<>
			<Container>
				<Section
					first={true}
					imagePath={"/assets/gl-logo.svg"}
					sectionTitle={"Front-End Developer"}
					buttonSpan={"Visit GitHub"}
					textContent={openingParagraphs}
					route={"https://github.com/glgio7"}
				/>
				<Section
					imagePath={"/assets/glgioprofile.jpg"}
					sectionTitle={"About me"}
					buttonSpan={"Visit LinkedIn"}
					textContent={aboutMeParagraphs}
					route={"https://linkedin.com/in/giovane-lucas/"}
				/>
				<Section
					imagePath={"/assets/projects_skills.png"}
					sectionTitle={"Skills and Projects"}
					buttonSpan={"Visit Projects"}
					textContent={skillsParagraphs}
					skillsList={[
						"css",
						"html",
						"javascript",
						"typescript",
						"node",
						"firebase",
						"mongodb",
						"react",
						"nextjs",
						"vitejs",
						"sass",
						"sc",
					]}
					route={"/projects"}
				/>
				<Section
					imagePath={"/assets/contact-image.jpg"}
					sectionTitle={"Contact-me"}
					buttonSpan={"Get in touch"}
					textContent={contactMe}
					route={"/contact"}
				/>
			</Container>
		</>
	);
};

export default Home;
