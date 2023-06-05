import { useState } from "react";
import { createContext } from "react";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [showProducts, setShowProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [topCategories, setTopCategories] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [rangeValue, setRangeValue] = useState(0);
  const [priceValue, setPriceValue] = useState(false);
  const [sortValue, setSortValue] = useState(false);
  const [categoriesArray, setCategoriesArray] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const response = await fetch("/api/products", {
        method: "GET",
      });
      if (response.status === 200) {
        const { products } = await response.json();
        setProducts(products);
        displayProducts(products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const displayProducts = (products) => {
    return setShowProducts(products);
  };

  const fetchProductsByCategories = async () => {
    try {
      const response = await fetch("/api/categories", {
        method: "GET",
      });
      if (response.status === 200) {
        const { categories } = await response.json();
        setTopCategories(categories);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchChange=(value)=>{
    setSearchValue(value);
  }

  const handleRangeChange=(value)=>{
    setRangeValue(value)
  }

  const handleCategoryChange=(value)=>{
    if(categoriesArray.includes(value))
        setCategoriesArray(categoriesArray.filter((product)=>product!==value))
    else
       setCategoriesArray([...categoriesArray,value])     
  }

  const handlePriceChange=(value)=>{
         setPriceValue(value)
  }

  const handleSortChange=(type)=>{
         setSortValue(type);
  }

  const handleClearFilter=()=>{
         setSearchValue("")
         setRangeValue(0)
         setCategoriesArray([])
         setPriceValue(false)
         setSortValue(false)
  }



 
 

  

  

  return (
    <ProductContext.Provider
      value={{
        showProducts,
        fetchProductsByCategories,
        topCategories,
        fetchAllProducts,

        searchValue,
        rangeValue,
        categoriesArray,
        priceValue,
        sortValue,
        handleSearchChange,
        handleRangeChange,
        handlePriceChange,
        handleSortChange,
        handleCategoryChange,
        handleClearFilter
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
