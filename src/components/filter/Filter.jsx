import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import "./Filter.css";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

const Filter = () => {
  const {
    topCategories,
    ratingValue,
    categoriesArray,
    priceValue,
    sortValue,
    handleRatingChange,
    handlePriceChange,
    handleSortChange,
    handleCategoryChange,
    handleClearFilter,
  } = useContext(ProductContext);

  return (
    <aside id="filter-box">
      <div id="filter-box-content">
        <div className="heading">
          <h2>Filter</h2>
          <button onClick={handleClearFilter}>clear</button>
        </div>
        <div className="sub-headings">
          <h4>Rating {ratingValue>0&&`above ${ratingValue}`}</h4>
          <div id="range-box">
            <Slider
              onChange={(e) => handleRatingChange(e.target.value)}
              sx={{ color: "orangered" }}
              aria-label="star"
              defaultValue={0}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={0}
              max={4}
              value={ratingValue}
            />
          </div>
        </div>
        <div className="sub-headings">
          <h4>Category</h4>
          <ul>
            {topCategories.map(({ categoryName, _id }) => {
              return (
                <li key={_id}>
                  <input
                    type="checkbox"
                    checked={categoriesArray.includes(categoryName)}
                    id={_id}
                    value={categoryName}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                  />
                  <label htmlFor={_id}>{categoryName}</label>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="sub-headings">
          <h4>Price</h4>
          <ul>
            <li>
              <input
                type="radio"
                id="radio-1"
                name="common"
                value={"7000 TO INFINITY"}
                checked={priceValue==="7000 TO INFINITY"}
                onChange={(e) => handlePriceChange(e.target.value)}
              />
              <label htmlFor="radio-1">above INR 7000</label>
            </li>
            <li>
              <input
                type="radio"
                id="radio-2"
                name="common"
                value={"5000 TO 7000"}
                checked={priceValue==="5000 TO 7000"}
                onChange={(e) => handlePriceChange(e.target.value)}
              />
              <label htmlFor="radio-2">INR 5000-7000</label>
            </li>
            <li>
              <input
                type="radio"
                id="radio-3"
                name="common"
                // checked={}
                checked={priceValue==="3000 TO 5000"}
                value={"3000 TO 5000"}
                onChange={(e) => handlePriceChange(e.target.value)}
              />
              <label htmlFor="radio-3">INR 3000-5000 </label>
            </li>
            <li>
              <input
                type="radio"
                id="radio-4"
                name="common"
                // checked={}
                value={"1000 TO 3000"}
                checked={priceValue==="1000 TO 3000"}
                onChange={(e) => handlePriceChange(e.target.value)}
              />
              <label htmlFor="radio-4">INR 1000-3000</label>
            </li>
            <li>
              <input
                type="radio"
                id="radio-5"
                name="common"
                value={"0 TO 1000"}
                checked={priceValue==="0 TO 1000"}
                onChange={(e) => handlePriceChange(e.target.value)}
              />
              <label htmlFor="radio-5">below INR 1000</label>
            </li>
          </ul>
        </div>
        <div className="sub-headings">
          <h4>Sort by</h4>
          <ul>
            <li>
              <input
                type="radio"
                id="radio-11"
                name="common1"
                checked={sortValue === "LOW TO HIGH"}
                onChange={() => handleSortChange("LOW TO HIGH")}
              />
              <label htmlFor="radio-11">Price Low to High</label>
            </li>
            <li>
              <input
                type="radio"
                id="radio-22"
                name="common1"
                checked={sortValue === "HIGH TO LOW"}
                onChange={() => handleSortChange("HIGH TO LOW")}
              />
              <label htmlFor="radio-22">Price high to Low</label>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Filter;
