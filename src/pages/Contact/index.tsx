import { useForm, ValidationError } from "@formspree/react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import * as S from "./styles";

const ContactPage = () => {
	const navigate = useNavigate();
	const [state, handleSubmit] = useForm(import.meta.env.VITE_APP_FORMKEY);
	if (state.succeeded) {
		window.alert("Thanks for your interest! I'll get in touch soon.");
		navigate("/");
	}

	return (
		<>
			<PageTitle text={"Get in Touch - Form"} />
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

				<input disabled={state.submitting} type="submit" value="Send form" />
			</S.Form>
		</>
	);
};

export default ContactPage;
