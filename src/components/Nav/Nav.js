import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import mapStoreToProps from "../../redux/mapStoreToProps";
import axios from 'axios'


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

const Nav = (props) => {
  let loginLinkData = {
    path: "/login",
    text: "Login / Register",
  };
  // numbers.forEach(myFunction);

  useEffect(() => {
    let numberArray = [1, 45, 3, 97, 5, 565, 7]
    numberArray.forEach((number) => (

      axios
      .get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${number}`)
      .then(function(res) {//
          const {title, artistDisplayBio, primaryImageSmall} = res.data;
          console.log(title);
          // console.log(artistDisplayBio);
  
          // const newPokemonData = {};
          // results.forEach((pokemon, index) => {///
          //     newPokemonData[index + 1] = {
          //         id: index + 1,
          //         name: pokemon.name,
          //         sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
          //     }
           
          //     })///
          //     setPokemonData(newPokemonData);
          })//
      
  ))
   
},[])


  if (props.store.user.id != null) {
    loginLinkData.path = "/user";
    loginLinkData.text = "Program";
  }



  return (
    <div className="nav">
      {/* <Link to="/home"> */}
      {/* <h2 className="nav-title">Prime Solo Project</h2> */}
      {/* </Link> */}
      <div className="nav-right">
        <Link className="nav-link" to={loginLinkData.path}>
          {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
          <Typography variant="h5">{loginLinkData.text}</Typography>
        </Link>
        {/* Show the link to the info page and the logout button if the user is logged in */}
        {props.store.user.id && (
          <>
            <Link className="nav-link" to="/artdrawer">
              <Typography variant="h5">Gallery</Typography>
            </Link>
            {/* <Link className="nav-link" to="/info">
              info
            </Link> */}
<Link className="nav-link">
<Typography onClick={() => props.dispatch({ type: "LOGOUT" })}
 variant="h5">Logout</Typography>            </Link>

              {/* <Typography onClick={() => props.dispatch({ type: "LOGOUT" })}
 variant="h5">Logout</Typography>
<Typography variant="h5">
            <LogOutButton className="nav-link" />
            </Typography> */}
          </>
        )}
        {/* Always show this link since the about page is not protected */}
        {/* <Link className="nav-link" to="/about">
          About
        </Link> */}
      </div>
    </div>
  ); //END return
};

export default connect(mapStoreToProps)(Nav);
