import BookingForm from "./booking/BookingForm";
import RestaurantImg from "../assets/restaurant.jpg";
import "./BookingPage.css";

export default function BookingsPage() {
  return (
    <section className="booking-section section">
      <div className="container">
        <div className="booking-container">
          <div className="booking-text">
            <h1 className="section-title">
              Little <span className="accent">Lemon</span>
            </h1>
            <h2>Chicago</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
              quisquam aliquam eum eligendi, facilis quos quia! Corrupti odit,
              id ab esse ullam repellendus assumenda voluptatum amet quidem.
              Repellendus, id voluptas?
            </p>
            <img className="booking-img" src={RestaurantImg} alt="Restaurant interier" />
          </div>
          <div className="booking-form">
            <h1>Reserve a Table</h1>
            <p>
              Please fill in and submit form to book your reservation at Little
              Lemon.
            </p>
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}
