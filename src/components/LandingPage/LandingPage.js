import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

import "./LandingPage.css";

// CUSTOM COMPONENTS
import RegisterForm from "../../pages/RegisterPage/RegisterForm";

function LandingPage(props) {
  // state = {
  //   heading: "Virtual Gallery",
  // };

   function onLogin (event) {
     this.props.history.push("/login");
   };

    return (
      <div className="container">
        {/* <h2>{this.state.heading}</h2> */}
{/* {JSON.stringify(props.store)} */}
        <div className="grid">
          <div className="grid-col grid-col_8"></div>
          <div className="grid-col grid-col_4">
            <RegisterForm />

            <center>
              <h4>Already a Member?</h4>
              <button onClick={onLogin}>
                Login
              </button>
            </center>
          </div>
        </div>
      </div>
    );
}

export default connect(mapStoreToProps)(LandingPage);
