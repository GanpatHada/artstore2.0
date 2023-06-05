import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./context/UserContext";
import NotificationProvider from "./context/NotificationContext";
import ProductProvider from "./context/ProductContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <NotificationProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </NotificationProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
