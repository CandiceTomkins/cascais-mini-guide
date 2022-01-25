import logo from './candy-profile.jpeg';
import './App.css';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import React from 'react';


function App() {
  return (
    <div className="App">
      <div className="body-app">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
          <h1 className="my-name">Candice Tomkins <div className='front-end-dev'>Front-End Developer | Freelance Creative</div> <div className='based-in-lisbon'>based in Lisbon, Portugal 🇵🇹</div></h1>
      </header>
      </div>
      <About/>
      <Projects/>
      <Contact/>
<footer><p>Coded by Candice Tomkins. Open-sourced on <a href="https://github.com/CandiceTomkins" alt="GitHub">GitHub</a><br/>
<a href="mailto:candicetomkins@gmail.com" alt="email-address" className="social-link">Email</a>
<a href="https://github.com/CandiceTomkins" alt="GitHub" className="social-link">GitHub</a>
            <a href="https://www.linkedin.com/in/candice-tomkins-3b2129102" alt="linkedin-link" className="social-link">LinkedIn</a>
            <a href="https://instagram.com/candytomkinstravels" alt="instagram-link" className="social-link">Instagram</a></p></footer>
    </div>
    
  );
}

export default App;
