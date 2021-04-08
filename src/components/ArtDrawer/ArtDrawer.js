import React, { Component } from "react";
import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import ArtForm from "./ArtForm";
import EditForm from "./EditForm";
//styling
import {
  AppBar,
  Toolbar,
  Grid,
  Badge,
  IconButton,
  makeStyles,
  InputBase,
  TextField,
  Card,
  withStyles,
} from "@material-ui/core";

const styles = {
  inputs: {
    width: "20%",
  },
};
// const artToEdit= this.state.art
class ArtDrawer extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_ART" });
  }

  render() {
    // const art = useSelector((state) => state.store.art);
    // const { classes } = this.props;
    // console.log(this.props)
    const art = this.props.store.art;

    return (
      <div>
        {/* RS: {JSON.stringify(this.props.store)} */}
        {/* <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1> */}
        {/* <p>Your ID is: {this.props.store.user.id}</p> */}
        {/* <h3>Here is your art: {JSON.stringify(art)}</h3>  */}

        {/* <h3>SUBMIT ART TO GALLERY</h3> */}
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <ArtForm />
          </Grid>
          <br />
          <Grid item xs={12}>
            <EditForm />
          </Grid>
        </Grid>

        {/* <LogOutButton className="log-in" /> */}
      </div>
    ); //END return
  } //END render
}

// this allows us to use <App /> in index.js
//export default connect(mapStoreToProps)(UserPage);
export default connect(mapStoreToProps)(withStyles(styles)(ArtDrawer));
