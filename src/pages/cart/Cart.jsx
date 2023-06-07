import React from 'react'
import './Cart.css'
import Checkout from '../../components/checkout/Checkout'
import CartItems from '../../components/cart-items/CartItems'

const Cart = () => {
  return (
    <div id="cart-box">
       <div id="cart-checkout-box">
        <CartItems/>
        <Checkout/>
       </div>
    </div>
  )
}

export default Cart