import React from "react";
import { Link } from "react-router-dom";
import RestaurantImg from "../assets/restauranfood.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="section hero-section">
      <div className="container">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Little <span class="accent">Lemon</span>
            </h1>
            <h2 className="section-title">Chicago</h2>
            <p className="hero-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
              vitae soluta asperiores itaque, repellendus ratione eligendi a
              quod, autem excepturi maiores consequuntur cum! Culpa odit optio a
              dicta ex pariatur.
            </p>
            <Link to="/reservations">
              <button type="button" class="hero-button">
                Reserve a Table
              </button>
            </Link>
          </div>
          <img
            className="hero-photo"
            src={RestaurantImg}
            alt="restaurant-food"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
