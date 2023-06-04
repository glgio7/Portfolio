import * as S from "./styles";
import Title from "../../components/Title";
import Section from "../../components/Section";
import { RiArrowDownSLine, RiFile2Fill } from "react-icons/ri";
import { useMail } from "../../hooks/useMail";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const nextSection = () => {
	window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
};

const ContactPage = () => {
	const defaultForm = {
		name: "",
		address: "",
		message: "",
	};

	const { state, handleSubmit } = useMail();
	const [form, setForm] = useState(defaultForm);

	const navigate = useNavigate();

	useEffect(() => {
		if (state.succeeded) {
			setForm(defaultForm);
			navigate("/");
			window.alert("Thanks for your interest! I'll get in touch soon.");
		}
	}, [state.succeeded]);

	const handleForm = (field: string, value: string) => {
		setForm((form) => {
			return { ...form, [field]: value };
		});
	};

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
				<S.Form
					onSubmit={(e) => {
						e.preventDefault();
						handleSubmit(form);
					}}
				>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						id="name"
						name="name"
						required
						onChange={(e) => handleForm("name", e.target.value)}
					/>

					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						required
						onChange={(e) => handleForm("address", e.target.value)}
					/>

					<label htmlFor="message">Message</label>
					<textarea
						id="message"
						name="message"
						required
						onChange={(e) => handleForm("message", e.target.value)}
					/>

					{!state.submitting && (
						<button disabled={state.submitting} type="submit">
							Send form
						</button>
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
