import { useForm, ValidationError } from "@formspree/react";
import Container from "../../components/Container";
import PageTitle from "../../components/PageTitle";
import Form from "./styles";

const ContactPage = () => {
	const [state, handleSubmit] = useForm(import.meta.env.VITE_APP_FORMKEY);
	if (state.succeeded) {
		window.alert("Thanks for your interest! I'll get in touch soon.");
		window.location.href = "/";
	}

	return (
		<Container>
			<PageTitle text={"Get in Touch - Form"} />
			<Form onSubmit={handleSubmit}>
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

				<input
					disabled={state.submitting}
					className="submit-button"
					type="submit"
					value="Enviar"
				/>
			</Form>
		</Container>
	);
};

export default ContactPage;
