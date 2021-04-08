import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

// CUSTOM COMPONENTS
import RegisterForm from "../RegisterForm/RegisterForm";

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
      <div>
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
      </div>
    );
  }
}

export default connect(mapStoreToProps)(RegisterPage);
