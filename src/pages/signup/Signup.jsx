import React, { useState } from "react";
import { BsInfo } from "react-icons/bs";
import { validate } from "react-email-validator";
import { Link } from "react-router-dom";
import '../login/Login.css'
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";


const Name = ({
  signupDetails,
  setSignupDetails,
  signupErrors: { nameError },
}) => (
  <>
    <label htmlFor="signup-name">Enter Name</label>
    <input
      style={{ borderColor: nameError && "red" }}
      className="forminputs"
      type="text"
      id="signup-name"
      maxLength="20"
      placeholder="Enter you full name"
      onChange={(e) =>
        setSignupDetails({
          ...signupDetails,
          name: e.target.value.toLowerCase(),
        })
      }
    />
    {nameError && (
      <span className="error">
        <BsInfo id="info-logo" style={{ color: "red" }} />
        Enter your name
      </span>
    )}
  </>
);

const Email = ({
  signupDetails,
  setSignupDetails,
  signupErrors: { emailError },
}) => {
  return (
    <>
      <label htmlFor="signup-email">Enter email address</label>
      <input
        style={{ borderColor: emailError && "red" }}
        className="forminputs"
        type="text"
        id="signup-email"
        placeholder="Enter email id"
        onChange={(e) =>
          setSignupDetails({
            ...signupDetails,
            email: e.target.value.toLowerCase(),
          })
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

const CreatePassword = ({
  signupDetails,
  setSignupDetails,
  signupErrors: { passwordError },
  showPassword,
}) => {
  return (
    <>
      <label htmlFor="create-password">Create password</label>
      <input
        style={{ borderColor: passwordError && "red" }}
        className="forminputs"
        type={showPassword ? "text" : "password"}
        id="create-password"
        maxLength="20"
        placeholder="Enter Password"
        autoComplete="new-password"
        onChange={(e) =>
          setSignupDetails({ ...signupDetails, password: e.target.value })
        }
      />
      {passwordError ? (
        <span className="error">
          <BsInfo id="info-logo" style={{ color: "red" }} />
          Enter a valid password
        </span>
      ) : (
        <p id="password-warn">
          <BsInfo id="info-logo" />
          Password must be atleast six characters
        </p>
      )}
    </>
  );
};

const ConfirmPassword = ({
  signupDetails,
  setSignupDetails,
  signupErrors: { confirmPasswordError },
  showPassword,
}) => {
  return (
    <>
      <label htmlFor="confirm-password">Confirm password</label>
      <input
        style={{ borderColor: confirmPasswordError && "red" }}
        className="forminputs"
        type={showPassword ? "text" : "password"}
        id="confirm-password"
        placeholder="Confirm Password"
        onChange={(e) =>
          setSignupDetails({
            ...signupDetails,
            confirmPassword: e.target.value,
          })
        }
      />
      {confirmPasswordError && (
        <span className="error">
          <BsInfo id="info-logo" style={{ color: "red" }} />
          Password does not matched
        </span>
      )}
    </>
  );
};

const ShowPassword = ({ setShowPassword, showPassword }) => {
  return (
    <label htmlFor="show-password-box" className="check">
      <input
        type="checkbox"
        onChange={() => setShowPassword(!showPassword)}
        id="show-password-box"
      />
      <p>&nbsp;show password</p>
    </label>
  );
};

const Signup = () => {
  const{handleLogin,handleSignup}=useContext(UserContext)  
  
  const [signupDetails, setSignupDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [signupErrors, setSignupErrors] = useState({
    nameError: false,
    emailError: false,
    passwordError: false,
    confirmPasswordError: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  

//   const createAccount = async () => {
//     const{email,password,name}=signupDetails;
//     const auth = getAuth();
//     try{
//     const userCredential=await createUserWithEmailAndPassword(auth, email, password);
//     const user = userCredential.user;
//     console.log(user)
//     //sign in
//       }
//       catch(error){
//         console.log(error);
//         showNotification(error.code.slice(5).replace(/-/g," "),'error');   
//       }
//   };
  const showErrors = () => {
    const { name, email, password, confirmPassword } = signupDetails;
    setSignupErrors({
      ...signupErrors,
      nameError: name.length === 0,
      emailError: !validate(email),
      passwordError: password.length < 6,
      confirmPasswordError:
        confirmPassword.length === 0 || password !== confirmPassword,
    });
  };

  const checkErrors = () => {
    const { name, email, password, confirmPassword } = signupDetails;
    const isNameError = name.length === 0;
    const isEmailError = !validate(email);
    const isPasswordError = password.length < 6;
    const isConfirmPasswordError =confirmPassword.length === 0 || password !== confirmPassword;
    showErrors(); 
    
    if (
      isNameError ||
      isEmailError ||
      isPasswordError ||
      isConfirmPasswordError
    )
      return true;
    return false;
  };

  const signupAccount = (e) => {
    e.preventDefault();
    if (!checkErrors()) 
        return handleSignup(signupDetails);
    return false;    
  };

  return (
    <div id="signup-page" className="auth-page">
      <div className="auth-box">
        <form autoComplete="new-password" onSubmit={signupAccount}>
          <h1>Create Account</h1>
          <Name
            signupDetails={signupDetails}
            setSignupDetails={setSignupDetails}
            signupErrors={signupErrors}
          />
          <Email
            signupDetails={signupDetails}
            setSignupDetails={setSignupDetails}
            signupErrors={signupErrors}
          />
          <CreatePassword
            signupDetails={signupDetails}
            setSignupDetails={setSignupDetails}
            signupErrors={signupErrors}
            showPassword={showPassword}
          />
          <ConfirmPassword
            signupDetails={signupDetails}
            setSignupDetails={setSignupDetails}
            signupErrors={signupErrors}
            showPassword={showPassword}
          />
          <ShowPassword
            setShowPassword={setShowPassword}
            showPassword={showPassword}
          />
          <input type="submit" value={"Create Account"} />
        </form>
        <p>
          By creating an account, you agree to Artstore's
          <Link to='/' className="link"> Conditions of Use</Link> and <Link to="/" className="link">Privacy Notice</Link>.
        </p>
        <hr />
        <p>
          Already have an account? <Link to="/login" className="link">Login</Link>
        </p>
        <button onClick={handleLogin} className="guest-user-button">Login as a Guest user</button>
      </div>
    </div>
  );
};

export default Signup;
