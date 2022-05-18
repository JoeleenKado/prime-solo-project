import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Nav.css";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { HashRouter as Router } from "react-router-dom";

const Nav = (props) => {
  let loginLinkData = {
    path: "/login",
    text: "Login / Register",
  };
  if (props.store.user.id != null) {
    loginLinkData.path = "/";
    loginLinkData.text = "Logout";
  }


  return (
    <>
    {JSON.stringify(loginLinkData)}
    <Router>
      <ul id="nav-ul">
        <li>
          <Link to="/login" className="nav-link">
            <span id="home-icon">Virtual Gallery</span>
          </Link>
        </li>
        <li>
          <Link
            className="nav-link"
             to={loginLinkData.path}
            onClick={
              loginLinkData.path !== "/"
                ? null
                : () => props.dispatch({ type: "LOGOUT" })
            }
          >
            <i class="fa-solid fa-door-open" aria-hidden="true"></i>
            <span class="sr-only">{loginLinkData.text}</span>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/program">
            <i class="fa-solid fa-solid fa-book-open" aria-hidden="true"></i>
            <span class="sr-only">Program</span>
          </Link>
        </li>
        {props.store.user.id && (
          <>
            <li>
              <Link className="nav-link" to="/studio">
                <i class="fa-solid fa-palette" aria-hidden="true"></i>
                <span class="sr-only">Studio</span>
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/forum">
                <i class="fa-solid fa-users" aria-hidden="true"></i>
                <span class="sr-only">Forum</span>
              </Link>
            </li>
          </>
        )}
      </ul>
    </Router>
    </>
  ); //END return
}; //END Nav
export default connect(mapStoreToProps)(Nav);
