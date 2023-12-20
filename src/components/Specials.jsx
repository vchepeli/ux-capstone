import React from "react";
import "./Specials.css";
import GreekSaladImg from "../assets/greek-salad.jpg";
import BruschettaImg from "../assets/bruschetta.svg";
import LemonDessertImg from "../assets/lemon-dessert.jpg";

// Example data structure for the specials
const specialsData = [
  {
    id: 1,
    name: "Greek Salad",
    description:
      "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
    price: "$12.99",
    imageUrl: GreekSaladImg,
  },
  {
    id: 2,
    name: "Bruschetta",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.",
    price: "$5.99",
    imageUrl: BruschettaImg,
  },
  {
    id: 3,
    name: "Lemon Dessert",
    description:
      "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
    price: "$5.00",
    imageUrl: LemonDessertImg,
  },
];

const Specials = () => {
  return (
    <section className="section" id="specials-section">
      <div className="container">
        <div className="specials-header">
          <h2 className="section-title specials-title">This week specials!</h2>
          <button type="button" class="specials-button">Online Menu</button>
        </div>

        <ul className="specials-list">
          {specialsData.map((item) => (
            <li key={item.id} className="special-item">
              <article class="special-card">
                <img src={item.imageUrl} alt={item.name} />
                <div className="special-header">
                  <h3 className="special-title">{item.name}</h3>
                  <h3 className="special-title price">{item.price}</h3>
                </div>
                <p className="special-text limited">{item.description}</p>
                <button type="button" class="specials-button">Order a Delivery </button>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Specials;
