import React from "react";
import './Projects.css';


export default function Projects () {
    return (
        <div className="body-projects">
        <div className="project-section">
           <div className="container">
               <div className="row mb-5 mt-5">
               <div className="col-sm-6">
                   <h3>React Weather App</h3>
                   <p className="mb-3 project-paragraph">
            Weather app by Candice Tomkins. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by
          </p>
          <a href="https://dreamy-bose-b80498.netlify.app/" className="btn btn-project">See Project</a>
               </div>
               <div className="col-sm-6">
               <img src="./images/react-weather-app-photo.png" className="img-fluid d-none d-md-block project-photo" alt="react-weather-app-screenshot"/>
               </div>
               <div className="row mb-5 mt-5">
               <div className="col-sm-6">
                   <h3>Glaucoma Dictionary</h3>
                   <p className="mb-3 project-paragraph">
            Weather app by Candice Tomkins. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by
          </p>
          <a href="https://fervent-euler-2f8d75.netlify.app/" className="btn btn-project">See Project</a>
                   </div>
                   <div className="col-sm-6">
                  <img src="./images/glaucoma-app-photo.png" className="img-fluid d-none d-md-block project-photo" alt="glaucoma-app-screenshot"/>
                   </div>
               </div>
               </div>
               
               </div>
               </div>
               </div>
          
    
    
       
       
    )
}