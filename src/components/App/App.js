import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import Program from "../../pages/Program/Program";
import LoginPage from "../../pages/LoginPage/LoginPage";
// import Settings from "../../pages/Settings/Settings";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import Gallery from "../../pages/Gallery/Gallery";
import FriendGallery from "../../pages/FriendGallery/FriendGallery";
import Studio from "../../pages/Studio/Studio";
import Forum from "../../pages/Forum/Forum";
import Edit from "../../pages/Edit/Edit";
// import Authentication from "../../pages/Authentication/Authentication";
import "./App.css";

function App(props) {
  const store = useSelector((store) => store);


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action.fetchUser());
  }, {});
  return (
    <>
      <header>
        <nav>
          <Nav id="nav" 
          {...props} store={store}/>
        </nav>
      </header>
      <div className="color-bar"></div>
      <Router>
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home"
            />  
          <Route exact path="/program" component={Program} />
          <ProtectedRoute
            path="/gallery/:username/:id"
            render={(props) => <FriendGallery {...props} store={store} />}
          />
          {/* <ProtectedRoute
            path="/edit/:title/:medium/:size/:statement/:url/:id"
            render={() => <Edit store={store} />}
          /> */}
       
          <ProtectedRoute
            path="/edit/:title/:medium/:size/:statement/:url/:id"
            render={(props) => <Edit {...props} store={store} />}
          />
          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            exact
            path="/gallery"
            render={(props) => <Gallery {...props} store={store} />}
          />
           {/* <Route
            // props={props}
            exact
            path="/authentication/:user"
            component={Authentication} */}
          {/* /> */}
          <ProtectedRoute 
          exact path="/forum" 
          render={(props) => <Forum {...props} store={store} />}/>
          <ProtectedRoute exact path="/studio" component={Studio} />
          {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows LoginPage at /login
            exact
            path="/login"
            render={(props) => <LoginPage {...props} store={store} />}
            authRedirect="/gallery"
          />
          <ProtectedRoute
            exact
            path="/registration"
            component={RegisterPage}
            authRedirect="/gallery"
          />
          {/* <ProtectedRoute */}
           <ProtectedRoute
            exact
            path="/home"
             render={(props) => <LoginPage {...props} store={store} />} 
              authRedirect="/gallery"
            /> 
          {/* /> */}
          {/* If none of the other routes matched, we will show a 404. */}
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </Router>
      <footer>
        <Footer />
      </footer>
    </>
  ); //END return
} //END App
export default (App);
