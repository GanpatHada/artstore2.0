import React from "react";
import "./Navbar.css";
import MainLogo from "../../images/mainlogo.png";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div id="navbar">
      <nav>
        <NavLink to="/">
          <img src={MainLogo} alt=".." id="logo" />
        </NavLink>
        <input type="search" placeholder="Search by name " />
        <div>
         
          <NavLink to="/cart">
            <div className="cart-box">
              <BsCart3 className="cart-icon" />
              <div className="cart-badge">1</div>
            </div>
          </NavLink>
          <NavLink to="/wishlist">
            <div className="cart-box">
              <AiOutlineHeart className="cart-icon" />
              <div className="cart-badge">8</div>
            </div>
          </NavLink>
          <NavLink to="/login">
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