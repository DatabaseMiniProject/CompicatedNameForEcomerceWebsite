import Header from "../Components/Header";
import Section from "../Components/Section";
import ProductCard from "../Components/ProductCard";
import LargeCard from "../Components/LargeCard";
import { Link } from "react-router-dom";
import "../assets/styles/Home.css";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [newItems,setNewItems]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:4000').then(res=>setNewItems(res.data.new_items))
  },[])
  const product1 = {
    image:
      "https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dw80b2310c/images/page-designer/2024/Jan/16344_Comp_A_Desktop.jpg",
    title: "NB550",
    price: "$19.99",
    link: "http://localhost:3000/products",
  };

  const product3 = {
    image:
      "https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dwbae4cfaa/images/page-designer/2024/February/16198_Comp_E_Image1.jpg?sw=1616&sfrm=jpg",
    title: "Orange",
    price: "$109.99",
    link: "http://localhost:3000/products",
  };

  const product4 = {
    image:
      "https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dw6fa98ea4/images/page-designer/2024/Jan/16160_Comp_E_Image1.jpg?sw=1616&sfrm=jpg",
    title: "Orange",
    price: "$109.99",
    link: "http://localhost:3000/products",
  };

  return (
    <div className="home-container">
      <Header />
      <Section key={product1.title} product={product1} />
      <p className="new-arrivals">New Arrivals</p>
      <div className="product-cards-container">
      {
        newItems.map((item,key)=>{
          const prod = {link:"/products/"+item.product_name, image:item.image1,  title:item.product_name, price:item.product_cost}
        return <ProductCard product={prod} key={key} />
        })
      }
      </div>
      <Link to="/search">
        <button className="shop-all-button">Shop All</button>
      </Link>
      <div className="large-cards-container">
        <LargeCard product={product3} />
        <LargeCard product={product4} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;