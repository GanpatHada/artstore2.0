import React, { useContext, useEffect, useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import "./Addressdialog.css";
import { NotificationContext } from "../../context/NotificationContext";
import { UserContext } from "../../context/UserContext";
export default function AddressDialog(props) {
  const { updateUserAddress } = useContext(UserContext);
  const { showAlert } = useContext(NotificationContext);
  const [address, setaddress] = useState({
    details: "",
    city: "",
    state: "",
    pin: "",
  });
  const { onClose, open, } = props;

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
      showAlert("success", "Success", "Address added successfully");
      updateUserAddress(address);
    }
  };

  const fillDummyValues = () =>
    setaddress({
      ...address,
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
          onChange={(e) => setaddress({ ...address, pin: e.target.value })}
        />
        <label htmlFor="city">Enter city</label>
        <input
          className="forminputs"
          type="text"
          id="city"
          placeholder="Enter your city name"
          value={address.city}
          onChange={(e) => setaddress({ ...address, city: e.target.value })}
          maxLength="50"
        />
        <label htmlFor="state">Enter your state</label>
        <input
          className="forminputs"
          type="text"
          id="state"
          placeholder="Enter your state name"
          value={address.state}
          onChange={(e) => setaddress({ ...address, state: e.target.value })}
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
          onChange={(e) => setaddress({ ...address, details: e.target.value })}
        />
        <div id="preview">
          <strong>
            <span>{`${address.details}  ${address.city}  ${address.state}  ${address.pin} `}</span>
          </strong>
        </div>
        <div id="address-buttons">
          <button id="add-address-btn" onClick={addAddress}>
            Add address
          </button>
          <button id="fill-address-btn" onClick={fillDummyValues}>
            Fill dummy address
          </button>
        </div>
      </div>
    </Dialog>
  );
}
