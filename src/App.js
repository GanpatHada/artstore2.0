import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Landing from "./pages/landing/Landing";
import ProductList from "./pages/products-list/ProductsList";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import MockMan from 'mockman-js'
import UserDetails from "./pages/user-details/UserDetails";
import Notification from "./components/notification/Notification";
import ProductDetails from "./pages/productDetails/ProductDetails";

function App() 
  {
  return (
    <div className="App">
        <Navbar/>
        <Notification/>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/products' element={<ProductList/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/mockman' element={<MockMan/>}/>
          <Route path='/userdetails' element={<UserDetails/>}/>
          <Route exact path='/products/:id' element={<ProductDetails/>}/>
        </Routes>
    </div>
  );
}

export default App;
