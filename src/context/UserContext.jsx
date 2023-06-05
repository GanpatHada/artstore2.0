import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NotificationContext } from "./NotificationContext";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const { showAlert } = useContext(NotificationContext);
  const navigate = useNavigate();

  const setToken = (token) => localStorage.setItem("token", token);

  
  const updateUserAddress = (newAddress) => {
    const previousUser = JSON.parse(localStorage.getItem("user"));
    const updatedUser = {
      ...previousUser,
      address: [...previousUser.address, newAddress],
    };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(JSON.parse(localStorage.getItem('user')))
  };


  const setUserInLocalStorage = (user) => {
    localStorage.setItem("user", JSON.stringify({ ...user, address: [] }));
    setUser(JSON.parse(localStorage.getItem('user')));
    
  };

  const handleAuthErros = (errorCode) => {
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
        showAlert("success", `Success`, "Account created successfully");
        return navigate("/landing");
      }
      return handleAuthErros(response.status);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async ({
    email = "guest@gmail.com",
    password = "guest123",
  }) => {
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
        showAlert("success", `Success`, "Login successfully");
        return navigate("/landing");
      }
      return handleAuthErros(response.status);
    } catch (e) {
      console.log(e);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
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
        updateUserAddress
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
