import React from "react";
import Slider from "@mui/material/Slider";
import "./Filter.css";

const Filter = () => {
  return (
    <aside id="filter-box">
      <div className="heading">
        <h2>Filter</h2>
        <button>clear</button>
      </div>
      <div className="sub-headings">
        <h4>Price</h4>
        <div id="range-box">
          <Slider
            sx={{color:'orangered'}}
            defaultValue={50}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </div>
      </div>
      <div className="sub-headings">
        <h4>Category</h4>
        <ul>
          <li>
            <input type="checkbox" id="category-1" />
            <label htmlFor="category-1">Men clothing</label>
          </li>
          <li>
            <input type="checkbox" id="category-2" />
            <label htmlFor="category-2">Women clothing</label>
          </li>
        </ul>
      </div>
      <div className="sub-headings">
        <h4>Rating</h4>
        <ul>
          <li>
            <input type="radio" id="radio-1" name="common" />
            <label htmlFor="radio-1">5 and above</label>
          </li>
          <li>
            <input type="radio" id="radio-2" name="common" />
            <label htmlFor="radio-2">4 and above</label>
          </li>
          <li>
            <input type="radio" id="radio-3" name="common" />
            <label htmlFor="radio-3">3 and above</label>
          </li>
          <li>
            <input type="radio" id="radio-4" name="common" />
            <label htmlFor="radio-4">2 and above</label>
          </li>
          <li>
            <input type="radio" id="radio-5" name="common" />
            <label htmlFor="radio-5">1 and above</label>
          </li>
        </ul>
      </div>
      <div className="sub-headings">
        <h4>Sort by</h4>
        <ul>
          <li>
            <input type="radio" id="radio-11" name="common1" />
            <label htmlFor="radio-11">Price Low to High</label>
          </li>
          <li>
            <input type="radio" id="radio-22" name="common1" />
            <label htmlFor="radio-22">Price high to Low</label>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Filter;
