import "../assets/styles/ProductPage.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
function ProductPage() {
  const location = useLocation();
  const [productInformation,setProductInformation]=useState({})
  const [isLoading,setIsLoading]=useState(true)
  const [prodSize,setSize]=useState("");
  const [qty,setQty]=useState(1);
  const url =  `http://localhost:4000/products/${location.pathname.split('/')[2]}`
  const {information,images,sizes}=productInformation;
  useEffect(()=>{
    axios.get(url).then(res=>{setProductInformation(res.data);setIsLoading(false)}).catch(err=>console.log(err))
  },[url])
  const handleCart = () =>{
    axios.post(url,{qty:qty,size:prodSize}).then(res=>console.log(res)).catch(err=>console.log(err))
  }
  if(isLoading) return <h1>Loading.....</h1>
  return (
    <div className="prod_container">
      <Header />
      <div className="spacer"></div>
      <div className="content-container">
        <div className="left-image-container">
          <div className="spacer" />
          <div className="image-sub-container">
          {
            images.map((image,key)=>{
              return(
                <img src={image} alt="shoes" key={key}/>
              )
            })
          }
          </div>
        </div>
        <div className="right-option-container">
          <div className="spacer" />
          <div className="option-sub-container">
            <p className="prod-category">{information.parent_category_name}/{information.category_name}</p>
            <h1 className="prod-name">{information.product_name}</h1>
            <p className="prod-price">${information.product_cost}</p>
            <p className="prod-rating">Rating</p>
            <div className="size-grid">
            {
              sizes.map((size,key)=>{
                return <div onClick={(size)=>{setSize(size.target.className)}} key={key} className={size}>{size}</div>
              })
            }
            </div>
            <p style={{textAlign:"left",fontSize:"1.1rem"}}>
            qty:<span style={{display:"inline-block",width:"1rem"}}></span>
            <select style={{fontSize:"1.0rem"}} onChange={e=>setQty(e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </p>
            <button className="addToCart" type="button" onClick={handleCart}>
              Add To Cart
            </button>
            <div className="descriptionDiv">
              <h4>Description:</h4>
              <p style={{marginTop:"2rem",textAlign:"justify"}}>{information.product_description}</p>
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
