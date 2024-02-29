// import Dropdown from "./Dropdown";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/Header.css";
import { useContext, useEffect } from "react";
import AuthContext from "../Api/AuthProvider";
// Icons
import { SlBasketLoaded } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const navigate = useNavigate();
  const { user,setUser } = useContext(AuthContext);
  useEffect(()=>{
    if(user.isAuthenticated===false) navigate('/')
  },[navigate,user])
  return (
    <div className="header">
      <div className="icon">
      {user.isAuthenticated?<Link to="/cart">
        <SlBasketLoaded />
      </Link>:<></>}
      </div>
      <div className="links">
        {/* <Dropdown
          linkText="New"
          dropdownItems={[
            { href: "/new-arrivals", text: "New Arrivals" },
            { href: "/new-in-mens", text: "New In Men's" },
            { href: "/new-in-womens", text: "New In Women's" },
          ]}
        />
        <Dropdown
          linkText="Men"
          dropdownItems={[
            { href: "/mens-clothing", text: "Clothing" },
            { href: "/mens-shoes", text: "Shoes" },
            { href: "/mens-accessories", text: "Accessories" },
          ]}
        />
        <Dropdown
          linkText="Women"
          dropdownItems={[
            { href: "/womens-clothing", text: "Clothing" },
            { href: "/womens-shoes", text: "Shoes" },
            { href: "/womens-accessories", text: "Accessories" },
          ]}
        />
        <Dropdown
          linkText="Kids"
          dropdownItems={[
            { href: "/kids-clothing", text: "Clothing" },
            { href: "/kids-toys", text: "Toys" },
          ]}
        />
        <Dropdown
          linkText="Sale"
          dropdownItems={[
            { href: "/sale-all", text: "All Sale Items" },
            { href: "/sale-clothing", text: "Sale Clothing" },
            { href: "/sale-shoes", text: "Sale Shoes" },
          ]}
        /> */}
        <Link className="dropdown-wrapper" to="/">
          Home
        </Link>
        <Link className="dropdown-wrapper" to="/category/men">
          Men
        </Link>
        <Link className="dropdown-wrapper" to="/category/women">
          Women
        </Link>
        <Link className="dropdown-wrapper" to="/category/unisex">
          Unisex
        </Link>
      </div>
      <div className="search-wrapper">
        <input type="text" placeholder="Search" className="search-input" />
        <Link to="/search">
          <CiSearch className="search-icon" />
        </Link>
      </div>
      <div className="auth-links">
        {user.isAuthenticated ? (
          <Link className="login-link" onClick={()=>setUser({isAuthenticated:false,id:0})}>Logout</Link>
        ) : (
          <>
            <Link to="/login" className="login-link">
              Login
            </Link>
            <Link to="/register" className="register-link">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
