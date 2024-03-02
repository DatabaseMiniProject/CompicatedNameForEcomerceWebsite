import { useNavigate } from "react-router-dom";
import "../assets/styles/Section.css";

function Section(props) {
  const navigate = useNavigate();
  const { image, title, price, link } = props.product;

  function handleClick() {
    navigate(link);
  }

  return (
    <div className="product-section">
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
    </div>
  );
}

export default Section;
