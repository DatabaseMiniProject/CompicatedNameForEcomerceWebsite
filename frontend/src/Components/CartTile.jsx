import "../assets/styles/CartTile.css";
// import sockImage from "../assets/Images/socks_test.jpeg";
function CartTile({item}) {
  const {product_name,product_size,qty,total_price,image1} = item;
  if(product_name===undefined||image1===undefined) return <p>The cart is empty</p>
  return (
    <div className="cards">
      <div className="cart-image-container">
        <a href="/">
          <img className="cartTile-image" src={image1} alt="cartItem" />
        </a>
      </div>
      <div className="cart-options">
        <a href="/">{product_name}</a>
        <span>${total_price}</span>
          <p className="pCategory">unisex</p>
        <div className="prodDetails">
          <p className="pColor">color: white</p>
          <p className="size">size: {product_size}</p>
          <p className="qty">
            qty:{qty}<p style={{display:"inline",marginLeft:"0.5rem"}}></p>
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
