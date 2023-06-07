
import { useNavigate } from "react-router-dom";
import "./Products.css";
import { AiFillHeart } from "react-icons/ai";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { UserContext } from "../../context/UserContext";
const Products = ({product}) => {
  const navigate=useNavigate()
  const{user}=useContext(UserContext)
  const{handleAddtoCartProduct,handleAddToWishlist,getToken}=useContext(ProductContext)
  const{image,title,categoryName,price,oldprice,_id}=product;

  const isProductAvailableinCart=(id)=>{
      return getToken()?user.cart.find((e=>e.productDetails._id===id)):false

  }
  
  const isProductAvailableInWishList=(id)=>{
    return getToken()?user.wishlist.find((e)=>e._id===id):false
  }

  return (
    <div className="product-boxes" >
      <div className="wishlist-box" onClick={()=>handleAddToWishlist(product,isProductAvailableInWishList(product._id))}>
        <AiFillHeart style={{ color:isProductAvailableInWishList(product._id)?'red':'white'}} />
      </div>
      <div onClick={()=>navigate(`/products/${_id}`)}>
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
      </div>
      <div className="cart-buttons-box">
         {isProductAvailableinCart(_id)?<button style={{backgroundColor:'#292929'}} onClick={()=>{navigate('/cart')}}>Go to cart</button>:
         <button  onClick={()=>getToken()?handleAddtoCartProduct(product):navigate('/login')}>Add to cart</button>}
      </div>
    </div>
  );
};

export default Products;
