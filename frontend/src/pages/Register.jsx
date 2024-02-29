import React, {useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../Api/AuthProvider";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../assets/styles/Register.css";

const Register = () => {
  const navigate = useNavigate();
  const {user,formDataSignup,handleSignup,
    handleChangeSignup}=useContext(AuthContext);
  useEffect(()=>{
    if(user.isAuthenticated===false && user.id===1111){
      alert("The username and mail already exist")
    }
    else if(user.isAuthenticated===true){
      navigate('/')
    }
  })

  const { username,email, password, confirmPassword } = formDataSignup;

  return (
    <div>
      <Header /> {/* Render the Header component */}
      <div className="register-container">
        <h2>Register</h2>
        <form onSubmit={handleSignup}>
        <div className="form-group">
          <label>User Name</label>
          <input
              type="text"
              name="username"
              value={username}
              onChange={handleChangeSignup}
              required
            />
        </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChangeSignup}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChangeSignup}
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChangeSignup}
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
