import { useRef, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import StyledContainer from "./styles";

const Container = ({ children}) => {
  const container = useRef();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    container.current.scrollTop >= 200 ? setScrolled(true) : setScrolled(false);
  };
  return (
    <StyledContainer ref={container} onScroll={handleScroll}>
      <Header scrolled={scrolled}/>
      {children}
        <Footer/>
    </StyledContainer>
  );
};

export default Container;
