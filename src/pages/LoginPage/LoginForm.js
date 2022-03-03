import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
 import  './LoginPage.css'
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


const LoginForm = (props) => {
  // state = {
  //   username: "",
  //   password: "",
  // };

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [roseDoorReady, setRoseDoorReady] = useState(false)
  
  // const handleInputChangeFor = (propertyName) => (event) => {
  //   set[propertyName](
  //     event.target.value
  //   );
  // };
 const handleNewClick = (event) => {
  console.log('hello')
  }

// Select the node that will be observed for mutations
  // const targetNode = document.getElementById('rose-door');



  // Options for the observer (which mutations to observe)
  const config = { 
    // attributes: true, 
     childList: true, 
    // subtree: true 
  };

// Callback function to execute when mutations are observed
// const callback = function(mutationsList, observer) {
//   // Use traditional 'for loops' for IE 11
//   for(const mutation of mutationsList) {
//       if (mutation.type === 'attributes') {
//           console.log('A child node has been added or removed.');
//       setRoseDoorReady(true)
//         }
//       // else if (mutation.type === 'attributes') {
//       //     console.log('The ' + mutation.attributeName + ' attribute was modified.');
//       // }
//   }
// };


// function waitForElement(id, callback){
//   var poops = setInterval(function(){
//       if(document.getElementById(id)){
//           clearInterval(poops);
//           callback();
//       }
//   }, 100);
// }

// waitForElement("idOfElementToWaitFor", function(){
//   alert("element is loaded.. do stuff");
// });


// Create an observer instance linked to the callback function
// const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
// observer.observe(targetNode, config);


// let element;


// if (!roseDoorReady) {return null} else {
//   element = document.getElementsById("rose-door")

// }

// !document.getElementsById('rose-door') ? null : (
  // )
// useEffect(()=>{
 
// },[])

// function toggleDoor() {

//   // if(!roseDoorReady) {
//   //   return
//   // }

//   // element.classList.toggle("doorOpen");
// }
// if(element.length) {
// element.addEventListener("click", toggleDoor);
// }

   
   
    function login (event) {
      event.preventDefault();
  
      if (username.length && password.length) {
        // toggleDoor();

        props.dispatch({
          type: "LOGIN",
          payload: {
            username: username,
            password: password,
          },
        });
      } else {
        props.dispatch({ type: "LOGIN_INPUT_ERROR" });
      }
    }; // end login
  



    return (
      // <Grid container 
      // spacing={2} 
      // style={styles.formContainer}
      // direction="column"
      // alignItems="center"
      // justify="center">

      // {/* <Grid item xs={4} key={pokemonId} spacing={1}> */}
// {/* <> */}
      <form className="form-panel" onSubmit={login}>
                  <h1>Login</h1>

        {/* <Typography variant="h4"> */}
          {props.store.errors.loginMessage && (
            <h3 className="alert" role="alert">
              {props.store.errors.loginMessage}
            </h3>
          )}
          {/* <div> */}
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
          {/* </div> */}
          {/* <div> */}
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
          {/* </div> */}
          {/* {/* {!roseDoorReady ? null : ( */}
          {/* <div> */}
            <input className="btn" type="submit" name="submit" value="Log In" />
          {/* </div> */}
          {/* )} */} 
        {/* </Typography> */}
      </form>
      // </>
      // {/* <StyledButton onClick={(event) => this.handleNewClick(event)}/> */}
      // {/* // </Grid> */}
    );
  }
// }

export default connect(mapStoreToProps)(LoginForm);
