import { useRef, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import StyledContainer from "./styles";

const Container = ({ children }) => {
  const container = useRef();
  const [scrolled, setScrolled] = useState(false);

  let [pageTranslated, setPageTranslated] = useState("");

  const translate = () => {
    const reference = window.location.href.split("/");

    if (reference[reference.length - 1] === "") {
      setPageTranslated(
        "https://glgio7-vercel-app.translate.goog/?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt-BR&_x_tr_pto=wapp"
      );
    } else
      setPageTranslated(
        `https://glgio7-vercel-app.translate.goog/${
          reference[reference.length - 1]
        }?_x_tr_sl=pt&_x_tr_tl=en&_x_tr_hl=pt-BR&_x_tr_pto=wapp`
      );
    };
    
  const handleScroll = () => {
    container.current.scrollTop >= 100 ? setScrolled(true) : setScrolled(false);
  };
  return (
    <StyledContainer ref={container} onScroll={handleScroll} onLoad={translate}>
      <Header scrolled={scrolled} />
      {children}
      <a href={pageTranslated}>
        <div className="translator">
          <img src="/assets/pt-br.png" alt="Icone Brasil - por FlatIcon" />
        </div>
      </a>
      <Footer />
    </StyledContainer>
  );
};

export default Container;
