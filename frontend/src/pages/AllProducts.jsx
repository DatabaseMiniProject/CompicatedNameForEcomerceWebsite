import "../assets/styles/AllProducts.css";
import { useEffect } from "react";
import axios from 'axios'
import Card from "../Components/ProductCard";
import categoryShoeLogo from "../assets/Images/shoeCategory.jpg";
import clothingCategoryLogo from "../assets/Images/clothingCategory.jpg";
import accessoriesCategoryLogo from "../assets/Images/categoryAccessoriesLogo.jpg";
import womenshoe from '../assets/Images/womencatshoe.jpg'
import womenscloth from '../assets/Images/womencatcloth.jpg'
import womensacc from '../assets/Images/womencatacess.jpg'
import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
function Men({category}) {
  const [showFilter, setShowFilter] = useState(false);
  const [isLoading,setIsLoading]=useState(true);
  const [items,setItems] = useState([])
  const cName = category.charAt(0).toUpperCase()+category.substring(1,);
  useEffect(()=>{
    axios.get(`http://localhost:4000/${category}`)
    .then(res=>{setItems(res.data.items);setTimeout(()=>setIsLoading(false),800)})
  },[category])
  if(isLoading) return<h1>Loading....</h1>
  return (
    <div className="main">
    <Header/>
    <div className="spacer"></div>
      {/* spacer with the men name */}
      <div className="row__men">
        <div className="row__men__full-width">
          <h2>{cName}</h2>
        </div> 
      </div>
      {/* The category banner with links */}
      <div className="category_container">
        <div className="category_sub_container">
          <div className="category category_shoes">
          <Link className="category_links"  to={`/category/${category}`}>
              <img src={category==='men'?categoryShoeLogo:womenshoe} alt="shoes" />
              <p>Shoes</p>
          </Link>
          </div>
          <div className="category category_clothing">
            <Link className="category_links" to={`/category/${category}`}>
              <img src={category==='men'?clothingCategoryLogo:womenscloth} alt="shoes" />
              <p>Clothing</p>
            </Link>
          </div>
          <div className="category category_accessories">
            <Link className="category_links" to={`/category/${category}`}>
              <img src={category==='men'?accessoriesCategoryLogo:womensacc} alt="shoes" />
              <p>Accessories</p>
            </Link>
          </div>
        </div>
      </div>
      {/* This houses the sort by bar, filter and the shoe list */}
      <div className="filter_category_product">
        <div className={showFilter ? "filter_div" : "hidden_filter"}>
          <h1>Filters</h1>
          <div>
            <h1>Filter 1</h1>
            <h1>Filter 2</h1>
            <h1>Filter 3</h1>
            <h1>Filter 4</h1>
            <h1>Filter 5</h1>
            <h1>Filter 6</h1>
            <h1>Filter 7</h1>
          </div>
        </div>
        <div className={showFilter ? "sort_by_container" : "expanded_sort_by"}>
          <div>
            <span className="sort_container_span">
              <h1 className="Category__count">{cName}</h1>
              <p>({items.length})</p>
            </span>
            {/* <button
              className="toggle_filter"
              onClick={() => setShowFilter((showFilter) => !showFilter)}
              type="button"
            >
              show filter
            </button> */}
            {/* <select className="sort_by">
              <option>New</option>
              <option>prize high to low</option>
              <option>price low to high</option>
            </select> */}
          </div>
        </div>
        <div className={showFilter ? "product_container" : "expanded_products"}>
          <div>
           {items.map((item,ind)=>{
            const prod = {link:"/products/"+item.product_name, image:item.image1,  title:item.product_name, price:item.product_cost, category:item.category_name}
            return <Card key={ind} product={prod} />
           })}
          </div>
          <div className="loaded_and_load_more LoadMore_hidden">
            <div>
              <p>you have viewed 18 of 509 items</p>
              <button className="LoadMore" type="button">
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom_message">
        <div>
          <h1>{cName}’s Sneakers and Athletic Wear</h1>
          <p>
            Step up and step out. New Balance sneakers {category==="unisex"?'everyone':'for '+cName+" "} help you find
            your stride everywhere, from the street to the field to the track.
            Whether you need shoes for everyday use or are looking for athletic
            wear for the new season, we’ve got your covered. Browse our {category==="unisex"?'':cName+'’s '}
            running gear and get ready to race.
          </p>
        </div>
      </div>
      <div className="signup_prompt">
        <div>
          <p>Be the first to know about new arrivals</p>
          <button type="button" className="sign_up">
            Sign up
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Men;
