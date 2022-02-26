import React from "react";
import "./Projects.css";
import beach from "./cascais-beach.jpg";

export default function Projects() {
  return (
    <div className="body-projects">
      <div className="project-section">
        <h2>5 CASCAIS EXPERIENCES</h2>
        <img src={beach} className="beach-image" alt="cascais beach" />
      </div>
    </div>
  );
}
