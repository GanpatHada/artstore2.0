import React from "react";
import "./Navbar.css";
import MainLogo from "../../images/mainlogo.png";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext} from "../../context/ProductContext";
import { UserContext } from "../../context/UserContext";
const Navbar = () => {
  const { handleSearchChange, searchValue ,getToken} = useContext(ProductContext);
  const{user}=useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div id="navbar">
      <nav>
        <NavLink to="/">
          <img src={MainLogo} alt=".." id="logo" />
        </NavLink>
        <input
          type="search"
          value={searchValue}
          onFocus={() => navigate("/products")}
          onChange={e=>handleSearchChange(e.target.value)}
          placeholder="Search by name / category / price  "
        />
        <div>
          <NavLink to="/cart">
            <div className="cart-box">
              <BsCart3 className="cart-icon" />
              {getToken()&&<div className="cart-badge">{user.cart.length}</div>}
            </div>
          </NavLink>
          <NavLink to="/wishlist">
            <div className="cart-box">
              <AiOutlineHeart className="cart-icon" />
              {getToken()&&<div className="cart-badge">{user.wishlist.length}</div>}
            </div>
          </NavLink>
          <NavLink to={"/userdetails"}>
            <div className="cart-box">
              <AiOutlineUser id="profile-icon" className="cart-icon" />
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
