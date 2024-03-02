import { createContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  console.log(user,1)
  //Login form
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChangeLogin = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/account/login", formData)
      .then((res) =>{ setUser(res.data);});
  };
  //Signup form
  const [formDataSignup, setFormDataSignup] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChangeSignup = (e) => {
    setFormDataSignup({ ...formDataSignup, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (formDataSignup.password === formDataSignup.confirmPassword) {
      const packet = {
        username: formDataSignup.username,
        password: formDataSignup.password,
        email: formDataSignup.email,
      };
      axios
        .post("http://localhost:4000/account/signup", { packet })
        .then((res) => setUser(res.data));
    }
  };

  const value = {
    user,
    formData,
    formDataSignup,
    handleSignup,
    handleChangeSignup,
    setFormDataSignup,
    handleChangeLogin,
    handleLogin,
    setFormData,
    setUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
