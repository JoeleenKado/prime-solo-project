import React, { Component, useState, useEffect } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import Art from '../../pages/ArtDrawer/Art'
import './App.css';

//styling
import SideMenu from '../SideMenu/SideMenu';
import { createMuiTheme, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import NavBar from '../NavBar/NavBar';
//import {orange, brown, pink, green}from '@material-ui/core/colors'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PageHeader from '../PageHeader/PageHeader'

//import turquoise from '@material-ui/core/colors/turquoise';
// function App(props) {
//   //return is render

//   //we get two things. one being a variable, and the other being a function to change said variable
//   let [hello, changeHello] = useState('world')
//   let [counter, changeCounter] = useState(0);
//   let [user, changeUser] = useState({name: 'joel', age: 30});
//   let [name, changeName] = useState('');

  // useEffect(() => {
  //   console.log('useEffect called');
  //   document.title = hello
  //   //dependancies
  //   //only do effect if hello changes
  //   //empty array makes it so it only runs on mount
  // },[])
  //let stateThing = useState('world')
  // let hello = statething[0]
  //let change hello = stateThing[1]

  // useEffect(() => {
  //        document.title = hello

  // },[])




// return(
// <>
// <h1>function component</h1>
// <p>Hello {hello}</p>
// <p>counter {counter}</p>

// <input onChange={(event)=> changeName(event.target.value)} placeholder="name"/>
// <button onClick={()=>changeHello(name)}>Change Greeting!</button>

// <button onClick={()=>changeCounter(counter + 1)}>Plus 1!</button>

// </>
// )
// }

// class App extends Component {
//   componentDidMount() {
//     this.props.dispatch({ type: 'FETCH_USER' });
//   }

//   render() {
const theme = createMuiTheme({
  palette: {
    primary: {
    main: '#ffa500',
    light: '#d26918'
    },
    secondary: {
      main: '#ffc0ce',
      light: '#00ff00'
    },
    background: {
      default: '#ffd700'
    }
  },
  shape: {
    borderRadius: '40px'
  },
  overrides: {
    MuiAppBar : {
      root: {
        transform: "translateZ(0)"
      }
    }
  },
  props: {
    MuiIconButton: {
      disableRipple: false
    }
  }
})



const useStyles = makeStyles({
  appMain: {
    paddingLeft: '0px',
    width: '100%'
  }
})

  function App(props) {
const classes = useStyles();

   let [hello, changeHello] = useState('world')



  useEffect(() => {
    document.title = hello
    console.log('UseEffect is working.');
         props.dispatch({ type: 'FETCH_USER' });


},[])

// let hello = statething[0]


    return (

      <ThemeProvider theme={theme}>
      {/* cssbaseline makes it so you dont have white space when you scroll to thre right */}
      <CssBaseline/>  
      <NavBar/>
      <div className={classes.appMain}>
      <PageHeader 
      title="Welcome, Artist"
      subTitle="This is your virtual gallery"
      icon={<FavoriteBorderIcon fontSize="large"/>}
      />
      <Art/>
      </div>
                {/* <SideMenu/> */}
<div className={classes.appMain}>here we go</div>
      <Router>
        <div>
          <Nav />
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

             <ProtectedRoute
              // logged in shows InfoPage else shows LoginPage
              exact
              path="/info"
              component={InfoPage}
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
               authRedirect="/user"
            />

            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
      </ThemeProvider>
    );//END return
   //}
// }
          }
export default connect()(App);
