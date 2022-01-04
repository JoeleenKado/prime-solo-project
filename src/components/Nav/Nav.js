import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import mapStoreToProps from "../../redux/mapStoreToProps";
import axios from 'axios'


const Nav = (props) => {
  let loginLinkData = {
    path: "/login",
    text: "Login / Register",
  };
  



  if (props.store.user.id != null) {
    loginLinkData.path = "";
    loginLinkData.text = "Logout";
  }



  return (
    <div className="nav">
      {/* <Link to="/home"> */}
      {/* <h2 className="nav-title">Prime Solo Project</h2> */}
      {/* </Link> */}
      <div className="nav-right">
        <Link className="nav-link" to={loginLinkData.path} 
        
         onClick={loginLinkData.path !== "" ? (null) : (() => props.dispatch({type: 'LOGOUT'}))
         }
        >
          {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
          {loginLinkData.text}
        </Link>
        <Link className="nav-link" to="/program">
          Program
        </Link>
        {/* Show the link to the info page and the logout button if the user is logged in */}
        {props.store.user.id && (
          <>
            <Link className="nav-link" to="/Studio">
              {/* <h1>Gallery</h1> */}
              Studio
            </Link>

            <Link className="nav-link" to="/gallery">
              {/* <h1>Gallery</h1> */}
              Gallery
            </Link>

            <Link className="nav-link" to="/forum">
              {/* <h1>Gallery</h1> */}
              Forum
            </Link>
            {/* <Link className="nav-link" to="/info">
              info
            </Link> */}
{/* <Link className="nav-link" to=""
 onClick={() => props.dispatch({ type: "LOGOUT" })} >
 Logout</Link> */}

              {/* <Typography onClick={() => props.dispatch({ type: "LOGOUT" })}
 variant="h5">Logout</Typography>
<Typography variant="h5">
            <LogOutButton className="nav-link" />
            </Typography> */}
          </>
        )}
        {/* Always show this link since the about page is not protected */}
        {/* {props.store.user.id != null ? (null) : ( */}
          
        {/* )} */}
      </div>
    </div>
  ); //END return
};

export default connect(mapStoreToProps)(Nav);
