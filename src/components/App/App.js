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
// import Modal from '../Modal/Modal'
 import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import mapStoreToProps from "../../redux/mapStoreToProps";
import Workshop from '../../pages/Workshop/Workshop'
import Program from "../../pages/Program/Program";
import UserPage from "../UserPage/UserPage";
import InfoPage from "../InfoPage/InfoPage";
// import LandingPage from "../LandingPage/LandingPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import Settings from '../../pages/Settings/Settings'
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
// import Detail from "../Gallery/Detail";
// import createPalette from 'material-ui/styles/palette';
//import Typography from 'material-ui/styles/typography';
import Gallery from "../../pages/Gallery/Gallery";
import FriendGallery from "../../pages/FriendGallery/FriendGallery";
import Admin from '../../pages/Admin/Admin'
import Studio from "../../pages/Studio/Studio"
import Forum from "../../pages/Forum/Forum";
import Edit from '../../pages/Gallery/Edit'
// import Workshop from "../../pages/Workshop/Workshop";
import "./App.css";
import {
  // AppBar,
  CssBaseline,
  // CardContent,
  Typography,
  withStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core";
// import NavBar from "../NavBar/NavBar";
import ArtDrawer from "../../pages/Studio/Studio";
//import {orange, brown, pink, green}from '@material-ui/core/colors'


function App(props) {

const dispatch = useDispatch()
useEffect(() => {
dispatch(action.fetchUser())
}, {})


    return (
      <>
      {/* <div id="header-container"> */}
 {/* <div class="gradient-90"></div> */}

      <header>
      {/* <div id="header-container" className="gradient-90">  */}
<nav>
<Nav id='nav'/>
</nav>
{/* </div> */}
    </header>
    
{/* </div> */}

        <Router>

          {/* <div> */}
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
              <ProtectedRoute
                // logged in shows UserPage else shows LoginPage
                exact
                path="/user"
                component={UserPage}
              />

{/* <ProtectedRoute props={props}
                // logged in shows UserPage else shows LoginPage
                exact
                path="/workshop"
                component={Workshop}
              /> */}

<ProtectedRoute props={props}
                // logged in shows UserPage else shows LoginPage
                exact
                path="/gallery"
                component={Gallery}
              />

{/* <ProtectedRoute props={props}
                // logged in shows UserPage else shows LoginPage
                exact
                path="/admin"
                component={Admin}
              /> */}

{/* <ProtectedRoute props={props}
                // logged in shows UserPage else shows LoginPage
                exact
                path="/workshop"
                component={Workshop}
              /> */}

              <ProtectedRoute
                // logged in shows InfoPage else shows LoginPage
                exact
                path="/info"
                component={InfoPage}
              />

<ProtectedRoute
                // logged in shows InfoPage else shows LoginPage
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
                // with authRedirect:
                // - if logged in, redirects to "/user"
                // - else shows RegisterPage at "/registration"
                exact
                path="/registration"
                component={RegisterPage}
                authRedirect="/gallery"
              />
              <ProtectedRoute
                // with authRedirect:
                // - if logged in, redirects to "/user"
                // - else shows LandingPage at "/home"
                exact
                path="/home"
                component={LoginPage}
                //  authRedirect="/user"
                authRedirect="/gallery"
              />

              {/* If none of the other routes matched, we will show a 404. */}
              <Route render={() => <h1>404</h1>} />
            </Switch>
          {/* </div> */}
        </Router>
        {/* </div> */}
        <footer>
    <Footer />
    </footer>
        </>
    ); //END return 
}
// }
// export default connect()(App);
 export default connect(mapStoreToProps)(App);
