import Title from "../../components/Title";
import Project from "../../components/Project";
import * as S from "./styles";

const ProjectsPage = () => {
	return (
		<S.ProjectsPage>
			<Title text={"Main Projects"} className="alternative-title" />
			<Project
				name={"Climaki"}
				screenshot={"screenshot-climaki.png"}
				iconPath={"climaki-logo.png"}
				description={
					"Climaki is a single page application built with React and Typescript. It utilizes the OpenWeather API to provide current, daily, and weekly weather information for any city in the world. It features a minimalist and intuitive design with the purpose of being easy to use and consuming minimal internet data while in use."
				}
				link={"https://climaki.vercel.app"}
				technologies={{
					frontend:
						"React, Typescript, OpenWeather API, React Hooks, SPA, Styled Components & more.",
					backend: "No back-end developed for this project.",
				}}
			/>
			<Project
				name={"JDM Nation"}
				screenshot={"screenshot-jdm-nation.png"}
				iconPath={"jdm-nation-logo.png"}
				description={
					"JDM Nation is an Encyclopedia of Japanese cars. It's a fully dynamic application where only database maintenance is required to provide users with new information. Users can access information about cars, and if they're registered on the platform, they can also add cars and their respective information, watch videos, and add items to favorites. The idea is for the application to evolve into a social network dedicated to Japanese car enthusiasts in the future."
				}
				link={"https://jdmnation.vercel.app"}
				technologies={{
					frontend:
						"React, Vite.js, Javascript , Google Firebase, Youtube API, React Hooks, SPA, Context API, Styled Components & more.",

					backend:
						"Google Firebase is a BaaS and was used for this project back-end.",
				}}
			/>
			<Project
				name={"Ifood Helper"}
				screenshot={"screenshot-ifoodhelper.png"}
				iconPath={"ifoodhelper-logo.png"}
				description={
					"Ifood Helper is an app for app delivery people inspired by the Waze app. The user must perform a simple registration to take advantage of all the features, such as adding and evaluating the alerts already added on the map. Negatively rated alerts are deleted from the database after receiving 3 negative votes."
				}
				link={"https://ifoodhelper.vercel.app"}
				technologies={{
					frontend:
						"Typescript, React + Vite, Leaflet, OpenStreetMap API, Axios, Custom Hooks, Styled Components & more.",
					backend:
						"Typescript, Clean Architecture, TDD with Vitest, Cors, Express, MongoDB, Bcrypt, JWT.",
				}}
			/>
			<Project
				name={"Watchous"}
				screenshot={"screenshot-watchous.png"}
				iconPath={"watchous-logo.png"}
				description={
					"Watchous is a movie trailer and review portal built with React+TypeScript and designed to provides up-to-date information on movies. The users can signup, favorite movies, and customize their profiles, and movies playlists. It utilizes various technologies on both the front-end and back-end. With integration to the TMDB API, I found a way to get all the front end data using some params, therefore it's not necessary to upload any file to our database, making the use of file upload libraries unnecessary."
				}
				link={"https://watchous.vercel.app/"}
				technologies={{
					frontend:
						"Typescript, PWA, React + Vite, TMDB API, Axios, Custom Hooks, Styled Components & more.",
					backend:
						"Typescript, Clean Architecture, TDD with Vitest, Cors, Express, MongoDB, Bcrypt, JWT.",
				}}
			/>
			<Project
				name={"Iching Online"}
				screenshot={"screenshot-iching.png"}
				iconPath={"iching-logo.png"}
				description={
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab quas quae amet placeat error, magnam expedita aliquam recusandae possimus aspernatur similique repellendus, laborum esse nihil obcaecati. Eligendi eius illo numquam."
				}
				link={"https://oiching.netlify.app/"}
				technologies={{
					frontend:
						"React, Vite.js, Typescript, Styled Components, React hooks in addition to a lot of logic to the tokens generator, & more.",
					backend: "No back-end developed for this project.",
				}}
			/>
			<Project
				name={"Magick Hub"}
				screenshot={"screenshot-magickhub.png"}
				iconPath={"magickhub-logo.png"}
				description={
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab quas quae amet placeat error, magnam expedita aliquam recusandae possimus aspernatur similique repellendus, laborum esse nihil obcaecati. Eligendi eius illo numquam."
				}
				link={"https://magickhub.vercel.app"}
				technologies={{
					frontend:
						"React.js, Next.js, API Rest, SPA, React Hooks, Styled Components, AI Art Generator for illustrations & more.",
					backend:
						"Except using Next.js which uses SSR, there's no back-end developed for this project.",
				}}
			/>
			<Project
				name={"Evermind"}
				screenshot={"screenshot-evermind.png"}
				iconPath={"evermind-logo.png"}
				description={
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab quas quae amet placeat error, magnam expedita aliquam recusandae possimus aspernatur similique repellendus, laborum esse nihil obcaecati. Eligendi eius illo numquam."
				}
				link={"https://evermind.vercel.app"}
				technologies={{
					frontend:
						"React.js, Next.js, SPA, React Hooks, Context API, ThemeProvider from Styled Components & more.",
					backend: "No back-end developed for this project.",
				}}
			/>
			<Project
				name={"Tasker"}
				screenshot={"screenshot-utasker.png"}
				iconPath={"utasker-logo.png"}
				description={
					"The purpose of this application is to provide a high-quality user experience and user interface, allow separation of notes by category, provide tools for organization and planning, and save data to localStorage so users don't have to register. "
				}
				link={"https://utasker.vercel.app"}
				technologies={{
					frontend:
						"React.js, localStorage, React Router DOM, SPA, React Hooks, Context API, ThemeProvider from Styled Components & more.",
					backend: "No back-end developed for this project.",
				}}
			/>
			<Title text={"Bootcamps"} className="alternative-title" />
			<Project
				name={"GitHub Wiki"}
				screenshot={"screenshot-github-wiki.png"}
				iconPath={"github-wiki-logo.png"}
				description={
					"This project is a simple application that uses the GitHub API to list a user's repositories. It was developed in response to a challenge proposed by the DIO bootcamp platform. Users can remove repositories from the list and access the link to each repository when performing a search."
				}
				link={"https://dio-githubwiki.vercel.app"}
				technologies={{
					frontend:
						"React.js, GitHub API, SPA, React Hooks, Styled Components & more.",
					backend: "No back-end developed for this project.",
				}}
			/>
			<Project
				name={"Central Sight Alura"}
				screenshot={"screenshot-centralsight.png"}
				iconPath={"centralsight-logo.png"}
				description={
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab quas quae amet placeat error, magnam expedita aliquam recusandae possimus aspernatur similique repellendus, laborum esse nihil obcaecati. Eligendi eius illo numquam."
				}
				link={"https://centralsight.netlify.app/"}
				technologies={{
					frontend: "Vanilla Javascript, HTML, CSS, Canva, & more.",
					backend: "No back-end developed for this project.",
				}}
			/>
			<Project
				name={"Calculadora DIO"}
				screenshot={"screenshot-calc-dio.png"}
				iconPath={"calc-dio-logo.png"}
				description={
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab quas quae amet placeat error, magnam expedita aliquam recusandae possimus aspernatur similique repellendus, laborum esse nihil obcaecati. Eligendi eius illo numquam."
				}
				link={"https://dio-calculator-six.vercel.app"}
				technologies={{
					frontend: "React.js, React Hooks, Styled Components & more.",
					backend: "No back-end developed for this project.",
				}}
			/>
			<Project
				name={"Decoder Oracle"}
				screenshot={"screenshot-decoder.png"}
				iconPath={"decoder-logo.png"}
				description={
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab quas quae amet placeat error, magnam expedita aliquam recusandae possimus aspernatur similique repellendus, laborum esse nihil obcaecati. Eligendi eius illo numquam."
				}
				link={"https://glgio7.github.io/ChallengeOne-Decodificador/"}
				technologies={{
					frontend: "Vanilla Javascript, HTML, CSS, & more.",
					backend: "No back-end developed for this project.",
				}}
			/>
		</S.ProjectsPage>
	);
};

export default ProjectsPage;
