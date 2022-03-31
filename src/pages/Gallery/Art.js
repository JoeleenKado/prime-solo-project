import React from "react";
import "./Gallery.css";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import Caption from "./Caption";

function Art(props) {
  const 
    { artwork, history } = props,
    { artist, title, statement, size, medium, url, id } = artwork;

  const encodedUrl = encodeURIComponent(url);
  return (
    <>
      <li>
        <img src={url} alt="artwork" />
        <Caption artwork={artwork} history={history} />
      </li>
    </>
  ); //END return
} //END Art
export default connect(mapStoreToProps)(Art);
