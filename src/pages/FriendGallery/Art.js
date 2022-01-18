import React from 'react'
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

function Art(props) {
    const {title, statement, dimensions, medium, image} = props.friendArt
   return (
   <table>
    <tbody>
      <tr>
        <td>Title: {title}</td>
      </tr>
      <tr>
        <td><img src={image} alt='artwork'/></td>
      </tr>
      <tr>
        <td>Statement: {statement}</td>
      </tr>
      <tr>
        <td>Dimensions: {dimensions}</td>
      </tr>
      <tr>
        <td>Medium: {medium}</td>
      </tr>
      </tbody>
      </table>
   )
}
export default connect(mapStoreToProps)(Art);
