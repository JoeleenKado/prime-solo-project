import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import AboutPage from "../Program/Program";
import RegisterForm from "./RegisterForm";
import "./Register.css";
// import { RegistrationData } from "../../types/index";


interface IProps {
   history: any;
  props: any;
  cancelRegistration: any;
}

const RegisterPage: import("react").FunctionComponent<IProps> = (props) => {
  // const data: RegistrationData = {
    
  //   'cancelRegistration': cancelRegistration
  // }
  
  // function cancelRegistration() {
  //   props.history.push("/login");
  // };
    return (
      <section id="register-section">
        {/* PROPS: {JSON.stringify(this.props)} */}
        <AboutPage />
        <RegisterForm {...props} />
        <span id="new-user-span">
          <h3>Returning User:</h3>
          <button
            type="button"
            id="go-to-register"
            onClick={(e) => {
              e.preventDefault();
              props.history.push(`/login`);
            }}
          >
            Login
          </button>
        </span>
      </section>
    );
} //END RegisterPage
export default connect(mapStoreToProps)(RegisterPage);
