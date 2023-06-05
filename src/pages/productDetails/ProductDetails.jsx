import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const [particularProduct, setParticularProduct] = useState(false);
  const { id } = useParams();
  const fetchCurrentProduct = async () => {
    try {
      let response = await fetch(`/api/products/${id}`, {
        method: "GET",
      });
      console.log(response);
      if (response.status === 200) {
        response = await response.json();
        console.log(response);
        setParticularProduct(await response.product);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
              <button>Add to cart</button>&nbsp;
              <button>Add to WishList</button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
