import React from "react";
import "./Coffee.css";
import pancakes from "./pancakes-cascais.jpg";

export default function Coffee() {
  return (
    <div className="body-coffee">
      <div className="coffee-section">
        <h2 className="coffee-title">COFFEE | BREAKFAST | BRUNCH </h2>
        <img src={pancakes} className="pancakes" alt="cascais pancakes" />
        <p>
          Find the perfect coffee corner, breakfast with a view or brunch spot
        </p>
        <h2 className="coffee-title">5 Cafes to visit in Cascais</h2>
        <a
          href="https://www.lusophonica.com/"
          alt="lusophonica coffee Cascais"
          className="coffee-link"
        >
          LUSOPHONICA
        </a>
        <a
          href="https://www.instagram.com/kafeine_marina/"
          alt="Kaffeine cafe Cascais"
          className="coffee-link"
        >
          KAFFEINE
        </a>
        <a
          href="https://www.instagram.com/qabdaqcafe/?hl=en"
          alt="Qabdaq Cafe Cascais"
          className="coffee-link"
        >
          QABDAQ
        </a>
      </div>
    </div>
  );
}
