import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import AboutPage from "../Program/Program";
// CUSTOM COMPONENTS
import RegisterForm from "./RegisterForm";
import './Register.css'

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
        {/* <div id='program-container'> */}
<AboutPage/>
{/* </div> */}

        <RegisterForm cancelRegistration={this.cancelRegistration} />

        {/* <center> */}
          {/* <button
            type="button"
            className="btn btn_asLink"
            onClick={() => {
              this.props.history.push("/login");
            }}
          >
            Login
          </button> */}

          <span id='new-user-span'>
    <h3>Returning User:</h3>
    {/* <br/> */}
  <button
            type="button"
            id='go-to-register'
            onClick={(e) => {
              e.preventDefault();
              this.props.history.push(`/login`)}}
          >
          
          
          
            Login
          </button>
          </span>





        {/* </center> */}
      </section>
    );
  }
}

export default connect(mapStoreToProps)(RegisterPage);
