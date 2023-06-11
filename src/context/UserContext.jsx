import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NotificationContext } from "./NotificationContext";
import { LoadingContext } from "./LoadingContext";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const location=useLocation()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const { showAlert } = useContext(NotificationContext);
  const{startLoading,stopLoading}=useContext(LoadingContext);
  const [selectedAddress,setSelectedAddress]=useState(false)
  const navigate = useNavigate();

  const setToken = (token) => localStorage.setItem("token", token);



  
  const addUserAddress = (newAddress) => {
    setUser({...user,address:[...user.address,newAddress]})
    showAlert('success','Success','Address added successfully')
  };

  const editUserAddress=(id,address)=>{

    let addressList=user.address.map((prevAdd)=>prevAdd._id===id?{...address}:{...prevAdd});
    setUser({...user,address:addressList});

  }

  const handleDeleteAddress=(id)=>{

    const newAddress=user.address.filter(eachAddress=>eachAddress._id!==id)
    setUser({...user,address:newAddress})
    showAlert('success','Success','Address deleted successfully')
  }


  const setUserInLocalStorage = (user) => {
    localStorage.setItem("user", JSON.stringify({ ...user}));  
  };

  const handleAuthErros = (errorCode) => {
    stopLoading()
    if (errorCode === 422)
      return showAlert(
        "error",
        `Error code ${errorCode}`,
        "Email already exists"
      );
    if (errorCode === 404)
      return showAlert(
        "error",
        `Error code ${errorCode}`,
        "Email does not found"
      );
    if (errorCode === 401)
      return showAlert(
        "error",
        `Error code ${errorCode}`,
        "Invalid credentials"
      );
  };
  const handleSignup = async ({ name, password, email }) => {
    startLoading()
    try {
      let response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          email,
          password,
          name,
        }),
      });

      if (response.status === 201) {
        const { createdUser, encodedToken } = await response.json();
        setToken(encodedToken);
        setUserInLocalStorage(createdUser);
        setUser({...createdUser,cart:[],wishlist:[]})
        showAlert("success", `Success`, "Account created successfully");
        stopLoading()
        return navigate(location?.state?.from?.pathname ?? "/");
      }
      return handleAuthErros(response.status);
    } catch (error) {
      stopLoading()
      console.log(error);
    }
  };

  const handleLogin = async ({
    email = "guest@gmail.com",
    password = "guest123",
  }) => {
    startLoading();
    try {
      let response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (response.status === 200) {
        const { foundUser, encodedToken } = await response.json();
        setToken(encodedToken);
        setUserInLocalStorage(foundUser);
        setUser({...foundUser,cart:[],wishlist:[]})
        showAlert("success", `Success`, "Login successfully");
        stopLoading();
        return navigate(location?.state?.from?.pathname ?? "/");
      }
      return handleAuthErros(response.status);
    } catch (e) {
      stopLoading()
      console.log(e);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser({});
    navigate('/')
    return showAlert("success", "Success", "Logout successfully");

  };
  return (
    <UserContext.Provider
      value={{
        handleSignup,
        handleLogin,
        handleLogout,
        user,
        setUser,
        addUserAddress,
        editUserAddress,
        selectedAddress,
        handleDeleteAddress
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
