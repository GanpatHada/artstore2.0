import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { LoadingContext } from "./LoadingContext";
import { NotificationContext } from "./NotificationContext";
import { UserContext } from "./UserContext";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const { showAlert } = useContext(NotificationContext);
  const { startLoading, stopLoading } = useContext(LoadingContext);
  const { setUser, user } = useContext(UserContext);
  const [showProducts, setShowProducts] = useState([]);
  const [topCategories, setTopCategories] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [ratingValue, setRatingValue] = useState(0);
  const [priceValue, setPriceValue] = useState(false);
  const [sortValue, setSortValue] = useState(false);
  const [categoriesArray, setCategoriesArray] = useState([]);

  const [cartProducts, setCartProducts] = useState([]);

  const getToken = () => localStorage.getItem("token");

  const fetchAllProducts = async () => {
    startLoading();
    try {
      const response = await fetch("/api/products", {
        method: "GET",
      });
      if (response.status === 200) {
        const { products } = await response.json();
        displayProducts(products);
        stopLoading();
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

  const handleSearchChange = (value) => {
    setSearchValue(value);
    console.log(searchValue);
  };

  const handleRatingChange = (value) => {
    setRatingValue(value);
  };

  const handleCategoryChange = (value) => {
    if (categoriesArray.includes(value))
      setCategoriesArray(
        categoriesArray.filter((product) => product !== value)
      );
    else setCategoriesArray([...categoriesArray, value]);
  };

  const handlePriceChange = (value) => {
    setPriceValue(value);
  };

  const handleSortChange = (type) => {
    setSortValue(type);
  };

  const handleClearFilter = () => {
    setSearchValue("");
    setRatingValue(0);
    setCategoriesArray([]);
    setPriceValue(false);
    setSortValue(false);
  };

  const handleIncreaseQuantity = (productId) => {
    let tempcart = user.cart;
    tempcart = tempcart.map(({ productDetails, quantity }) => {
      if (productDetails._id === productId)
        return { productDetails, quantity: quantity + 1 };
      return { productDetails, quantity };
    });
    setUser({ ...user, cart: tempcart });
    showAlert('success','Success','Product Quantity has been increased')
  };

  const handleDecreaseQuantity = (productId) => {
    let tempcart = user.cart.map(({ productDetails, quantity }) => {
      if (productDetails._id === productId)
        return { productDetails, quantity: quantity - 1 };
      return { productDetails, quantity };
    });

    setUser({ ...user, cart: tempcart });
    showAlert('success','Success','Product Quantity has been decreased')
  };

  const removeCartItem = (productId) => {
    let tempCart = user.cart.filter((product) => {
      return product.productDetails._id !== productId;
    });
    showAlert("success", "Success", "Item has been removed");
    setUser({ ...user, cart: tempCart });
  };

  const handleAddtoCartProduct = async (product) => {
    startLoading();
    try {
      let response = await fetch("/api/user/cart", {
        method: "POST",
        headers: {
          authorization: getToken(),
        },
        body: JSON.stringify(product),
      });
      if (response.status === 201) {
        setUser({
          ...user,
          cart: [...user.cart, { productDetails: product, quantity: 1 }],
        });
        showAlert(
          "success",
          "Product Added",
          "Your Product has been added to cart"
        );
      }
      stopLoading();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCartItems = async () => {
    try {
      let response = await fetch("/api/user/cart", {
        method: "GET",
        headers: {
          authorization: getToken(),
        },
      });
      if (response.status === 200) {
        response = await response.json();
        console.log(response.cart);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToWishlist = async (product, isAvailable) => {
    if (!isAvailable) {
      startLoading();
      try {
        let response = await fetch("/api/user/wishlist", {
          method: "POST",
          headers: {
            authorization: getToken(),
          },
          body: JSON.stringify(product),
        });
        if (response.status === 201) {
          setUser({ ...user, wishlist: [...user.wishlist, product] });
          showAlert(
            "success",
            "Product Added",
            "Your Product has been added to Wishlist"
          );
        }
        stopLoading();
      } catch (error) {
        console.log(error);
      }
    }
    else{
           startLoading();
           let tempWishList = user.wishlist.filter((p) => {
            return p._id !== product._id;
          });
          showAlert("success", "Success", "Item has been removed");
          setUser({ ...user, wishlist: tempWishList });
          stopLoading();
    }
  };

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
        handleClearFilter,
        fetchCartItems,
        cartProducts,
        handleAddtoCartProduct,
        getToken,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
        removeCartItem,

        handleAddToWishlist,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
