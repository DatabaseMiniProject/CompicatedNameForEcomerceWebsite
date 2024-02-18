import React from "react";
import CartTile from "../Components/CartTile";
import "../assets/styles/Cart.css";
function Cart() {
  return (
    <div className="cart_page">
      <div className="cart_sub-container">
        <div className="left-container">
          <div className="spacer"></div>
          <h1 className="cartHeader">My Cart</h1>
          <CartTile/>
          <CartTile/>
          <CartTile/>
          <CartTile/>
        </div>
        <div className="right-container">
          <div className="spacer"></div>
          <div className="right-sub-container">
            <div className="right-sub-sub-container">
              <h1>Order Summary</h1>
              <p className="subTotal">
                Sub Total <span>$215</span>
              </p>
              <p className="shippingFees">
                Shipping <span>Free</span>
              </p>
              <p className="orderTotal">
                Order Total<span>$215</span>
              </p>
              <div className="button-container">
                <button className="checkOut" type="button">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
