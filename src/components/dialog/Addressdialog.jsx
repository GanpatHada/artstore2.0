import React, { useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import "./Addressdialog.css";
import { NotificationContext } from "../../context/NotificationContext";
import { UserContext } from "../../context/UserContext";

export default function AddressDialog(props) {
  const {user}=useContext(UserContext);
  const { onClose, open ,dialogFor} = props;
  const getAddressDetails=(id)=>{
      console.log(user.address.find(({_id})=>id===_id));
  }

  const { addUserAddress } = useContext(UserContext);
  const { showAlert } = useContext(NotificationContext);
  const [address, setAddress] = useState(dialogFor==='add'?{
    details: "",
    city: "",
    state: "",
    pin: "",
  }:getAddressDetails(dialogFor));
  
  
  const checkErrors = () => {
    if (Object.values(address).filter((e) => e.length === 0).length !== 0)
      return showAlert("error", "Error", "Fields are empty");
    if (address.pin.length !== 6)
      return showAlert("error", "Error", "Incorrect pin code");
    return false;
  };

  const addAddress = () => {
    if (!checkErrors()) {
      handleClose();
      addUserAddress(address);
      setAddress({
        details: "",
        city: "",
        state: "",
        pin: "",
      });
      showAlert("success", "Success", "Address added successfully");
    }
  };

  const fillDummyValues = () =>
    setAddress({
      ...address,
      _id: uuid(),
      details: "RNTH hostel near It park",
      city: "Indore",
      state: "M.P.",
      pin: "452010",
    });

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog id="address-dialog-box" onClose={handleClose} open={open}>
      <DialogTitle>
        <strong>Add address</strong>
      </DialogTitle>
      <div id="address-form">
        <label htmlFor="pin">Enter Pin code</label>
        <input
          className="forminputs"
          type="number"
          id="pin"
          placeholder="Enter your 6 digit pin code here"
          value={address.pin}
          onChange={(e) => setAddress({ ...address, pin: e.target.value })}
        />
        <label htmlFor="city">Enter city</label>
        <input
          className="forminputs"
          type="text"
          id="city"
          placeholder="Enter your city name"
          value={address.city}
          onChange={(e) => setAddress({ ...address, city: e.target.value })}
          maxLength="50"
        />
        <label htmlFor="state">Enter your state</label>
        <input
          className="forminputs"
          type="text"
          id="state"
          placeholder="Enter your state name"
          value={address.state}
          onChange={(e) => setAddress({ ...address, state: e.target.value })}
          maxLength="50"
        />
        <label htmlFor="detailed-address">Enter detailed address</label>
        <input
          className="forminputs"
          type="text"
          id="detailed-address"
          placeholder="Enter your detailed address here"
          maxLength="80"
          value={address.details}
          onChange={(e) => setAddress({ ...address, details: e.target.value })}
        />
        <div id="preview">
          <strong>
            <span>{`${address.details}  ${address.city}  ${address.state}  ${address.pin} `}</span>
          </strong>
        </div>
        <div id="address-buttons">
          {
            dialogFor==='add'?<>
            <button id="add-address-btn" onClick={addAddress}>
              Add address
            </button>
            <button id="fill-address-btn" onClick={fillDummyValues}>
              Fill dummy address
            </button>
            </>:<button id="edit-address-mainbtn" onClick={addAddress}>
              Edit address
            </button>
          }
          
        </div>
      </div>
    </Dialog>
  );
}
