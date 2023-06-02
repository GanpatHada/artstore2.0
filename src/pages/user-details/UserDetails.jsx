import React from 'react'
import './UserDetails.css'
import { useState } from 'react'
const UserDetails = () => {
  const[currentUserDetails,setCurrentUserDetails]=useState('Profile')  
  return (
    <div id='user-details-box'>
        <nav>
            <div onClick={(e)=>setCurrentUserDetails(e.target.innerText)} className={currentUserDetails==='Profile'?'active-tab':'unactive-tab'} > 
                Profile
            </div>
            <div onClick={(e)=>setCurrentUserDetails(e.target.innerText)} className={currentUserDetails==='Address'?'active-tab':'unactive-tab'}>
                Address
            </div>
            <div onClick={(e)=>setCurrentUserDetails(e.target.innerText)} className={currentUserDetails==='My orders'?'active-tab':'unactive-tab'}>
                My orders
            </div>
        </nav>
        {/* <div>

        </div>
        <section id="profile-box">
            profilebox
        </section>
        <section id="address-box">
             addressbox
        </section>
        <section id="orders-box">
              MyOrders
        </section> */}
                 

    </div>
  )
}

export default UserDetails