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
  const [isLoading,setIsLoading]=useState(true)
  useEffect(()=>{
    axios.get('http://localhost:4000').then(res=>{setNewItems(res.data.new_items);setTimeout(() => {
      setIsLoading(false);
    }, 1000);})
  },[])
  const product1 = {
    image:
      "https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dw80b2310c/images/page-designer/2024/Jan/16344_Comp_A_Desktop.jpg",
    title: "NB550",
    price: "$19.99",
    link: "/category/unisex",
  };
  if(isLoading) return <h1>Loading.....</h1>
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
      <Link to="/category/unisex">
        <button className="shop-all-button">Shop All</button>
      </Link>
      <div className="large-cards-container">
        <LargeCard product={{link:"/products/"+newItems[1].product_name, image:newItems[1].image1,  title:newItems[1].product_name, price:newItems[1].product_cost}} />
        <LargeCard product={{link:"/products/"+newItems[0].product_name, image:newItems[0].image1,  title:newItems[0].product_name, price:newItems[0].product_cost}} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
