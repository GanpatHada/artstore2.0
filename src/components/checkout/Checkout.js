import React, { useContext } from "react";
import "./Checkout.css";
import { UserContext } from "../../context/UserContext";
import { NotificationContext } from "../../context/NotificationContext";
import { useState } from "react";
const Checkout = () => {
  const { user } = useContext(UserContext);
  const {showAlert}=useContext(NotificationContext)
  const [selectedAddress,setSelctedAddress]=useState(false);
  const[selectChecked,setSelectedChecked]=useState(false);
  const handlePlaceOrder=()=>{
      return showAlert('success','Congratulations','Your order has been placed')  
  }

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
        {user.cart.length>0&&<div id="check-out-fields">
          <p>Total price : {totalPrice}</p>
          <p>Total Items : {totalItems}</p>
          <p>Actual Price :{oldprice}</p>
          <h4>Discount : {oldprice - totalPrice}</h4>
          <p>Dilivery Charge : {"50"}</p>
          <hr />
          <h4>Total amount : {totalPrice+50}</h4>
          <hr />
          <p>You have saved {oldprice-(totalPrice+50)} on this order</p>
          <div className="all-centered" style={{justifyContent:'flex-start'}}>
          <input checked={selectChecked} onChange={()=>setSelectedChecked(!selectChecked)} type="checkbox" id='select-address' />
          <label htmlFor="select-address" >select Address</label>
          </div>
          <div id="addressbox" style={{display:selectChecked?'block':'none'}}>
            {
              user.address.map(({details,city,state,pin,_id})=>{
                 return <div>
                   <input onChange={()=>setSelctedAddress(_id)} type="radio" checked={selectedAddress===_id} name="address-selector" id={_id} />
                   <label htmlFor={_id}>{details},{state},{city},{pin}</label> 
                 </div>
              })
            }
          </div>
          <button disabled={!(selectedAddress&&selectChecked)} onClick={handlePlaceOrder}>Place your order</button>
        </div>}
      </div>
      
    </div>
  );
};

export default Checkout;
