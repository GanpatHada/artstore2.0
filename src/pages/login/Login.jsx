
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import { BsInfo } from "react-icons/bs";
import { validate } from "react-email-validator";
import { useContext, useState } from "react";
import './Login.css'
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
const Email = ({
  loginDetails,
  setLoginDetails,
  loginError: { emailError },
}) => {
  
  return (
    <>
      <label htmlFor="login-email">Enter email address</label>
      <input
        className="forminputs"
        type="text"
        id="login-email"
        placeholder="Enter email id"
        value={loginDetails.email}
        onChange={(e) =>
          setLoginDetails({ ...loginDetails, email: e.target.value })
        }
      />
      {emailError && (
        <span className="error">
          <BsInfo id="info-logo" style={{ color: "red" }} />
          Enter a valid email
        </span>
      )}
    </>
  );
};

const Password = ({
  loginDetails,
  setLoginDetails,
  loginError: { passwordError },
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <label htmlFor="password">Enter password</label>
      <div id="login-password-box">
        <input
          className="forminputs"
          type={showPassword ? "text" : "password"}
          id="password"
          maxLength="20"
          placeholder="Enter Password"
          autoComplete="new-password"
          value={loginDetails.password}
          onChange={(e) =>
            setLoginDetails({ ...loginDetails, password: e.target.value })
          }
        />
        <div id="eyebox" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <BsEye className="eye" />
          ) : (
            <BsEyeSlash className="eye" />
          )}
        </div>
      </div>

      {passwordError && (
        <span className="error">
          <BsInfo id="info-logo" style={{ color: "red" }} />
          Enter a valid password
        </span>
      )}
    </>
  );
};

const RememberMe = () => {
  return (
    <label htmlFor="remember-me" className="check">
      <input type="checkbox" id="remember-me" />
      <p>&nbsp;Remember me</p>
    </label>
  );
};

const Login = () => {
  const {handleLogin} = useContext(UserContext);
  
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState({
    emailError: false,
    passwordError: false,
  });


  const checkError = () => {
    const { email, password } = loginDetails;

    const isEmailError=!validate(email);
    const isPasswordError=password.length<6
    setLoginError({
      ...loginError,
      emailError: isEmailError,
      passwordError: isPasswordError,
    });
    if (isEmailError || isPasswordError) return true;
    return false;
  };

  const loginAccount = (e) => {
    e.preventDefault();
    if (checkError()) return false;
    return handleLogin(loginDetails);
  };

  return (
    <div id="login-page" className="auth-page">
      <div className="auth-box">
        <form autoComplete="new-password" onSubmit={loginAccount}>
          <h1>Sign in</h1>

          <Email
            loginDetails={loginDetails}
            setLoginDetails={setLoginDetails}
            loginError={loginError}
          />
          <Password
            loginDetails={loginDetails}
            setLoginDetails={setLoginDetails}
            loginError={loginError}
          />
          <div id="forget-remember">
            <RememberMe />
            <Link to='/forget-password' className="link">
              <span>Forget Password</span>
            </Link>
          </div>

          <input type="submit" value={"LOGIN"} />
        </form>

        <p>
          Do not have an account? <Link to='/signup' className="link">Create Account</Link>
        </p>
        <button className="guest-user-button" onClick={handleLogin}>Login as a Guest user</button>
      </div>
      
    </div>
  );
};

export default Login;
