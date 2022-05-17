import React, { useState } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import "./LoginPage.css";

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login(event) {
    event.preventDefault();
    if (username.length && password.length) {
      props.dispatch({
        type: "LOGIN",
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      props.dispatch({ type: "LOGIN_INPUT_ERROR" });
     
      props.dispatch({type: "CLEAR_LOGIN_ERROR"})
    }
  }
  return (
<>


    <span id="login-span">
      <h3>Returning User:</h3>
      {props.store.errors.loginMessage && (
         <h3 style={{color: 'white', backgroundColor: 'black'}} className="alert" role="alert">
     {props.store.errors.loginMessage}
         </h3>
      )}
      <form className="form-panel" onSubmit={login}>
       
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="text"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        
        <input className="btn" type="submit" name="submit" value="Log In" />
      </form>
      
    </span>
    </>);
}; //END LoginForm
export default connect(mapStoreToProps)(LoginForm);
