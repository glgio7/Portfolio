import Container from "../../components/Container";
import PageTitle from "../../components/PageTitle";
import Form from "./styles";

const ContactPage = () => {
	return (
		<>
			<Container>
				<PageTitle text={"Get in Touch - Form"} />
				<Form>
					<label htmlFor="name">Name</label>
					<input type="text" id="name" name="name" required />
					<label htmlFor="email">E-mail</label>
					<input type="email" id="email" name="email" required />
					<label htmlFor="message">Message</label>
					<textarea id="message" name="message" required></textarea>
					<input className="submit-button" type="submit" value="Enviar" />
				</Form>
			</Container>
		</>
	);
};

export default ContactPage;
