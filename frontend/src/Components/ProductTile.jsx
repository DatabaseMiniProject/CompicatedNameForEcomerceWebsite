import "../assets/styles/Product_card.css";
function ProductTile() {
  return (
    <div className="product_tile">
      <a href="/" className="image_div">
        <img
          src="https://nb.scene7.com/is/image/NB/u9060eeb_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440"
          alt="product_image"
        />
      </a>
      <div className="product_desc">
        <p id="prod_name">Product Name</p>
        <p id="prod_price">Product Price</p>
      </div>
      <div className="product_category">
        <p>Category</p>
      </div>
    </div>
  );
}

export default ProductTile;
