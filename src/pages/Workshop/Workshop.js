import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import "react-confirm-alert/src/react-confirm-alert.css";
import './Workshop.css'
import Dropdown from "./Dropdown";

function Workshop(props) {
    const {art} = props.store;
    const {workshop} = props.store;
    const [artwork, setArtwork] = useState('')
    const [frame, setFrame] = useState('')
 useEffect(() => {
  },[])
 return (
    <div>
hi
<ul>
  {!art.length ? null : (
          art.map((piece) => 
        <li onClick={setArtwork(piece.id)}>{piece.title}</li>
          ))}
</ul>
          {!artwork.length ? null : (
<form onSubmit={props.dispatch({type: 'FRAME_ARTWORK', payload: frame})}>
    <input value={artwork}/>
  <label htmlFor="frame">
        Frame
        <select
          value={frame}
          onChange={(e) => {
            setFrame(e.target.value);
          }}
        >
          <Dropdown workshop={workshop} />
          <option value="N/A">N/A</option>
        </select>
      </label> 
</form>
   )}
</div>
    ); //END return
}//END Workshop
export default connect(mapStoreToProps)(Workshop);