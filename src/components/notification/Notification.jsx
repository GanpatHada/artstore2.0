import React, { useContext} from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import "./Notification.css";
import { NotificationContext } from "../../context/NotificationContext";

const Notification = () => {
  const { alert, closeAlert } = useContext(NotificationContext);
  const { open, message, title, type } = alert;

  const getBackgroundColor = () => {
    if (type === "error") return "#ffd9d9";
    if (type === "success") return "#c6efd1";
  };
  const getHeadingColor = () => {
    if (type === "error") return "darkred";
    if (type === "success") return "darkgreen";
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      onClose={closeAlert}
    >
      <Alert
        onClose={closeAlert}
        severity={type}
        sx={{
          width: "100%",
          backgroundColor: getBackgroundColor,
        }}
      >
        <div id="alert-box">
          <h2 style={{color:getHeadingColor}}>{title}</h2>
          <p>{message}</p>
        </div>
      </Alert>
    </Snackbar>
  );
};

export default Notification;
