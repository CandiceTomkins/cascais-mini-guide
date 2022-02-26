import React from "react";
import "./Experiences.css";
import beach from "./cascais-beach.jpg";

export default function Projects() {
  return (
    <div className="body-experiences">
      <div className="experiences-section">
        <img src={beach} className="beach-image" alt="cascais beach" />
      </div>
    </div>
  );
}
