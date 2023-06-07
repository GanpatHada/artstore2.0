import React, { useContext, useEffect, useState } from "react";
import "./ProductDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { ProductContext } from "../../context/ProductContext";
const ProductDetails = () => {
  const [particularProduct, setParticularProduct] = useState(false);
  const navigate=useNavigate();
  const{user}=useContext(UserContext)
  const{getToken,handleAddtoCartProduct,handleAddToWishlist}=useContext(ProductContext)
  const { id } = useParams();
  const fetchCurrentProduct = async () => {
    try {
      let response = await fetch(`/api/products/${id}`, {
        method: "GET",
      });
      if (response.status === 200) {
        response = await response.json();
        setParticularProduct(await response.product);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  const isProductAvailableinCart=(id)=>{
    return getToken()?user.cart.find((e=>e.productDetails._id===id)):false

}
  const isProductAvailableInWishList=(id)=>{
    return getToken()?user.wishlist.find((e=>e._id===id)):false

}

  useEffect(() => {
    fetchCurrentProduct();
  }, []);

  return (
    <div id="product-details-box" className="all-centered">
      {particularProduct && (
        <div id="product-details-box-content">
          <section id="image-section">
            <img src={particularProduct.image} alt="" />
          </section>
          <section id="data-section">
            <h3>Product Details</h3>
            <h1>{particularProduct.title}</h1>
            <div>
              <p>{particularProduct.specifications}</p>
              <p>{particularProduct.dimensions}</p>
            </div>
            <p>
              <strong>Artist : </strong>
              {particularProduct.artist}
            </p>
            <p id="old-price">{particularProduct.oldprice}</p>
            <p id="special-price">{particularProduct.price}</p>
            <p>{particularProduct.rating}&nbsp;⭐</p>
            <div>
            {isProductAvailableinCart(particularProduct._id)?<button style={{backgroundColor:'#292929'}} onClick={()=>{navigate('/cart')}}>Go to cart</button>:
         <button  onClick={()=>getToken()?handleAddtoCartProduct(particularProduct):navigate('/login')}>Add to cart</button>}&nbsp;
         
         
         {isProductAvailableInWishList(particularProduct._id)?<button style={{backgroundColor:'#292929'}} onClick={()=>navigate('/wishlist')}>Go to WishList</button>:
          <button onClick={()=>getToken()?handleAddToWishlist(particularProduct):navigate('/wishlist')}>Add to WishList</button>
         }
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
