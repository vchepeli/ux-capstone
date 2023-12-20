import { Link } from "react-router-dom";
import LogoImg from "../assets/footer-logo.png";
import "./Footer.css";

const FbIcon = () => (
  <svg
    class="address-icon"
    height="30"
    width="30"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
  >
    <linearGradient
      id="a"
      x1="-277.375"
      x2="-277.375"
      y1="406.6018"
      y2="407.5726"
      gradientTransform="matrix(40 0 0 -39.7778 11115.001 16212.334)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stop-color="#0062e0" />
      <stop offset="1" stop-color="#19afff" />
    </linearGradient>
    <path
      fill="url(#a)"
      d="M16.7 39.8C7.2 38.1 0 29.9 0 20 0 9 9 0 20 0s20 9 20 20c0 9.9-7.2 18.1-16.7 19.8l-1.1-.9h-4.4l-1.1.9z"
    />
    <path
      fill="#fff"
      d="m27.8 25.6.9-5.6h-5.3v-3.9c0-1.6.6-2.8 3-2.8H29V8.2c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8V20h-5v5.6h5v14.1c1.1.2 2.2.3 3.3.3 1.1 0 2.2-.1 3.3-.3V25.6h4.4z"
    />
  </svg>
);

const InstaIcon = () => (
  <svg
    class="address-icon"
    height="32"
    width="32"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const Footer = () => (
  <footer class="footer">
    <div class="container">
      <div class="footer-container">
        <nav class="footer-nav">
          <div class="footer-logo">
            <a href="/">
              <img src={LogoImg} width="100px" alt="Logo of Little Lemon" />
            </a>
          </div>
          <ul class="footer-menu">
            <li>
              <Link to="/" className="footer-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                Reservations
              </Link>
            </li>
          </ul>
        </nav>
        <address class="footer-address">
          <ul class="address-list">
            <li>
              <a class="address-link" href="tel:+11111231234">
                +1 (111) 123 12 34
              </a>
            </li>
            <li>
              <a class="address-link" href="mailto:little-lemon@mail.com">
                litle-lemon@mail.com
              </a>
            </li>
            <li>
              <a
                class="address-link"
                href="https://goo.gl/maps/KpjmkaboxKH6DTnk9"
                target="_blank"
              >
                Ukraine, Kyiv, Sichovykh Striltsiv Street, 54
              </a>
            </li>
            <li>
              <a href="#">
                <FbIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <InstaIcon />
              </a>
            </li>
          </ul>
          <div class="address-info">
            <a class="address-link" href="#" target="_blank">
              Confidential Policy
            </a>
            <p class="address-copyright">&copy; 2023 Data Protected</p>
          </div>
        </address>
      </div>
    </div>
  </footer>
);

export default Footer;
