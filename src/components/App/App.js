import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import { connect } from "react-redux";
import Modal from '../Modal/Modal'
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import mapStoreToProps from "../../redux/mapStoreToProps";

import AboutPage from "../AboutPage/AboutPage";
import UserPage from "../UserPage/UserPage";
import InfoPage from "../InfoPage/InfoPage";
import LandingPage from "../LandingPage/LandingPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import Detail from "../Gallery/Detail";
// import createPalette from 'material-ui/styles/palette';
//import Typography from 'material-ui/styles/typography';

import "./App.css";
// import {Typography} from '@material-ui/core/Typography'
//styling
// import SideMenu from "../SideMenu/SideMenu";
// import { createMuiTheme, CssBaseline, withStyles, makeStyles, ThemeProvider, AppBar, Toolbar } from '@material-ui/core';
// import makeStyles from '@material-ui/core/styles'
import {
  // AppBar,
  CssBaseline,
  // CardContent,
  Typography,
  // Toolbar,
  // Grid,
  // Badge,
  // IconButton,
  // makeStyles,
  // InputBase,
  // TextField,
  // Card,
  // CardMedia,
  // centerText,
  withStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core";
// import NavBar from "../NavBar/NavBar";
import ArtDrawer from "../ArtDrawer/ArtDrawer";
//import {orange, brown, pink, green}from '@material-ui/core/colors'

const styles = {
  appMain: {
    paddingLeft: "0px",
    width: "100%",
  },
  body: {
    margin: "auto",
    fontFamily: "Montserrat",
  },
};
// }

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffa500",
      light: "#d26918",
    },
    // text:{
    // primary: '#7ec700'
    // },
    secondary: {
      main: "#ffc0ce",
      light: "#00ff00",
    },
    background: {
      default: "#ffd700",
    },
  },
  shape: {
    borderRadius: "20px",
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },

    button: {
      fontFamily: "Roboto",
    },
  },
  // props: {
  //   MuiIconButton: {
  //     disableRipple: false,
  //   },
  // },
  typographyStyle: {
    color: "#7700c7",
  },

  typography: {
    h1: {
      fontFamily: "Helvetica Neue",
      color: "#560678",
    },
    h2: {
      color: "#white",
    },
    h3: {
      fontFamily: "Times New Roman",
    },
    h4: {
      fontFamily: "verdana",
    },
    button: {
      fontFamily: "Arial",
    },
  },
});



class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_USER" });
    const { classes } = this.props;

  }

  render() {

    

    return (
      
      <ThemeProvider theme={theme}>
        
        <Modal/>
        <div class="bg"></div>
        

        {/* <AppBar position="static"> */}
          {/* <Toolbar>
toolbar
            </Toolbar> */}
        {/* </AppBar> */}
        {/* cssbaseline makes it so you dont have white space when you scroll to thre right */}
        {/* <CssBaseline /> */}
        {/* <NavBar/> */}
        {/* <div className={classes.appMain}> */}
        {/* <SideMenu/> */}

        <Typography align="center" variant="h1">
          Virtual Gallery(app.js)
        </Typography>

        <Router>
        <Nav />

          {/* <div> */}
            <Switch>
              {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
              <Redirect exact from="/" to="/home" />

              {/* Visiting localhost:3000/about will show the about page. */}
              <Route
                // shows AboutPage at all times (logged in or not)
                exact
                path="/about"
                component={AboutPage}
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

              {/* <ProtectedRoute exact path='/:artId' render={(props)=><Art{...props}/>}/> */}
              {/* <ProtectedRoute exact path='/:art' component={Art}/> */}
              <ProtectedRoute path="/detail" component={Detail} />

              <ProtectedRoute
                // logged in shows InfoPage else shows LoginPage
                exact
                path="/info"
                component={InfoPage}
              />

              <ProtectedRoute
                // logged in shows InfoPage else shows LoginPage
                exact
                path="/artdrawer"
                component={ArtDrawer}
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
                authRedirect="/user"
              />
              <ProtectedRoute
                // with authRedirect:
                // - if logged in, redirects to "/user"
                // - else shows RegisterPage at "/registration"
                exact
                path="/registration"
                component={RegisterPage}
                authRedirect="/user"
              />
              <ProtectedRoute
                // with authRedirect:
                // - if logged in, redirects to "/user"
                // - else shows LandingPage at "/home"
                exact
                path="/home"
                component={LandingPage}
                //  authRedirect="/user"
                authRedirect="/user"
              />

              {/* If none of the other routes matched, we will show a 404. */}
              <Route render={() => <h1>404</h1>} />
            </Switch>
            <Footer />
          {/* </div> */}
        </Router>
        {/* <CssBaseline /> */}
      </ThemeProvider>
    ); //END return
  }
}
// }
// export default connect()(App);
export default connect(mapStoreToProps)(withStyles(styles)(App));
