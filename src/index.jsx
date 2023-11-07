import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./assets/styles/index.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About/index";
import Home from "./pages/Home/index";
import Housing from "./pages/Housing/index";
import NotFound from "./pages/NotFound/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/housing" element={<Housing />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </React.StrictMode>
);
