import { FaInstagram } from "react-icons/fa";
import "../assets/styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h4>Customer Service</h4>
        <ul>
          <li>
            <a href="#help">Help</a>
          </li>
          <li>
            <a href="#contact">Contact us</a>
          </li>
          <li>
            <a href="#return">Start a return</a>
          </li>
          <li>
            <a href="#track">Track your order</a>
          </li>
          <li>
            <a href="#size-guide">Size guide</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Shopping</h4>
        <ul>
          <li>
            <a href="#shop">Shop</a>
          </li>
          <li>
            <a href="#store">Find a store</a>
          </li>
          <li>
            <a href="#gift-cards">Gift cards</a>
          </li>
          <li>
            <a href="#shipping">Shipping information</a>
          </li>
          <li>
            <a href="#sale-exclusions">Sale exclusions</a>
          </li>
          <li>
            <a href="#custom-uniforms">Custom uniforms</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>About Us</h4>
        <ul>
          <li>
            <a href="#purpose">Our Purpose</a>
          </li>
          <li>
            <a href="#leadership">Responsible Leadership</a>
          </li>
          <li>
            <a href="#careers">Careers</a>
          </li>
          <li>
            <a href="#track-nb">The TRACK at New Balance</a>
          </li>
          <li>
            <a href="#press-box">Press Box</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>For You</h4>
        <ul>
          <li>
            <a href="#discounts">Special Discounts</a>
          </li>
          <li>
            <a href="#wear-test">Sign Up to Wear Test</a>
          </li>
          <li>
            <a href="#idea-submission">Idea Submission</a>
          </li>
          <li>
            <a href="#affiliate-program">Affiliate Program</a>
          </li>
          <li>
            <a href="#counterfeit">Counterfeit Products</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Connect With Us</h4>
        <ul>
          <li>
            <a href="#instagram">
              <FaInstagram />
            </a>
          </li>
          {/* Add other social media links as needed */}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
