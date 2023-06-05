import React from 'react'
import './ProductDetails.css'
import { useParams } from 'react-router-dom'
const ProductDetails = () => {
  let id = useParams();  
  return (
    <div id='product-details-box' className='all-centered'>
        <div id="product-details-box-content">
            <section id="image-section">

            </section>
            <section id="data-section">
                <h3>Product Details</h3>
                <h1>name</h1>
                <p>desc</p>
                <p>artist</p>
                <p>price</p>
                <p>special price</p>
                <button>Add to cart</button>
                <button>Add to WishList</button>
            </section>
        </div>
         
    </div>
  )
}

export default ProductDetails