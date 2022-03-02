import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import mapStoreToProps from "../../redux/mapStoreToProps";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { faDoorOpen, faBookOpen, faUsers, faPallet, faRectangleHistoryCircleUser, faSolid } from '@fortawesome/free-solid-svg-icons'


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
      
      <Router>
      <ul id="nav-ul">
<li>
        <Link to='/home' 
        // target="_blank"
        className="nav-link"
        >
          <span id='home-icon'>Virtual Gallery</span>
          {/* <!-- -instead of the i tag we can also use span      */}
    {/* -aria-hidden true hides the icon from screenreaders --> */}
          {/* <span class='sr-only' > */}
            {/* // ><!-- sr-only makes the text only visible to a screenreader --> */}
            {/* Home */}
             {/* </span> */}
        </Link>
</li>


{/* <li> */}
  
  {/* <Link to="/home" className='nav-link'> */}
  {/* <img src='' alt='Virtual Gallery click for home'></img></Link></li> */}
  {/* if (!props.store.userId) { */}
  {/* <> */}
       <li><Link className="nav-link" to={loginLinkData.path} 
        
         onClick={loginLinkData.path !== "" ? (null) : (() => props.dispatch({type: 'LOGOUT'}))
         }
        >
           <i class="fa-solid fa-door-open" aria-hidden="true"></i>
         {/* <!-- -instead of the i tag we can also use span      */}
   {/* -aria-hidden true hides the icon from screenreaders --> */}
         <span class='sr-only' >
           {/* // ><!-- sr-only makes the text only visible to a screenreader --> */}
           {loginLinkData.text}
            </span>
          {/*  */}
          {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
        </Link>
        </li>

<li>
        <Link className="nav-link" to="/program">

        
          <i class="fa-solid fa-solid fa-book-open" aria-hidden="true"></i>
          {/* <!-- -instead of the i tag we can also use span      */}
    {/* -aria-hidden true hides the icon from screenreaders --> */}
          <span class='sr-only' >
            {/* // ><!-- sr-only makes the text only visible to a screenreader --> */}
            Program
             </span>


        </Link>

        </li>
        {/* </> */}

  {/* // } */}
        {/* Show the link to the info page and the logout button if the user is logged in */}
        {props.store.user.id && (
          <>
          <li>
            <Link className="nav-link" to="/studio">
              {/* <h1>Gallery</h1> */}

              <i class="fa-solid fa-palette" aria-hidden="true"></i>
          {/* <!-- -instead of the i tag we can also use span      */}
    {/* -aria-hidden true hides the icon from screenreaders --> */}
          <span class='sr-only' >
            {/* // ><!-- sr-only makes the text only visible to a screenreader --> */}
            Studio
             </span>


            </Link>
            </li>
            {/* <li>
            <Link className="nav-link" to="/settings">
              Settings
            </Link>
            </li> */}
           
<li>
            <Link className="nav-link" to="/forum">
              {/* <h1>Gallery</h1> */}
              {/* <FontAwesomeIcon icon={faRectangleHistoryCircleUser} /> */}
              <i class="fa-solid fa-users" aria-hidden="true"></i>
          {/* <!-- -instead of the i tag we can also use span      */}
    {/* -aria-hidden true hides the icon from screenreaders --> */}
          <span class='sr-only' >
            {/* // ><!-- sr-only makes the text only visible to a screenreader --> */}
            Forum
             </span>


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

             
          </>
        )}
        {/* Always show this link since the about page is not protected */}
        {/* {props.store.user.id != null ? (null) : ( */}
          
        {/* )} */}
    {/* </ul> */}

      </ul>
      </Router>

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