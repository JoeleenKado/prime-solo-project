import React, { Component, useEffect } from "react";
import { useDispatch} from 'react-redux'
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import action from "../../redux/services/action.service";
import { connect } from "react-redux";
 import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import mapStoreToProps from "../../redux/mapStoreToProps";
import Workshop from '../../pages/Workshop/Workshop'
import Program from "../../pages/Program/Program";
import LoginPage from "../../pages/LoginPage/LoginPage";
import Settings from '../../pages/Settings/Settings'
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import Gallery from "../../pages/Gallery/Gallery";
import FriendGallery from "../../pages/FriendGallery/FriendGallery";
import Admin from '../../pages/Admin/Admin'
import Studio from "../../pages/Studio/Studio"
import Forum from "../../pages/Forum/Forum";
import Edit from '../../pages/Edit/Edit'
// import Workshop from "../../pages/Workshop/Workshop";
import "./App.css";

function App(props) {
const dispatch = useDispatch()
useEffect(() => {
dispatch(action.fetchUser())
}, {})
    return (
      <>
     <header>
<nav>
<Nav id='nav'/>
</nav>
    </header>
        <Router>
            <Switch>
              {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
              <Redirect exact from="/" to="/home" />
              {/* Visiting localhost:3000/about will show the about page. */}
              <Route
                // shows AboutPage at all times (logged in or not)
                exact
                path="/program"
                component={Program}
              />
{/* <Route
                // shows AboutPage at all times (logged in or not)
                exact
                path="/program/:RegisterForm"
                component={Program }
              /> */}
               <ProtectedRoute     
      path="/gallery/:username/:id"
      render={(props) => <FriendGallery {...props} />}
    />
    <ProtectedRoute   
      path="/edit/:title/:medium/:size/:statement/:url/:id"
      render={(props) => <Edit {...props} />}
    />
<ProtectedRoute    
      path="/settings"
      render={(props) => <Settings {...props} />}
    />
    <ProtectedRoute    
      path="/edit/:title/:medium/:size/:statement/:url/:id"
      render={(props) => <Edit {...props} />}
    />
              {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
<ProtectedRoute props={props}
                // logged in shows UserPage else shows LoginPage
                exact
                path="/gallery"
                component={Gallery}
              />
<ProtectedRoute
                exact
                path="/forum"
                component={Forum}
              />
              <ProtectedRoute
                // logged in shows InfoPage else shows LoginPage
                exact
                path="/studio"
                component={Studio}
              />
              {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
              <ProtectedRoute
                // with authRedirect:
                // - if logged in, redirects to "/user"
                // - else shows LoginPage at /login
                exact
                path="/login"
                component={LoginPage}
                authRedirect="/gallery"
              />
              <ProtectedRoute
                exact
                path="/registration"
                component={RegisterPage}
                authRedirect="/gallery"
              />
              <ProtectedRoute
                exact
                path="/home"
                component={LoginPage}
                //  authRedirect="/user"
                authRedirect="/gallery"
              />
              {/* If none of the other routes matched, we will show a 404. */}
              <Route render={() => <h1>404</h1>} />
            </Switch>
        </Router>
        <footer>
    <Footer />
    </footer>
        </>
    ); //END return 
}//END App
 export default connect(mapStoreToProps)(App);
