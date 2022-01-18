import React, { useEffect } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import LoginForm from "../LoginForm/LoginForm";

function LoginPage(props) {
useEffect(() => {
props.dispatch({type: 'FETCH_DATA'})
}, [])
const imageId = props.store.artic.image_id
// console.log('1111', props.store.artic.randomArt.image_id)
// console.log('222', props.store.artic.imageId)
    return (
      <div>
        {JSON.stringify(props.store)}
        {!imageId ? (<h2>Loading Artwork...</h2>) : 
        (<img src={`https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`} alt="random artwork"/>
)}
        <LoginForm />

        <center>
          <button
            type="button"
            className="btn btn_asLink btn"
            onClick={() => {
              props.history.push("/registration");
            }}
          >
            Register
          </button>
        </center>
      </div>
    );
  
}

export default connect(mapStoreToProps)(LoginPage);
