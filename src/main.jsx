import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalCSS from "./styles/GlobalCSS";
import Home from "./pages/Home";
import ContactPage from "./pages/Contact";
import ProjectsPage from "./pages/Projects";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobalCSS />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  </BrowserRouter>
);
