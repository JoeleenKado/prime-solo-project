import React, { useState } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

const RegisterForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState('')

// const phoneDisplay = `(${areaCode}) ${first3} - ${lastFour}`
// let phone = ''

function phoneFunction(e) {
// phone += (e.target.value)
// (phone)
// setPhone(e.target.value)
}



  function register(event) {
    event.preventDefault();
    console.log('phone:', phone)
    if (username.length && password.length) {
      props.dispatch({
        type: "FETCH_CODE",
        payload: {
          username: username,
          password: password,
          phone: phone

        },
      });
    } else {
      props.dispatch({ type: "REGISTRATION_INPUT_ERROR" });
    }
  }
  return (
    <span id="login-span">
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
        <label htmlFor="phone">
          Phone #:
          <input 
          name='phone'
          type="tel" 
          id="phone" 
          // name="phone"
       pattern="[+]{1}[0-9]{1}[(]{1}[0-9]{3}[)]{1}[0-9]{3}[-]{1}[0-9]{4}"
       required
       value={phone}
       onChange={(e) => {
setPhone(e.target.value)   }}/>

<small>Format: +1(234)567-8910</small>
            
        </label>
        <input className="btn" type="submit" name="submit" value="Register" />
      </form>
    </span>
  );
}; //END RegisterForm
export default connect(mapStoreToProps)(RegisterForm);
