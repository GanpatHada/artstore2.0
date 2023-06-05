import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { LoadingContext } from "./LoadingContext";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const{handleClose,handleOpen}=useContext(LoadingContext)
  const [showProducts, setShowProducts] = useState([]);
  const [topCategories, setTopCategories] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [ratingValue, setRatingValue] = useState(0);
  const [priceValue, setPriceValue] = useState(false);
  const [sortValue, setSortValue] = useState(false);
  const [categoriesArray, setCategoriesArray] = useState([]);

  const fetchAllProducts = async () => {
    handleOpen();
    try {
      const response = await fetch("/api/products", {
        method: "GET",
      });
      if (response.status === 200) {
        const { products } = await response.json();
        displayProducts(products);
        handleClose();
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
    console.log(searchValue)
  }

  const handleRatingChange=(value)=>{
    setRatingValue(value)
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
         setRatingValue(0)
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
        ratingValue,
        categoriesArray,
        priceValue,
        sortValue,
        handleSearchChange,
        handleRatingChange,
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
