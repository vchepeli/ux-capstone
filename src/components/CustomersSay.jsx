import React from "react";
import "./CustomersSay.css";
import Testimonial from "./testimonials/Testimonial";

const CustomersSay = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Delicious food and wonderful service!",
      author: "Jane Doe",
      rating: 5,
    },
    {
      id: 2,
      quote: "Delicious food and wonderful service!",
      author: "Jane Doe",
      rating: 3,
    },
    {
      id: 3,
      quote: "Delicious food and wonderful service!",
      author: "Jane Doe",
      rating: 2,
    },
    {
      id: 4,
      quote: "Delicious food and wonderful service!",
      author: "Jane Doe",
      rating: 1.5,
    },
  ];

  return (
    <section className="testimonials section" id="testimonials-section">
      <div className="container">
        <h2 className="testimonials-title section-title centered">
          What Our Customers Say
        </h2>
        <div className="testimonials-container">
          <ul className="testimonials-list">
            {testimonials.map((testimonial) => (
              <li className="testimonials-item">
                <Testimonial key={testimonial.id} testimonial={testimonial} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CustomersSay;
