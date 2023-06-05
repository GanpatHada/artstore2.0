import "./ProductsList.css";
import Filter from "../../components/filter/Filter";
import Products from "../../components/products/Products";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext";
import { LoadingContext } from "../../context/LoadingContext";
import Loader from '../../components/loader/Loader'
const ProductList = () => {
  const {
    showProducts,
    fetchAllProducts,
    searchValue,
    categoriesArray,
    priceValue,
    sortValue,
    ratingValue,
  } = useContext(ProductContext);
  const {open}=useContext(LoadingContext)
  useEffect(() => {
    fetchAllProducts();
    
  }, []);

  const filteredData = () => {
    let originalData = showProducts;
    if (searchValue.length > 0) {
      originalData = originalData.filter(
        ({ title, categoryName, artist, price }) =>
          title.toLowerCase().includes(searchValue.toLowerCase()) ||
          categoryName.toLowerCase().includes(searchValue.toLowerCase()) ||
          price === searchValue
      );
    }

    if (ratingValue) {
      originalData = originalData.filter(({ rating }) => rating >= ratingValue);
    }

    if (categoriesArray.length > 0) {
      originalData = originalData.filter(({ categoryName }) =>
        categoriesArray.includes(categoryName)
      );
    }
    if (priceValue) {
      if (priceValue === "7000 TO INFINITY")
        originalData = originalData.filter(({ price }) => price >= 7000);
      if (priceValue === "5000 TO 7000")
        originalData = originalData.filter(
          ({ price }) => price >= 5000 && price <= 7000
        );
      if (priceValue === "3000 TO 5000")
        originalData = originalData.filter(
          ({ price }) => price >= 3000 && price <= 5000
        );
      if (priceValue === "1000 TO 3000")
        originalData = originalData.filter(
          ({ price }) => price >= 1000 && price <= 3000
        );
      if (priceValue === "0 TO 1000")
        originalData = originalData.filter(({ price }) => price <= 1000);
    }
    if (sortValue) {
      if (sortValue === "LOW TO HIGH")
        originalData = originalData.sort(
          (val1, val2) => val1.price - val2.price
        );
      if (sortValue === "HIGH TO LOW")
        originalData = originalData.sort(
          (val1, val2) => val2.price - val1.price
        );
    }

    return originalData;
  };
  return (
    <>
    {open?<Loader/>:<div id="productlist">
      <Filter />
      <main id="products-box">
        <h2>
          Products&nbsp;<span>showing Products&nbsp;{filteredData().length} out of {showProducts.length}</span>
        </h2>
          {filteredData().length>0?<div>
            {filteredData().map((product) => (
              <Products key={product._id} product={product} />
            ))}
          </div>:<div className="all-centered"  style={{height:'calc(100vh - 120px)',width:'100%'}}>No Products found</div>}
         
      </main>
    </div>}
    </>
  );
};

export default ProductList;
