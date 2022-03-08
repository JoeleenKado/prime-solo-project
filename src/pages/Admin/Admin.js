//here i am inserting app into the artdrawer. because this is the page where the modal should pop up

import React, { useState, useEffect, useDispatch } from "react";
import { connect } from "react-redux";
import * as filestack from "filestack-js";

import LogOutButton from "../../components/LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
// import Form from "./Form";
// import EditForm from "../../components/ArtDrawer/ArtCard";
// import App from '../../components/App/App'
import ReactDOM, { render } from "react-dom";
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
function Admin(props) {
  // this component doesn't do much to start, just renders some user info to the DOM
  // componentDidMount() {
  //   this.props.dispatch({ type: "FETCH_ART" });
  // }
  const { frames } = props.store;
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const frame = {
    name: name,
    url: url,
  };

  const key = process.env.REACT_APP_FILESTACK_API_KEY;
  const client = filestack.init(key);
  const options = {
    onFileUploadFinished(file) {
      return new Promise((resolve, reject) => {
        // Do something async
        resolve(
          console.log("resolved", file),
          setUrl(file.url)
          // props.dispatch({type: 'SET_ART', payload: file.url})
        );

        reject((reason) => console.log("Rejected:", reason));
        // Or reject the selection with reject()
      });
    },
  };
  // render() {
  // const art = useSelector((state) => state.store.art);
  // const { classes } = this.props;
  // console.log(this.props)

  // const rootElement = document.getElementById("react-root");
  // ReactDOM.render(<App />, rootElement);
  // useEffect(() => {props.dispatch({type: "RESET_ART"})}, [])
  return (
    <div>
      {/* RS: {JSON.stringify(this.props.store)} */}
      {/* <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1> */}
      {/* <p>Your ID is: {this.props.store.user.id}</p> */}
      {/* <h3>Here is your art: {JSON.stringify(art)}</h3>  */}

      {/* <h3>SUBMIT ART TO GALLERY</h3> */}
      {/* <Grid container spacing={8}> */}
      {/* <Grid item xs={12}> */}
      <form
        onSubmit={() => props.dispatch({ type: "ADD_FRAME", payload: frame })}
      >
        <label>
          Name
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label htmlFor="url">
          URL
          {/* }}> */}
          <button
            onClick={(e) => {
              e.preventDefault();
              client.picker(options).open();
            }}
          >
            UPLOAD FRAME
          </button>
          {/* Frame
        <select
          value={frame}
          onChange={(e) => {
            setFrame(e.target.value);
          }}
        >

          <option value={frame}>{frame}</option>
          <Dropdown frames={frames} />
          <option value="N/A">N/A</option>
        </select> */}
        </label>
        <img src={url} alt="frame" />

        <button>SUBMIT</button>
      </form>
      {/* </Grid> */}
      <br />
      {/* <Grid item xs={12}> */}
      {/* <EditForm /> */}
      {/* </Grid> */}
      {/* </Grid> */}
      {/* i need to setup the workshop router and i need to create a frame table */}
      {/* <LogOutButton className="log-in" /> */}
    </div>
  ); //END return
  // } //END render
}

// this allows us to use <App /> in index.js
//export default connect(mapStoreToProps)(UserPage);
export default connect(mapStoreToProps)(Admin);
