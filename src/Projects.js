import React from "react";
import './Projects.css';


export default function Projects () {
    return (
        <div className="body-projects">
        <div className="project-section"> 
     
                
          <h3>React Weather App</h3>
          <p className="project-paragraph">Built with React.js and OpenWeather API</p>
          <a href="https://candy-react-weather-app.netlify.app/" className="btn btn-project mb-3" alt="react weather app link">see project</a>
         
                   
          <h3>Glaucoma Dictionary App</h3>
          <p className="project-paragraph">Built with React.js and Merriam Webster Medical API</p>
          <a href="https://glaucoma-app.netlify.app/" className="btn btn-project mb-3" alt="glaucoma app link">see project</a>
         

          <h3>Alentejo, Portugal</h3>
          <p className="project-paragraph">Built with HTML, CSS and Javascript</p>
          <a href="https://www.shecodes.io/workshops/shecodes-basics-275631ab-9840-4885-a6a8-5afa8911fe76/projects/434164" className="btn btn-project mb-3" alt="alentejo page link">see project</a>


          <h3>Soi 55 Lifestyle</h3>
          <p className="project-paragraph">The Beach and Travel lifestyle / My Side Hustle</p>
          <a href="https://soi55lifestyle.com/" className="btn btn-project mb-3" alt="soi 55 lifestyle link">see project</a>
                   </div>
                  
               </div>
       
       
    )
}