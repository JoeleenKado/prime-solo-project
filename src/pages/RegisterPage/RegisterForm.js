import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
//  import  './LoginPage.css'

const RegisterForm = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // const [roseDoorReady, setRoseDoorReady] = useState(false)
  
 const handleNewClick = (event) => {
  console.log('hello')
  }
  const config = { 
    // attributes: true, 
     childList: true, 
    // subtree: true 
  };
   
    function register (event) {
      event.preventDefault();
  
      if (username.length && password.length) {
        // toggleDoor();

        props.dispatch({
          type: "REGISTER",
          payload: {
            username: username,
            password: password,
          },
        });
      } else {
        props.dispatch({ type: "REGISTRATION_INPUT_ERROR" });
      }
    }; // end login
  
    return (
      

<span id='login-span'>
<h3>New User:</h3>
      <form className="form-panel" onSubmit={register}>

          {props.store.errors.loginMessage && (
            <h3 className="alert" role="alert">
              {props.store.errors.loginMessage}
            </h3>
          )}
        
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
                type="password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
        
            <input className="btn" type="submit" name="submit" value="Register" />

      </form>
      </span>

     
    );
  }

export default connect(mapStoreToProps)(RegisterForm);
