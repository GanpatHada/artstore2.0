import React, { useContext } from "react";
import "./CartItems.css";
import { useEffect } from "react";
import { ProductContext} from "../../context/ProductContext";
import { UserContext } from "../../context/UserContext";

const CartItems = () => {

  const{fetchCartItems,handleDecreaseQuantity,handleIncreaseQuantity,removeCartItem,handleAddToWishlist}=useContext(ProductContext)
  const{user}=useContext(UserContext)

  const isProductAvailableInWishList=(id)=>{
     return  user.wishlist.find((e)=>e._id===id)
  }
  
   const {cart}=user;
  useEffect(() => {
    fetchCartItems();
  }, [])
  
  return (
    <div id="cart-items-box">
      <h1>Cart</h1>
      {cart.length>0?<div id="cart-items-wrapper">
        {cart.map(({productDetails,quantity})=><div className="each-cart-item" key={productDetails._id}>
          <section className="image-section">
            <img src={productDetails.image} alt="" />
          </section>
          <section className="data-section">
            <div >
              <div className="cart-data-wrapper">
                <h3>{productDetails.title}</h3>
                <h1>&#8377; {productDetails.price}</h1>
                <p style={{textDecoration:'line-through'}}>{productDetails.oldprice}</p>
                <div id="counter">
                  <button className="all-centered" onClick={()=>handleIncreaseQuantity(productDetails._id)}>+</button>
                  <div id="count" className="all-centered">{quantity}</div>
                  <button disabled={quantity<=1} className="all-centered" onClick={()=>handleDecreaseQuantity(productDetails._id)}>-</button>
                </div>
                {!isProductAvailableInWishList(productDetails._id)&&<button className="move-to-wishlist-btn" onClick={()=>handleAddToWishlist(productDetails,false)}>Move to WishList</button>}
              </div>
            </div>
          </section>
          <button className="remove-cart-item-btn" onClick={()=>removeCartItem(productDetails._id)}>Remove</button>
        </div>)}
      </div>:
     <div id="empty-cart-box" className="all-centered">Your cart is Empty</div> }
    </div>
  );
};

export default CartItems;
