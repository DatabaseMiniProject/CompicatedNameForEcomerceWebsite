import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../assets/styles/Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    username:"",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { username,email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your register logic here
    if(password===confirmPassword){
    const packet = {
      username:username,
      password:password,
      email:email
    }
    axios.post('http://localhost:4000/account/signup',{packet}).then(res=>console.log(res.data))
    }
    // console.log("Register form submitted:", formData);
  };

  return (
    <div>
      <Header /> {/* Render the Header component */}
      <div className="register-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>User Name</label>
          <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              required
            />
        </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
      <Footer className="foot-reg" />
    </div>
  );
};

export default Register;
