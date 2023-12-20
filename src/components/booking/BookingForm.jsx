import React from "react";
import "./BookingForm.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  fullName: yup.string().required("Full name is a required field!"),
  email: yup
    .string()
    .required("Email is a required field!")
    .email("Email is not valid!"),
  telNumber: yup.string().required("Telephone is a required field!"),
  // .matches(
  //   /^(\+\d{2,3}\s)?\(?\d{3}\)?[\s.-]\d{2}[\s.-]\d{3}[\s.-]\d{4}$/,
  //   "Phone number must match the form 233 00 000 0000"
  // ),
  guests: yup
    .number()
    .min(1, "There must be at least 1 guest!")
    .required("Please specify number of guests per table!"),
  date: yup.string().required("Please select date and time!"),
});

function BookingForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const formSubmit = (data) => {
    console.table(data);
    navigate("/confirmation");
  };

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className="booking-form-container"
      action="/confirmation"
    >
      <fieldset>
        <div className="field">
          <label htmlFor="fullName">Full Name*</label>
          <input
            type="text"
            placeholder="Little Lemon"
            name="fullName"
            {...register("fullName")}
          />
          <span className="error-message">{errors.fullName?.message}</span>
        </div>

        <div className="field">
          <label htmlFor="email">Email*</label>
          <input
            type="text"
            placeholder="liggle-lemon@email.com"
            name="email"
            {...register("email")}
          />
          <span className="error-message">{errors.email?.message}</span>
        </div>

        <div className="field">
          <label htmlFor="telNumber">Cell Phone*</label>
          <input
            type="tel"
            placeholder="123 123 1234"
            name="telNumber"
            {...register("telNumber")}
          />
          <span className="error-message">{errors.telephone?.message}</span>
        </div>

        <div className="field occasion">
          <label htmlFor="occasion">Occasion (optional)</label>
          <div className="options">
            <select name="occasion" {...register("occasion")}>
              <option value="select">Select Occasion</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
            </select>
          </div>
        </div>

        <div className="field guest">
          <label htmlFor="guests">Guests</label>
          <input
            type="number"
            placeholder="2"
            min={1}
            name="guests"
            {...register("guests")}
          />
          <span className="error-message">{errors.guests?.message}</span>
        </div>

        <div className="field">
          <label htmlFor="date">Date & Time</label>
          <input type="datetime-local" name="date" {...register("date")} />
          <span className="error-message">{errors.date?.message}</span>
        </div>
        <button className="booking-form-btn" type="submit">
          Reserve
        </button>
      </fieldset>
    </form>
  );
}

export default BookingForm;
