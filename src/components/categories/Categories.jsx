import React from "react";
import "./Categories.css";
import { useEffect } from "react";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
const Categories = () => {
  const { fetchProductsByCategories, topCategories ,handleCategoryClicked } = useContext(ProductContext);
  useEffect(() => {
    fetchProductsByCategories();
  }, []);
  return (
    <div id="categories-box">
      <h1>Top Categories</h1>
      <div>
        {topCategories.map(({ _id, categoryName,image }) => {
          return (
            <div key={_id} className="each-category-box">
              <div className="category-image-box" onClick={()=>handleCategoryClicked(_id)}>
                 <img src={image} alt="Not found" />
              </div>
              <p className="text-centered">{categoryName}</p>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
