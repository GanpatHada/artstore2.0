
import { useNavigate } from "react-router-dom";
import "./Products.css";
import { AiFillHeart } from "react-icons/ai";
const Products = ({product:{image,title,categoryName,price,oldprice,_id}}) => {
  const navigate=useNavigate()
 
  return (
    <div className="product-boxes" onClick={()=>navigate(`/products/${_id}`)} >
      <div className="wishlist-box">
        <AiFillHeart style={{ color:'red'}} />
      </div>
      <div className="image-box">
        <img
          src={image}
          alt=""
        />
      </div>
      <div className="product-title-box">
        <strong>{title.length>20?title.slice(0,20)+'...':title}</strong>
        <p>{categoryName}</p>
      </div>
      <div className="price-box">
        <span id="oldprice">INR : {oldprice}</span>
        <span id="newprice">INR : {price}</span>
      </div>
      <div className="cart-buttons-box">
         <button>Add to cart</button>
      </div>
    </div>
  );
};

export default Products;
