import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalCSS from "./styles/GlobalCSS";
import Home from "./pages/Home";
import ContactPage from "./pages/Contact";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobalCSS />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </BrowserRouter>
);
