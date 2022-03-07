import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

function Forum(props) {
  const {users} = props.store
  const [heading, setHeading] = useState("Forum");
useEffect(() => {props.dispatch({type: "FETCH_USERS"})}, [])
  return (
    <div>
            <h2>{heading}</h2>
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
       )}
        )
        )}
          </ul>  
       </div>
       )//END return
        }//END Forum
export default connect(mapStoreToProps)(Forum);
