import React from "react";
import Stars from "./Stars";
import "./Testimonial.css";

export default function Testimonial({ testimonial }) {
  const { photo, author, rating, quote } = testimonial;
  return (
    <article className="testimonial-card">
      <h3 className="testimonial-title">{author}</h3>
      {/* <div className={classes.photo}>
        <img src={image} alt="Photo" />
      </div> */}
      <div className="stars">
        <Stars rating={rating} />
      </div>

      <blockquote className="testimonial-blockquote">{quote}</blockquote>
    </article>
  );
}
