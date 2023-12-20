import React from "react";
import MarioAndAdrianA from "../assets/Mario and Adrian A.jpg";
import MarioAndAdrianB from "../assets/Mario and Adrian B.jpg";
import "./Chicago.css";

const Chicago = () => {
  return (
    <section class="chicago-section section" id="chicago-section">
      <div class="container">
        <div class="chicago-container">
          <div class="chicago-content">
            <h2 class="chicago-title section-title">Little Lemon</h2>
            <h3>Chicago</h3>
            <p class="chicago-text">
              <span class="brand uppercase">little lemon</span> opened in 1995
              by two Italian brothers, Adrian and Mario. Despite the city's
              diversity, the two brothers recognized the lack of Mediterranean
              cuisine in Chicago, and were inspired to bring the flavors of
              their hometown in Italy to the people of Chicago. The two brothers
              continue to oversee the Little Lemon restaurant, nearly thirty
              years later.
            </p>
          </div>
          <div className="chicago-img">
            <img class="bottom-image"
              src={MarioAndAdrianA}
              alt="Mario And Adrian ImageA"
            />
            <img class="top-image"
              src={MarioAndAdrianB}
              alt="Mario And Adrian ImageB"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chicago;
