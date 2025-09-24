import React from "react";

import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

const App = () => {
  return (
    <div>
      <Header/>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
