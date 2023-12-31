import React from "react";
import "./Stars.css";

const StarIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

const HalfStarIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2L8.91 8.26L2 9.27L7 14.14L5.82 21.02L12 17.77V2Z"
    />
    <path d="M8.91 8.26L8.98231 8.75474C9.14499 8.73097 9.28558 8.62874 9.35835 8.48131L8.91 8.26ZM12 2H12.5C12.5 1.76763 12.3399 1.56589 12.1136 1.51308C11.8873 1.46028 11.6545 1.57032 11.5516 1.77869L12 2ZM2 9.27L1.92768 8.77526C1.7394 8.80278 1.58306 8.93478 1.52438 9.11578C1.46569 9.29679 1.51482 9.49541 1.65113 9.62818L2 9.27ZM7 14.14L7.4928 14.2245C7.52063 14.0623 7.4668 13.8967 7.34886 13.7818L7 14.14ZM5.82 21.02L5.32719 20.9355C5.29502 21.1231 5.37214 21.3127 5.52613 21.4245C5.68012 21.5364 5.88427 21.5511 6.05272 21.4625L5.82 21.02ZM12 17.77L12.2327 18.2125C12.3971 18.1261 12.5 17.9557 12.5 17.77H12ZM9.35835 8.48131L12.4484 2.22131L11.5516 1.77869L8.46164 8.03869L9.35835 8.48131ZM2.07231 9.76474L8.98231 8.75474L8.83768 7.76526L1.92768 8.77526L2.07231 9.76474ZM7.34886 13.7818L2.34886 8.91182L1.65113 9.62818L6.65113 14.4982L7.34886 13.7818ZM6.3128 21.1045L7.4928 14.2245L6.50719 14.0555L5.32719 20.9355L6.3128 21.1045ZM11.7673 17.3275L5.58727 20.5775L6.05272 21.4625L12.2327 18.2125L11.7673 17.3275ZM12.5 17.77V2H11.5V17.77H12.5Z" />
  </svg>
);

export default function Stars({ rating }) {
  const integerPart = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0 && integerPart < 5;

  return (
    <div className="stars-container">
      {[...Array(integerPart)].map((_, index) => (
        <StarIcon key={index} />
      ))}
      {hasHalfStar && <HalfStarIcon />}
    </div>
  );
}
