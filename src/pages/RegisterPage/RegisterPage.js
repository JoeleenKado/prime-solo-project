import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import AboutPage from "../Program/Program";
import RegisterForm from "./RegisterForm";
import "./Register.css";

class RegisterPage extends Component {
  state = {
    username: "",
    password: "",
  };
  cancelRegistration = () => {
    this.props.history.push("/login");
  };
  render() {
    return (
      <section id="register-section">
        {/* PROPS: {JSON.stringify(this.props)} */}
        <AboutPage />
        <RegisterForm cancelRegistration={this.cancelRegistration} history={this.props.history} />
        <span id="new-user-span">
          <h3>Returning User:</h3>
          <button
            type="button"
            id="go-to-register"
            onClick={(e) => {
              e.preventDefault();
              this.props.history.push(`/login`);
            }}
          >
            Login
          </button>
        </span>
      </section>
    );
  }
} //END RegisterPage
export default connect(mapStoreToProps)(RegisterPage);
