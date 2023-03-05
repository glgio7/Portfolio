import ContactContainer from "./styles";

const ContactPage = () => {
    return (

        <ContactContainer>
        <form>
            <label for="name">Nome:</label>
            <input type="text" id="name" name="name" />
            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" />
            <label for="message">Mensagem:</label>
            <textarea id="message" name="message"></textarea>
            <input className="submit-button" type="submit" value="Enviar"/>
        </form>
        </ContactContainer>
    )
}

export default ContactPage;