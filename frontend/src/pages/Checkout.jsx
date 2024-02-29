import React, { useState } from "react";
import "../assets/styles/Checkout.css"; // Import the CSS for checkout page
import axios from "axios";

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    phoneNumber: "",
    email: "",
    subscribe: false,
    shippingOption: "UPS Ground",
    paymentMethod: "Visa",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your checkout logic here
    if(formData.firstName&&formData.lastName&&formData.streetAddress&&formData.phoneNumber&&formData.email)
    axios.post('http://localhost:4000/account/checkout/52922',formData).then(res=>console.log(res));
    console.log("Checkout form submitted:", formData);
  };

  return (
    <div>
      <div className="checkout-container">
        <div className="checkout-details">
          <h2>Checkout</h2>
          <div className="login-message">
            Have an account? <a href="/login">Login</a> to checkout more quickly
          </div>
          <div className="section-title">Shipping Address</div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="streetAddress"
                placeholder="Street Address"
                value={formData.streetAddress}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label>
                <input
                  type="checkbox"
                  name="subscribe"
                  checked={formData.subscribe}
                  onChange={handleChange}
                />
                Sign up for email to hear about product launches, exclusive
                offers and athlete news
              </label>
            </div>
            <div className="section-title">Shipping Options</div>
            <div className="shipping-options">
              <label>
                <input
                  type="radio"
                  name="shippingOption"
                  value="UPS Ground"
                  checked={formData.shippingOption === "UPS Ground"}
                  onChange={handleChange}
                />
                UPS Ground (2-5 days)
                <span>$9.95</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="shippingOption"
                  value="UPS 2-Day Air"
                  checked={formData.shippingOption === "UPS 2-Day Air"}
                  onChange={handleChange}
                />
                UPS 2-Day Air
                <span>$19.95</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="shippingOption"
                  value="UPS 1-Day Air"
                  checked={formData.shippingOption === "UPS 1-Day Air"}
                  onChange={handleChange}
                />
                UPS 1-Day Air
                <span>$25.95</span>
              </label>
            </div>
            <button type="submit">Place Order</button>
          </form>
        </div>
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="order-summary-items">
            {/* Render order summary items here */}
            Example:
            <div className="order-summary-item">
              <span>New Balance NB Patch Logo Crew 3 Pairs, LAS33763WM</span>
              <span>$15.99</span>
            </div>
          </div>
          {/* Shipping cost, tax, total */}
          <div className="order-summary-subtotal">
            <div>Subtotal</div>
            <div>$15.99</div>
          </div>
          <div className="order-summary-shipping">
            <div>Shipping: UPS Ground (2-5 days)</div>
            <div>$9.95</div>
          </div>
          <div className="order-summary-tax">
            <div>Total Tax</div>
            <div>$0.00</div>
          </div>
          <div className="order-summary-total">
            <div>Order Total</div>
            <div>$25.94</div>
          </div>
          <div className="order-summary-payments">
            <div>4 payments of $6.49 with</div>
            <div>{/* Payment method logo or name */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
