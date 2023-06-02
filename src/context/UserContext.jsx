import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NotificationContext } from "./NotificationContext";
export const UserContext = createContext();

const setToken = (token) => localStorage.setItem("token", token);

const UserProvider = ({ children }) => {
  const { showAlert } = useContext(NotificationContext);
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  const handleAuthErros = (errorCode) => {
    if (errorCode === 422) return showAlert('error',`Error code ${errorCode}`,'Email already exists')
    if (errorCode === 404) return showAlert('error',`Error code ${errorCode}`,'Email does not found')
    if (errorCode === 401) return showAlert('error',`Error code ${errorCode}`,'Invalid credentials')
  }
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
        const {
          createdUser: { name, email, cart, wishlist },
          encodedToken,
        } = await response.json();
        setUser({ name, email, cart, wishlist });
        setToken(encodedToken);
        showAlert('success',`Success`,'Account created successfully');
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
        const {
          foundUser: { name, email, cart, wishlist },
          encodedToken,
        } = await response.json();
        setUser({ name, email, cart, wishlist });
        setToken(encodedToken);
        showAlert('success',`Success`,'Login successfully');
        return navigate("/landing");
      }
      return handleAuthErros(response.status);
    } catch (e) {
      console.log(e);
    }
  };

  const handleLogout = () => {};
  return (
    <UserContext.Provider
      value={{
        handleSignup,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
