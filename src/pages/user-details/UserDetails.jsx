import React, { useContext, useEffect } from "react";
import "./UserDetails.css";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineUser } from "react-icons/ai";
import { UserContext } from "../../context/UserContext";
import AddressDialog from "../../components/dialog/Addressdialog";

const UserDetails = () => {
  const { user } = useContext(UserContext);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { handleLogout } = useContext(UserContext);
  const [currentUserDetails, setCurrentUserDetails] = useState("Profile");
  return (
    <>
      <AddressDialog open={open} onClose={handleClose} />
      <div id="user-details-box">
        <nav>
          <div
            onClick={(e) => setCurrentUserDetails(e.target.innerText)}
            className={
              currentUserDetails === "Profile" ? "active-tab" : "unactive-tab"
            }
          >
            Profile
          </div>
          <div
            onClick={(e) => setCurrentUserDetails(e.target.innerText)}
            className={
              currentUserDetails === "Address" ? "active-tab" : "unactive-tab"
            }
          >
            Address
          </div>
          <div
            onClick={(e) => setCurrentUserDetails(e.target.innerText)}
            className={
              currentUserDetails === "My orders" ? "active-tab" : "unactive-tab"
            }
          >
            My orders
          </div>
        </nav>
        <div>
        {currentUserDetails === "Profile" && (
          <div id="profile-box" className="all-centered">
            <div className="text-centered">
              <AiOutlineUser id="user-image" />
              <h3>
                Name : <strong>{user?.name}</strong>
              </h3>
              <p>
                <strong>Email :</strong> {user?.email}
              </p>
              <button id="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        )}
        {currentUserDetails === "Address" && (
          <div id="address-box">
            {user?.address?.length===0?<h3>No address found</h3>:
            user.address?.map(({ pin, city, state, details }, index) => {
              return (
                <div key={index} className="all-centered">
                  {details + city + state + pin}
                </div>
              );
            })}

            <button
              id="add-icon"
              className="all-centered"
              onClick={handleClickOpen}
            >
              <AiOutlinePlus />
            </button>
          </div>
        )}
        {currentUserDetails==="My orders"&&<div id="order-box" className="all-centered">
           <h3>No orders yet</h3>
        </div>}
        </div>
      </div>
    </>
  );
};

export default UserDetails;
