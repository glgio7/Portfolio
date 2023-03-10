import Header from "../../components/Header";
import Container from "../../components/Container";
import Form from "./styles";

const ContactPage = () => {
	return (
		<>
			<Header />
			<Container>
				<Form>
					<label htmlFor="name">Nome:</label>
					<input type="text" id="name" name="name" required />
					<label htmlFor="email">E-mail:</label>
					<input type="email" id="email" name="email" required />
					<label htmlFor="message">Mensagem:</label>
					<textarea id="message" name="message" required></textarea>
					<input className="submit-button" type="submit" value="Enviar" />
				</Form>
			</Container>
		</>
	);
};

export default ContactPage;
