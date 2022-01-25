import logo from './candy-profile.jpeg';
import './App.css';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <div className="body-app">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
          <h1>Candice Tomkins <span>Front-End Developer | Freelance Creative</span></h1>
      </header>
      </div>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
