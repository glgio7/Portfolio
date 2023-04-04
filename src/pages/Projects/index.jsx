import Container from "../../components/Container";
import PageTitle from "../../components/PageTitle";
import Project from "../../components/Project";

const ProjectsPage = () => {
	return (
		<Container>
			<PageTitle text={"Projects - Technologies & Short Description"} />
			<Project
				name={"Climaki"}
				imagePath={"climaki-logo.png"}
				description={
					"Climaki is a single page application built with React and Typescript. It utilizes the OpenWeather API to provide current, daily, and weekly weather information for any city in the world. It features a minimalist and intuitive design with the purpose of being easy to use and consuming minimal internet data while in use."
				}
				link={"https://climaki.vercel.app"}
				technologies={
					"React, Typescript, OpenWeather API, React Hooks, SPA, Styled Components & more."
				}
			/>
			<Project
				name={"JDM Nation"}
				imagePath={"jdm-nation-logo.png"}
				description={
					"JDM Nation is an Encyclopedia of Japanese cars. It's a fully dynamic application where only database maintenance is required to provide users with new information. Users can access information about cars, and if they're registered on the platform, they can also add cars and their respective information, watch videos, and add items to favorites. The idea is for the application to evolve into a social network dedicated to Japanese car enthusiasts in the future."
				}
				link={"https://jdmnation.vercel.app"}
				technologies={
					"React, Vite.js, Javascript , Google Firebase, Youtube API, React Hooks, SPA, Context API, Styled Components & more."
				}
			/>
			<Project
				name={"GitHub Wiki"}
				imagePath={"github-wiki-logo.png"}
				description={
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab quas quae amet placeat error, magnam expedita aliquam recusandae possimus aspernatur similique repellendus, laborum esse nihil obcaecati. Eligendi eius illo numquam."
				}
				link={"https://dio-githubwiki.vercel.app"}
				technologies={
					"React.js, GitHub API, SPA, React Hooks, Styled Components & more."
				}
			/>
			<Project
				name={"Central Sight Alura"}
				imagePath={"centralsight-logo.png"}
				description={
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab quas quae amet placeat error, magnam expedita aliquam recusandae possimus aspernatur similique repellendus, laborum esse nihil obcaecati. Eligendi eius illo numquam."
				}
				link={"https://centralsight.netlify.app/"}
				technologies={"Vanilla Javascript, HTML, CSS, Canva, & more."}
			/>
			<Project
				name={"Calculadora DIO"}
				imagePath={"calc-dio-logo.png"}
				description={
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab quas quae amet placeat error, magnam expedita aliquam recusandae possimus aspernatur similique repellendus, laborum esse nihil obcaecati. Eligendi eius illo numquam."
				}
				link={"https://dio-calculator-six.vercel.app"}
				technologies={"React.js, useState, Styled Components & more."}
			/>
			<Project
				name={"Decoder Oracle"}
				imagePath={"decoder-logo.png"}
				description={
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab quas quae amet placeat error, magnam expedita aliquam recusandae possimus aspernatur similique repellendus, laborum esse nihil obcaecati. Eligendi eius illo numquam."
				}
				link={"https://glgio7.github.io/ChallengeOne-Decodificador/"}
				technologies={"Vanilla Javascript, HTML, CSS, & more."}
			/>
			<Project
				name={"Watchous"}
				imagePath={"watchous-logo.png"}
				description={
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab quas quae amet placeat error, magnam expedita aliquam recusandae possimus aspernatur similique repellendus, laborum esse nihil obcaecati. Eligendi eius illo numquam."
				}
				link={"https://watchous.netlify.app/"}
				technologies={
					"React.js, TMDB API, Youtube API, SPA, React Hooks, Styled Components & more."
				}
			/>
			<Project
				name={"Iching Online"}
				imagePath={"iching-logo.png"}
				description={
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab quas quae amet placeat error, magnam expedita aliquam recusandae possimus aspernatur similique repellendus, laborum esse nihil obcaecati. Eligendi eius illo numquam."
				}
				link={"https://oiching.netlify.app/"}
				technologies={
					"React, Vite.js, Typescript, Styled Components, React hooks in addition to a lot of logic to the tokens generator, & more."
				}
			/>
			<Project
				name={"Magick Hub"}
				imagePath={"magickhub-logo.png"}
				description={
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab quas quae amet placeat error, magnam expedita aliquam recusandae possimus aspernatur similique repellendus, laborum esse nihil obcaecati. Eligendi eius illo numquam."
				}
				link={"https://magickhub.vercel.app"}
				technologies={
					"React.js, Next.js, API Rest, SPA, React Hooks, Styled Components, AI Art Generator for illustrations & more."
				}
			/>
			<Project
				name={"Evermind"}
				imagePath={"evermind-logo.png"}
				description={
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab quas quae amet placeat error, magnam expedita aliquam recusandae possimus aspernatur similique repellendus, laborum esse nihil obcaecati. Eligendi eius illo numquam."
				}
				link={"https://evermind.vercel.app"}
				technologies={
					"React.js, Next.js, SPA, React Hooks, Context API, ThemeProvider from Styled Components & more."
				}
			/>
			<Project
				name={"Tasker"}
				imagePath={"utasker-logo.png"}
				description={
					"The purpose of this application is to provide a high-quality user experience and user interface, allow separation of notes by category, provide tools for organization and planning, and save data to localStorage so users don't have to register. "
				}
				link={"https://utasker.vercel.app"}
				technologies={
					"React.js, localStorage, React Router DOM, SPA, React Hooks, Context API, ThemeProvider from Styled Components & more."
				}
			/>
		</Container>
	);
};

export default ProjectsPage;
