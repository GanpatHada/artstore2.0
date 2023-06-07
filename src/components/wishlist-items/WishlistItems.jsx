import React from 'react'
import './WishlistItems.css'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { ProductContext } from '../../context/ProductContext'
const WishlistItems = ({product}) => {

  const{image,title,price,_id}=product;
  const{user}=useContext(UserContext)  
  const{handleAddtoCartProduct,handleIncreaseQuantity}=useContext(ProductContext)


  const isProductAvailableinCart=(id)=>{
    return user.cart.find((e=>e.productDetails._id===id))

}  
    
  return (
    <div className='each-wishlist-items'>
        <div className="imagesection">
            <img src={image} alt=".." />
        </div>
        <div className="detail-section text-centered">
            <h4>{title}</h4>
             <h2>Price : {price}</h2>
        </div>
        <div className="button-section">
            {
                !isProductAvailableinCart(_id)?<button onClick={()=>handleAddtoCartProduct(product)}>Move to cart</button>:
                <button onClick={()=>handleIncreaseQuantity(_id)}>Move to cart +</button>
            }
            
        </div>
    </div>
  )
}

export default WishlistItems