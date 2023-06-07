import React, { useContext } from "react";
import "./Checkout.css";
import { UserContext } from "../../context/UserContext";
const Checkout = () => {
  const { user } = useContext(UserContext);
  const { totalPrice, totalItems, oldprice } = user.cart.reduce(
    (total, curTotal) => {
      return {
        ...total,
        totalPrice:
          curTotal.productDetails.price * curTotal.quantity + total.totalPrice,
        totalItems: curTotal.quantity + total.totalItems,
        oldprice: curTotal.productDetails.oldprice * curTotal.quantity+total.oldprice,
      };
    },
    { totalPrice: 0, totalItems: 0, oldprice: 0 }
  );
  return (
    <div id="check-out-box">
      <div>
        <h1>Summary</h1>
        <hr />
        <div>
          <h3>Total price : {totalPrice}</h3>
          <h3>Total Items : {totalItems}</h3>
          <h4>Actual Price :{oldprice}</h4>
          <h4>Discount : {oldprice - totalPrice}</h4>
          <p>Dilivery Charge : {"50"}</p>
          <hr />
          <h4>Total amount : {totalPrice+50}</h4>
          <hr />
          <p>You have saved {oldprice-(totalPrice+50)} on this order</p>
          <button>Place your order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
