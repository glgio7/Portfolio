import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalCSS } from "./styles/GlobalCSS";
import App from "./pages/index";
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <GlobalCSS />
    <Header/>
    <App />
    <Footer/>
  </>
);
