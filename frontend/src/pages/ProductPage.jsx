import "../assets/styles/ProductPage.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
function ProductPage() {
    const [isLoading,setIsLoading]=useState(true)
    const [product_info,setProdInfo]=useState({})
    const {details,images,sizes} = product_info;
    const location = useLocation().pathname.split('/')[2];
    const req='http://localhost:4000/products/'+location
  useEffect(() => {
    axios.get(req).then(res=>{setProdInfo({details:res.data.details[0],images:res.data.images[0],sizes:res.data.sizes});setIsLoading(false)})
  }, [req]);
  if(isLoading) return(<h1>Loading.......</h1>)
  return (
    <div className="prod_container">
      <Header />
      <div className="spacer"></div>
      <div className="content-container">
        <div className="left-image-container">
          <div className="spacer" />
          <div className="image-sub-container">
            {Object.values(images).map((src,key)=>{
                return <img src={src} key={key} alt="shoe"/>
            })}
          </div>
        </div>
        <div className="right-option-container">
          <div className="spacer" />
          <div className="option-sub-container">
            <p className="prod-category">{details.parent_category_name}/{details.category_name}</p>
            <h1 className="prod-name">{details.product_name}</h1>
            <p className="prod-price">${details.product_cost}</p>
            <p className="prod-rating">Rating</p>
            <div className="size-grid">
              {sizes.map((object,key)=>{
                return(
                    <div key={key} size={key}>{object.product_size}</div>
                )
              })}
            </div>
            <button className="addToCart" type="button">
              Add To Cart
            </button>
            <div className="descriptionDiv">
              <h4>Description:</h4>
              <p style={{marginTop:"2rem",textAlign:"justify"}}>{details.product_description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer" />
      <Footer />
    </div>
  );
}

export default ProductPage;
