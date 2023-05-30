import { useForm, ValidationError } from "@formspree/react";
import { useNavigate } from "react-router-dom";
import Title from "../../components/Title";
import * as S from "./styles";
import Section from "../../components/Section";
import { RiArrowDownSLine, RiFile2Fill } from "react-icons/ri";

const nextSection = () => {
	window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
};

const ContactPage = () => {
	const navigate = useNavigate();
	const [state, handleSubmit] = useForm(import.meta.env.VITE_APP_FORMKEY);
	if (state.succeeded) {
		window.alert("Thanks for your interest! I'll get in touch soon.");
		navigate("/");
		window.scrollTo(0, 0);
	}

	return (
		<S.Contact>
			<Section>
				<article>
					<img
						src="/assets/general/contact.jpg"
						alt=""
						className="section__image"
					/>
				</article>
				<article>
					<Title text="Get in touch" />
					<ul>
						<li>
							<span>
								If you're interested in my work, there is a form to get in touch
								with me.
							</span>
							<RiArrowDownSLine
								className="see-more"
								onClick={() => nextSection()}
							/>
						</li>
					</ul>
				</article>
			</Section>
			<Section>
				<Title text={"Form"} className="alternative-title" />
				<S.Form onSubmit={handleSubmit}>
					<label htmlFor="name">Name</label>
					<input type="text" id="name" name="name" required />
					<ValidationError prefix="Name" field="name" errors={state.errors} />

					<label htmlFor="email">Email</label>
					<input type="email" id="email" name="email" required />
					<ValidationError prefix="Email" field="email" errors={state.errors} />

					<label htmlFor="message">Message</label>
					<textarea id="message" name="message" required />
					<ValidationError
						prefix="Message"
						field="message"
						errors={state.errors}
					/>
					{!state.submitting && (
						<input
							disabled={state.submitting}
							type="submit"
							value="Send form"
						/>
					)}
					{state.submitting && (
						<S.FormLoader>
							<div className="spinner">
								<div className="spinner1"></div>
							</div>
						</S.FormLoader>
					)}
				</S.Form>
				<div className="util-container">
					<Title text={"Download CV"} className="alternative-title" />
					<a
						href="/assets/files/curriculum.pdf"
						download
						className={"file-download"}
					>
						<RiFile2Fill />
					</a>
				</div>
				<div className="util-container">
					<Title text={"Useful Links"} className="alternative-title" />
					<a href="https://github.com/glgio7/" target="_blank">
						<img
							src="/assets/links/github.svg"
							alt=""
							className="util-container__icon"
						/>
					</a>
					<a href="https://linkedin.com/in/giovane-lucas/" target="_blank">
						<img
							src="/assets/links/linkedin.svg"
							alt=""
							className="util-container__icon"
						/>
					</a>
					<a href="http://wa.me/+5511949379496" target="_blank">
						<img
							src="/assets/links/whatsapp.svg"
							alt=""
							className="util-container__icon"
						/>
					</a>
					<a href="mailto:giovanelucas00@outlook.com" target="_blank">
						<img
							src="/assets/links/mail.svg"
							alt=""
							className="util-container__icon"
						/>
					</a>
				</div>
			</Section>
		</S.Contact>
	);
};

export default ContactPage;
