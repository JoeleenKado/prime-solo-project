import React from "react";
import { Link } from "react-router-dom";
import { withRouter, RouteProps } from 'react-router';
import { connect, useDispatch } from "react-redux";
import "./Nav.css";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { HashRouter as Router } from "react-router-dom";


interface IProps {
  store: any;
}

const Nav: import('react').FunctionComponent<IProps> = ({store}) => {
  const dispatch = useDispatch();
  
  const {id} = store.user
  let loginLinkData = {
    path: "/login",
    text: "Login / Register",
  };
  if (id != null) {
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
                : () => dispatch({ type: "LOGOUT" })
            }
          >
            <i className="fa-solid fa-door-open" aria-hidden="true"></i>
            <span className="sr-only">{loginLinkData.text}</span>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/program">
            <i className="fa-solid fa-solid fa-book-open" aria-hidden="true"></i>
            <span className="sr-only">Program</span>
          </Link>
        </li>
        {id && (
          <>
            <li>
              <Link className="nav-link" to="/studio">
                <i className="fa-solid fa-palette" aria-hidden="true"></i>
                <span className="sr-only">Studio</span>
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/forum">
                <i className="fa-solid fa-users" aria-hidden="true"></i>
                <span className="sr-only">Forum</span>
              </Link>
            </li>
          </>
        )}
      </ul>
    </Router>
    </>
  ); //END return
}; //END Nav
export default (Nav);
