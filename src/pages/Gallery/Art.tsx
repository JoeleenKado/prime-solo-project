import React from "react";
import "./Gallery.css";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import Caption from "./Caption";

interface IProps {
   props: any;
}
const Art: import('react').FunctionComponent<IProps> = (props: any) => {
   console.log('re', props)
  const {url} = props.artwork;
  const encodedUrl = encodeURIComponent(url);
  return (
    <>
      <li>
        <img src={url} alt="artwork" />
        <Caption {...props} />
      </li>
    </>
  ); //END return
} //END Art
export default connect(mapStoreToProps)(Art);
