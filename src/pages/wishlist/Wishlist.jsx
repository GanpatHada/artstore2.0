import React from 'react'
import "./Wishlist.css"
import WishlistItems from '../../components/wishlist-items/WishlistItems'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
const Wishlist = () => {
  const{user:{wishlist}}=useContext(UserContext)
  return (
    <div id='wishlist-box'>
        <div id="wishlist-content-box">
            <h1>Wishlist</h1>
            <hr />
            <div id="wishlist-items">
                {
                    wishlist.map((eachWishlist)=>{
                        return <WishlistItems key={eachWishlist._id
                        } product={eachWishlist}/>
                    })
                }
                
            </div>
        </div>
    </div>
  )
}

export default Wishlist