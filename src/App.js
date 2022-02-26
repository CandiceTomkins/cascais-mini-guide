import heroImage from "./cascais-lighthouse.jpg";
import "./App.css";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import React from "react";

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

          <h1 className="title">
            Cascais, Portugal <div className="subtitle">A Mini Guide</div>
          </h1>
        </header>
      </div>
      <About />
      <Projects />
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
            href="https://instagram.com/candytomkinstravels"
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
