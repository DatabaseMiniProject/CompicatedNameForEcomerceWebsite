import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from '../Api/AuthProvider.js' 
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../assets/styles/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const {user,formData, handleChangeLogin,
    handleLogin}=useContext(AuthContext);
    const { email, password } = formData;
    useEffect(()=>{
      if(user.isAuthenticated){navigate('/')
    }
    },[navigate,user])
  return (
    <div>
      <Header />
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChangeLogin}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChangeLogin}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
      <Footer className="foot-log" />
    </div>
  );
};

export default Login;
