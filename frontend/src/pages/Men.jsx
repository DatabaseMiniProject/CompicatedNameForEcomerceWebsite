import "../assets/styles/Men.css";
import Card from "../Components/ProductTile";
import categoryShoeLogo from "../assets/Images/shoeCategory.jpg";
import clothingCategoryLogo from "../assets/Images/clothingCategory.jpg";
import accessoriesCategoryLogo from "../assets/Images/categoryAccessoriesLogo.jpg";
import { useState } from "react";
function Men() {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="main">
      {/* spacer with the men name */}
      <div className="row__men">
        <div className="row__men__full-width">
          <h2>Men</h2>
        </div>
      </div>
      {/* The category banner with links */}
      <div className="category_container">
        <div className="category_sub_container">
          <div className="category category_shoes">
            <a className="category_links" href="/">
              <img src={categoryShoeLogo} alt="shoes" />
              <p>Shoes</p>
            </a>
          </div>
          <div className="category category_clothing">
            <a className="category_links" href="/">
              <img src={clothingCategoryLogo} alt="shoes" />
              <p>Clothing</p>
            </a>
          </div>
          <div className="category category_accessories">
            <a className="category_links" href="/">
              <img src={accessoriesCategoryLogo} alt="shoes" />
              <p>Accessories</p>
            </a>
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
              <h1 className="Category__count">Men</h1>
              <p>(509)</p>
            </span>
            <button
              className="toggle_filter"
              onClick={() => setShowFilter((showFilter) => !showFilter)}
              type="button"
            >
              show filter
            </button>
            <select className="sort_by">
              <option>New</option>
              <option>prize high to low</option>
              <option>price low to high</option>
            </select>
          </div>
        </div>
        <div className={showFilter ? "product_container" : "expanded_products"}>
          <div>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card/>
            <Card/>
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
          <h1>Men’s Sneakers and Athletic Wear</h1>
          <p>
            Step up and step out. New Balance sneakers for men help you find
            your stride everywhere, from the street to the field to the track.
            Whether you need shoes for everyday use or are looking for athletic
            wear for the new season, we’ve got your covered. Browse our men’s
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
    </div>
  );
}

export default Men;