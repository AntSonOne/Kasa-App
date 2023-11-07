import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./assets/styles/index.scss";
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import NotFound from "./pages/NotFound/index";
import Housing from "./pages/Housing/index";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
