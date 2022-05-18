import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { JobInstance } from "twilio/lib/rest/bulkexports/v1/export/job";
import mapStoreToProps from "../../redux/mapStoreToProps";
import "./Forum.css";

function Cafe(props) {
  const 
  { users } = props.store,
[heading, setHeading] = useState("Other Artists:");
  useEffect(() => {
    props.dispatch({ type: "FETCH_USERS" });
  }, []);

  const join = () => {
      console.log('joining chat.')
      props.dispatch({type: 'JOIN', payload: ''})
  }




  return (
    <span id="compassion-span">
      <h3>{heading}</h3>
      <button onClick={(e) => join()}>JOIN CHAT</button>
      {/* <ul>
        {!users.length ? (
          <h1>Loading Artists...</h1>
        ) : (
          users.map((user) => {
            const { username, id } = user;
            return (
              <li
                onClick={(e) => {
                  e.preventDefault();
                  props.history.push(`/gallery/${username}/${id}`);
                }}
              >
                {username}
              </li>
            );
          })
        )}
      </ul> */}
    </span>
  ); //END return
} //END Forum
export default connect(mapStoreToProps)(Cafe);
