import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function Forum(props) {
  const {users} = props.store
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const [heading, setHeading] = useState("Forum");
useEffect(() => {props.dispatch({type: "FETCH_USERS"})}, [])
  return (


    <div>
            <h2>{heading}</h2>

      <ul>
        {!users.length ? (<h1>Loading Artists...</h1>) : (
         
         users.map((user) => {
          

// {users.map((user) => {


 const {username, id} = user
     
        {/* return ( */}
         
return (   
        <li onClick={(e) => {
          e.preventDefault()
          props.history.push(`/gallery/${username}/${id}`)}

          // e.preventDefault(e)
          // !props.store.friendArt.length ? (null) : (
          //   console.log('hello')
          //   // 
          //   )

          // const praise = console.log('I believe in you')
// callback(praise)
          // console.log('4')
        
          
      
        
        // }

        // }>
          
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
