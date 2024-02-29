import { Link } from "react-router-dom";
import "../assets/styles/ProductCard.css";

const ProductCard = ({ product }) => {
  const { image, title, price, link } = product;
  return (
    <div className="product-card">
      <Link to={link} className="card-link">
        <img src={image} alt={title} className="card-image" />
        <div className="card-info">
          <h3 className="card-title">{title}</h3>
          <p className="card-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
