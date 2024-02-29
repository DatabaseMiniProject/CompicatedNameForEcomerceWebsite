import { Link } from "react-router-dom";
import "../assets/styles/LargeCard.css";

const LargeCard = ({ product }) => {
  const { image, title, price, link } = product;

  return (
    <div className="large-card">
      <Link to={link} className="card-link">
        <img style={{height: "500px",objectFit:"cover"}} src={image} alt={title} className="card-image" />
      </Link>
      <div className="card-details">
        <Link to={link} className="card-link">
          <h3 className="card-title">{title}</h3>
          <p className="card-price">${price}</p>
        </Link>
      </div>
    </div>
  );
};

export default LargeCard;
