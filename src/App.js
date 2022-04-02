import heroImage from "./cascais-lighthouse.jpg";
import "./App.css";
import About from "./About";
import Experiences from "./Experiences";
import Contact from "./Contact";
import React from "react";
import Coffee from "./Coffee";

function App() {
  return (
    <div className="App">
      <div className="body-app">
        <header className="App-header">
          <img
            src={heroImage}
            className="hero-image"
            alt="cascais lighthouse"
          />

          <h1 className="title">Cascais</h1>
          <h2 classname="subtitle">
            A pocket guide with the best tips for making the most of your trip
            to Cascais without taking away the joy of discovery.
          </h2>
        </header>
      </div>
      <About />
      <Experiences />
      <Coffee />
      <Contact />
      <footer>
        <p>
          Coded by Candice Tomkins. Open-sourced on{" "}
          <a href="https://github.com/CandiceTomkins" alt="GitHub">
            GitHub
          </a>
          <br />
          <a
            href="mailto:candicetomkins@gmail.com"
            alt="email-address"
            className="social-link"
          >
            Email
          </a>
          <a
            href="https://github.com/CandiceTomkins"
            alt="GitHub"
            className="social-link"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/candice-tomkins-3b2129102"
            alt="linkedin-link"
            className="social-link"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com/soi55lifestyle"
            alt="instagram-link"
            className="social-link"
          >
            Instagram
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
