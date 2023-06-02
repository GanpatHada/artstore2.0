
import "./ProductsList.css";
import Filter from "../../components/filter/Filter";
import Products from "../../components/products/Products";

const ProductList = () => {


    


    
  return (
    <div id="productlist">
      <Filter />
      <main id="products-box">
        <h2>Products</h2>
        <div>
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
        </div>
      </main>
    </div>
  );
};

export default ProductList;
