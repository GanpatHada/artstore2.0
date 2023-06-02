
import "./Products.css";
import { AiFillHeart } from "react-icons/ai";
const Products = () => {
 
  return (
    <div className="product-boxes" >
      <div className="wishlist-box">
        <AiFillHeart style={{ color:'red'}} />
      </div>
      <div className="image-box">
        <img
          src="https://images.unsplash.com/photo-1685453628701-bdf02c353bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
      <div className="product-title-box">
        this is title
      </div>
      <div className="price-box">
        INR:4000/-
      </div>
      <div className="cart-buttons-box">
         <button>Add to cart</button>
      </div>
    </div>
  );
};

export default Products;
