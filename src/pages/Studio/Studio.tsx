import React from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import "react-confirm-alert/src/react-confirm-alert.css";
import Form from "./Form";

interface IProps {
  props: any;
  
}


const Studio: import('react').FunctionComponent<IProps> = (props) => {
  return (
    <section id="studio-section">
      <Form {...props}/>
      <br />
    </section>
  );
} //END Studio
export default connect(mapStoreToProps)(Studio);
