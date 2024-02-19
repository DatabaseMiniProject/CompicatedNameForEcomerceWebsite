import "../assets/styles/Product_card.css";
function ProductTile({url,name,price,category}) {
  return (
    <div className="product_tile">
      <a href="/" className="image_div">
        <img
          src={url}
          alt="product_image"
        />
      </a>
      <div className="product_desc">
        <p id="prod_name">{name}</p>
        <p id="prod_price">${price}</p>
      </div>
      <div className="product_category">
        <p>{category}</p>
      </div>
    </div>
  );
}

export default ProductTile;
