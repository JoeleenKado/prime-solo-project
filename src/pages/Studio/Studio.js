import React from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import "react-confirm-alert/src/react-confirm-alert.css";
import Form from "./Form";

function Studio() {
  return (
    <section id="studio-section">
      <Form />
      <br />
    </section>
  );
} //END Studio
export default connect(mapStoreToProps)(Studio);
