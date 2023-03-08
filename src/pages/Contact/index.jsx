import ContactContainer from "./styles";
import Header from "../../components/Header"
import Footer from "../../components/Footer";

const ContactPage = () => {

    return (
        <>
        <Header/>
        <ContactContainer>
        <form>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" name="message" required></textarea>
            <input className="submit-button" type="submit" value="Enviar"/>
        </form>
        <Footer/>
        </ContactContainer>
        </>
    )
}

export default ContactPage;