//here i am inserting app into the artdrawer. because this is the page where the modal should pop up

import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import LogOutButton from "../../components/LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
// import Form from "./Form";
// import EditForm from "../../components/ArtDrawer/ArtCard";
// import App from '../../components/App/App'
import ReactDOM, { render } from 'react-dom'; 
import './Workshop.css'
import Dropdown from "./Dropdown";
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
function Workshop(props) {
  // this component doesn't do much to start, just renders some user info to the DOM
  // componentDidMount() {
  //   this.props.dispatch({ type: "FETCH_ART" });
  // }

  // render() {
    // const art = useSelector((state) => state.store.art);
    // const { classes } = this.props;
    // console.log(this.props)
    const {art} = props.store;
    const {workshop} = props.store;

    // const rootElement = document.getElementById("react-root");
    // ReactDOM.render(<App />, rootElement);
    // useEffect(() => {props.dispatch({type: "RESET_ART"})}, [])
    const [artwork, setArtwork] = useState('')
    const [frame, setFrame] = useState('')


    useEffect(() => {

//  props.dispatch({type: "FETCH_ART"})
    },[])

    return (




      <div>
hi
<ul>
  {!art.length ? null : (
          art.map((piece) => 
        //   <img src={artwork.url} alt='artwork'/>
        <li onClick={setArtwork(piece.id)}>{piece.title}</li>
          )
  )}

</ul>



          {!artwork.length ? null : (
<form onSubmit={props.dispatch({type: 'FRAME_ARTWORK', payload: frame})}>
    <input value={artwork}/>
    {/* // placeholder={} */}
    {/* framedropdown goes here */}
  {/* framedropdown goes here */}
  <label htmlFor="frame">
        Frame
        <select
          value={frame}
          onChange={(e) => {
            setFrame(e.target.value);
          }}
        >
          {/* <option value={frame}>{frame}</option> */}
          <Dropdown workshop={workshop} />
          <option value="N/A">N/A</option>
        </select>
      </label>






    
</form>


          )}

{/* Which painting would you like to frame */}




         
        {/* RS: {JSON.stringify(this.props.store)} */}
        {/* <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1> */}
        {/* <p>Your ID is: {this.props.store.user.id}</p> */}
        {/* <h3>Here is your art: {JSON.stringify(art)}</h3>  */}
{/* Workshop */}
        {/* <h3>SUBMIT ART TO GALLERY</h3> */}
        {/* <Grid container spacing={8}> */}
          {/* <Grid item xs={12}> */}
             {/* <Form/> */}
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
export default connect(mapStoreToProps)(Workshop);
