import React, { useEffect } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import LoginForm from "./LoginForm";
import './Login.css'
function LoginPage(props) {
useEffect(() => {
props.dispatch({type: 'FETCH_RANDOM'})
}, [])
const {image_id} = props.store.artic
// console.log('1111', props.store.artic.randomArt.image_id)
// console.log('222', props.store.artic.imageId)
    return (
      <div>
                {JSON.stringify(props.store)}

                <center>

        {!image_id ? (<h2>Loading Artwork...</h2>) : 
        (<img 
         className={'frame', 'border-one'} 
        src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`} 
        alt="random artwork"/>
)}
        <LoginForm />

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
