import { Link } from "react-router-dom";
import "../assets/styles/Section.css";

function Section(props) {
  const { image, title, price, link } = props.product;

  function handleClick() {
    window.location.href = link;
  }

  return (
    <div className="product-section">
      <Link to="/products">
        <div className="image-container">
          <img src={image} alt={title} className="product-image" />

          <div className="overlay">
            <div className="text-container">
              <h3 className="product-title">{title}</h3>
              <button className="product-button" onClick={handleClick}>
                Shop Now
              </button>
            </div>
            <p className="product-price">{price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Section;
