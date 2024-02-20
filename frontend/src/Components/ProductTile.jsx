import "../assets/styles/Product_card.css";
function ProductTile({setProdDesc,url,name,price,category}) {
  const openProductPage = async()=>{
    //set the object of current prod and update state to trigger popup with cancel button
  }
  return (
    <div className="product_tile">
      <a href="/" className="image_div">
        <img
          src={url}
          alt="product_image"
        />
      </a>
      <div className="product_desc"  onClick={openProductPage}>
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
