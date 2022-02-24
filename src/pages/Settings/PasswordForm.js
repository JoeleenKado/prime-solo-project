import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
//  import  './LoginPage.css'
// import StyledButton from '../StyledButton/StyledButton'
import {
  AppBar,
  CssBaseline,
  CardContent,
  Typography,
  Toolbar,
  Grid,
  Badge,
  IconButton,
  makeStyles,
  InputBase,
  TextField,
  Card,
  CardMedia,
  centerText,
  withStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core";


const styles = {
  formContainer : {
    paddingTop: '20px',
    paddingLeft: '50px',
    paddingRight: '50px'
},
marginBottom : {
marginBottom: '100px',

},
marginAuto : {
    margin: 'auto',

},
avatar: {
    backgroundColor: '#fcf403',
    color: '#ad0940'
},
card: {
boxShadow: 'rgba(255, 0, 0, 0.117647) 0px 1px 6px, rgba(255, 0, 0, 0.117647) 0px 1px 4px'
}


}


const PasswordForm = (props) => {

  const [username, setUsername] = useState(props.store.user.username)
  const [password, setPassword] = useState('')
  const [roseDoorReady, setRoseDoorReady] = useState(false)
  
 const handleNewClick = (event) => {
  console.log('hello')
  }
const config = { 
    // attributes: true, 
     childList: true, 
    // subtree: true 
  };
   
    function updatePassword (event) {
      event.preventDefault();
  
      if (password.length) {
        // toggleDoor();

        props.dispatch({
          type: "UPDATE_PASSWORD",
          payload: {
            // username: username,
            username: username,
            password: password,
          },
        });
      } else {
        props.dispatch({ type: "PASSWORD_INPUT_ERROR" });
      }
    }; // end login
  
    return (
      
      <form className="formPanel" onSubmit={updatePassword}>
                  <h1>Login</h1>

          {props.store.errors.loginMessage && (
            <h3 className="alert" role="alert">
              {props.store.errors.loginMessage}
            </h3>
          )}
          <div>
            <label htmlFor="New Password">
              New Password:
              <input
                type="text"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
              />
            </label>
          </div>
          
          <div>
            <input className="btn" type="submit" name="submit" value="Change Password" />
          </div>
          
      </form>
     
    );
  }

export default connect(mapStoreToProps)(PasswordForm);
