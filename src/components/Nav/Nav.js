import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import mapStoreToProps from "../../redux/mapStoreToProps";
import axios from 'axios'
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

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
    // <div className="nav-container">
      // {/* <Link to="/home"> */}
      // {/* <h2 className="nav-title">Prime Solo Project</h2> */}
      // {/* </Link> */}
      <ul id="nav-ul">
        <Router>
<li><Link to="/home" className='nav-link'>
  <img src='' alt='Virtual Gallery click for home'></img></Link></li>
  {/* if (!props.store.userId) { */}
  <>
       <li><Link className="nav-link" to={loginLinkData.path} 
        
         onClick={loginLinkData.path !== "" ? (null) : (() => props.dispatch({type: 'LOGOUT'}))
         }
        >
          {/*  */}
          {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
          {loginLinkData.text}
        </Link>
        </li>

<li>
        <Link className="nav-link" to="/program">
          Program
        </Link>

        </li>
        </>

  {/* // } */}
        {/* Show the link to the info page and the logout button if the user is logged in */}
        {props.store.user.id && (
          <>
          <li>
            <Link className="nav-link" to="/studio">
              {/* <h1>Gallery</h1> */}
              Studio
            </Link>
            </li>
            <li>
            <Link className="nav-link" to="/gallery">
              {/* <h1>Gallery</h1> */}
              Gallery
            </Link>
            </li>
<li>
            <Link className="nav-link" to="/forum">
              {/* <h1>Gallery</h1> */}
              Forum
            </Link>
            </li>
            {/* </ul> */}
            {/* <Link className="nav-link" to="/workshop">
              Workshop
            </Link> */}

            {/* <Link className="nav-link" to="/admin">
              Admin
            </Link> */}
           
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
    {/* </ul> */}
    </Router>

      </ul>
      
    // {/* </div> */}
  ); //END return
};//end Nav

export default connect(mapStoreToProps)(Nav);

// ReactDOM.render(
//   <Provider store={store}>
//     <Nav/>
//   </Provider>,
//   document.getElementById("header")
// );