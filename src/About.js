import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="body-about">
      <div className="about-section">
        <p>A pocket guide for the best experiences in Cascais, Portugal. </p>
        <div>
          <iframe
            src="https://www.google.com/maps/d/u/1/embed?mid=1HiOLHnEl18gCt6cZDzvQh1ha9b2zYvFs&ehbc=2E312F"
            width="640"
            height="480"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
