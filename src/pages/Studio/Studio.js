//here i am inserting app into the artdrawer. because this is the page where the modal should pop up

import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import LogOutButton from "../../components/LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import Form from "./Form";
// import EditForm from "../../components/ArtDrawer/ArtCard";
// import App from '../../components/App/App'
import ReactDOM, { render } from 'react-dom'; 

//styling
// import {
//   AppBar,
//   Toolbar,
//   Grid,
//   Badge,
//   IconButton,
//   makeStyles,
//   InputBase,
//   TextField,
//   Card,
//   withStyles,
// } from "@material-ui/core";

// const styles = {
//   inputs: {
//     width: "20%",
//   },
// };
// const artToEdit= this.state.art
function Studio(props) {
  // this component doesn't do much to start, just renders some user info to the DOM
  // componentDidMount() {
  //   this.props.dispatch({ type: "FETCH_ART" });
  // }

  // render() {
    // const art = useSelector((state) => state.store.art);
    // const { classes } = this.props;
    // console.log(this.props)
    const {art} = props.store;
    // const rootElement = document.getElementById("react-root");
    // ReactDOM.render(<App />, rootElement);
    // useEffect(() => {props.dispatch({type: "RESET_ART"})}, [])
    return (
      <div>
        {/* RS: {JSON.stringify(this.props.store)} */}
        {/* <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1> */}
        {/* <p>Your ID is: {this.props.store.user.id}</p> */}
        {/* <h3>Here is your art: {JSON.stringify(art)}</h3>  */}
Studio
        {/* <h3>SUBMIT ART TO GALLERY</h3> */}
        {/* <Grid container spacing={8}> */}
          {/* <Grid item xs={12}> */}
          <section className="black-box">
             <Form/>
             </section>
          {/* </Grid> */}
          <br />
          {/* <Grid item xs={12}> */}
            {/* <EditForm /> */}
          {/* </Grid> */}
        {/* </Grid> */}

        {/* <LogOutButton className="log-in" /> */}
      </div>
    ); //END return
  // } //END render
}

// this allows us to use <App /> in index.js
//export default connect(mapStoreToProps)(UserPage);
export default connect(mapStoreToProps)(Studio);
