import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import CodeGenerator from "../../components/CodeGenerator";

interface IProps {
  props: any;
  history: any;
  store: any;
}
const RegisterForm: import("react").FunctionComponent<IProps> = (props) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [phone, setPhone] = useState('')
 
  



  const {history} = props;

const user = {
  username: username,
  password: password,
  // phone: phone,
  // code: CodeGenerator()
}


function cancelRegistration() {
  props.history.push("/login");
};


  function register(event: any) {
    event.preventDefault();

    // console.log('phone:', phone)
    // console.log('codeGenerator', CodeGenerator())
    if (username.length && password.length) {
      dispatch({
        type: "REGISTER",
        payload: user
      });
    } else {console.log('error!!!')
      dispatch({ type: "REGISTRATION_INPUT_ERROR" });
    }//END if
    //  history.push(`/authentication/:${user.username}`)

  }
  return (
    <>
   
    <span id="login-span">
      {/* PROPS: {JSON.stringify(props)} */}
    
      <h3>New User:</h3>

      


      <form className="form-panel" onSubmit={register}>
        
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
        {/* <label htmlFor="phone">
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
            
        </label> */}
        
        <input className="btn" type="submit" name="submit" value="Register" />
      </form>
    </span>
    {props.store.errors.registrationMessage && (
      <h3 style={{color: 'white', backgroundColor: 'black'}} className="alert" role="alert">
  {props.store.errors.registrationMessage}
      </h3>
   )}
    </>
  );
}; //END RegisterForm
export default connect(mapStoreToProps)(RegisterForm);
