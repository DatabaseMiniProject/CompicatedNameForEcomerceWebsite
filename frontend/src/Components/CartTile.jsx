import "../assets/styles/CartTile.css";
import sockImage from "../assets/Images/socks_test.jpeg";
function CartTile() {
  return (
    <div className="cards">
      <div className="cart-image-container">
        <a href="/">
          <img className="cartTile-image" src={sockImage} alt="cartItem" />
        </a>
      </div>
      <div className="cart-options">
        <a href="/">Product Name</a>
        <span>$15.22</span>
          <p className="pCategory">unisex</p>
        <div className="prodDetails">
          <p className="pColor">color: white</p>
          <p className="size">size: L</p>
          <p className="qty">
            qty:
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </p>
        </div>
      </div>
      {/* deletes item from cart */}
      <div className="deleteItem">Remove</div>
    </div>
  );
}

export default CartTile;
