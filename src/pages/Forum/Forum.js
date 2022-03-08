import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import './Forum.css'

function Forum(props) {
  const {users} = props.store
  const [heading, setHeading] = useState("Other Artists:");
useEffect(() => {props.dispatch({type: "FETCH_USERS"})}, [])
  return (
      <span id='friend-span'>
            <h3>{heading}</h3>
      <ul>
        {!users.length ? (<h1>Loading Artists...</h1>) : (        
         users.map((user) => {         
 const {username, id} = user             
return (   
        <li onClick={(e) => {
          e.preventDefault()
          props.history.push(`/gallery/${username}/${id}`)}
       }>
                  {username}
          </li>
       )}))}
          </ul> 
          </span> 
       )//END return
        }//END Forum
export default connect(mapStoreToProps)(Forum);
