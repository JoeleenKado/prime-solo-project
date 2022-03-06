import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import AboutPage from "../Program/Program";
// CUSTOM COMPONENTS
import RegisterForm from "./RegisterForm";

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
      <section id='register-section'>
        <div id='program-container'>
<AboutPage/>
</div>

        <RegisterForm cancelRegistration={this.cancelRegistration} />

        <center>
          <button
            type="button"
            className="btn btn_asLink"
            onClick={() => {
              this.props.history.push("/login");
            }}
          >
            Login
          </button>
        </center>
      </section>
    );
  }
}

export default connect(mapStoreToProps)(RegisterPage);
