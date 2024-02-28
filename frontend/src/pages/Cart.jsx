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
  const handleDeleteItem = (itemId,itemSize) => {
  const updatedCart = cartItems.filter((item) => (item.product_id !== itemId&&item.product_size !== itemSize));
  setCartItems(updatedCart);
};
let sum=0;
for(let i=0;i<cartItems.length;i++){
  sum+=Number(cartItems[i].total_price)
}
const isEmptyCart = cartItems.length === 0;
  return (
    <div className="cart_page">
    <Header/>
    <div className="spacer"></div>
      <div className="cart_sub-container">
        <div className="left-container">
          <div className="spacer"></div>
          <h1 className="cartHeader">My Cart</h1>
          {!isEmptyCart?cartItems.map((item,key)=>{
            return <CartTile key={key} handleDeleteItem={handleDeleteItem} item={item}/>
          }):<p>Cart empty</p>}
        </div>
        <div className="right-container">
          <div className="spacer"></div>
          <div className="right-sub-container">
            <div className="right-sub-sub-container">
              <h1>Order Summary</h1>
              <p className="orderTotal">
                Order Total<span>${sum}</span>
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
