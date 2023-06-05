import "./ProductsList.css";
import Filter from "../../components/filter/Filter";
import Products from "../../components/products/Products";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext";

const ProductList = () => {
  const { fetchAllProducts,allFilter,showProducts} =
    useContext(ProductContext);
  useEffect(() => {
    fetchAllProducts();
    
  }, []);
  return (
    <div id="productlist">
      <Filter />
      <main id="products-box">
        <h2>Products</h2>
        <div>
           {showProducts.map((product) => (
            <Products key={product._id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductList;
