import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./context/UserContext";
import NotificationProvider from "./context/NotificationContext";
import ProductProvider from "./context/ProductContext";
import LoadingProvider from "./context/LoadingContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <LoadingProvider>
      <ProductProvider>
        <NotificationProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </NotificationProvider>
      </ProductProvider>
      </LoadingProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
