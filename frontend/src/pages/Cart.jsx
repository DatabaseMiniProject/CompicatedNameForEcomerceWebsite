import React, { useEffect, useState } from "react";
import CartTile from "../Components/CartTile";
import "../assets/styles/Cart.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";
function Cart() {
  const [cartItems,setCartItems]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:4000/account/cart/B').then(res=>setCartItems(res.data.res))//Implement dynamic account cart fetching
  },[])
  return (
    <div className="cart_page">
    <Header/>
    <div className="spacer"></div>
      <div className="cart_sub-container">
        <div className="left-container">
          <div className="spacer"></div>
          <h1 className="cartHeader">My Cart</h1>
          {cartItems.map((item,key)=>{
            return <CartTile key={key} item={item}/>
          })}
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
      <div className="spacer"></div>
      <Footer/>
    </div>
  );
}

export default Cart;
