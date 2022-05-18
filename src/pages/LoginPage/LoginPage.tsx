import React, { useEffect, useState } from "react";
import {  useDispatch, connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import LoginForm from "./LoginForm";
import "./LoginPage.css";
import { articData } from "../../types/index";
// const LoginPage: import("react").FunctionComponent({props}) => {

  interface IProps {
    props: any;
    history: any;
    store: any;
  
  }
const LoginPage: import("react").FunctionComponent<IProps> = (props) => {
  
  console.log('loginpage:',)
  const dispatch = useDispatch();
  // const { artic } = props.store;
  const { image_id, title, artist_display } = props.store.artic;
  const [caption, setCaption] = useState(true);
  useEffect(() => {
    dispatch({ type: "FETCH_RANDOM" });
  }, []);
  const toggleCaption = () => setCaption(!caption);
  const ARTISTS = ["Gauguin", "Picasso", "Gogh", "Matisse", "C\xE9zanne"];
  const NATIONALITIES = ["\nFrench", "\nDutch", "\nSpanish"];

const data: articData = {
  artist_display: artist_display,
  image_id: image_id,
 title: title,
}

  if (artist_display) {
    const ret = artist_display.replace(NATIONALITIES, "");
    console.log("ret:", ret);
    function retFunction() {
      for (let i = 0; i < ARTISTS.length; i++) {
        if (ret.includes(ARTISTS[i])) {
          console.log("hooray");

          return doIt(ARTISTS[i]);
        }
      }
      return console.log("finished");
    }
    let moreRet;
    function doIt(artist: string) {
      moreRet = ret.replace(artist, `${artist};`);
      return console.log("moreRet:", moreRet);
    }
    console.log("retFunction():", retFunction());
    return (
      <section id="login-section">
        PROPS: {JSON.stringify(props)}
        {!image_id ? (
          <p>Loading Artwork...</p>
        ) : (
          <div id="master-figure-container">
            <figure id="master-figure">
              <img
                id="master-image"
                src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
                alt="random artwork"
                onClick={toggleCaption}
              />
              <figcaption className={caption ? "" : "hide"}>
                <address id="master-caption">
                  <span id="caption-span">
                    <h4>{title}</h4>
                    <p>{moreRet}</p>
                  </span>
                </address>
              </figcaption>
            </figure>
          </div>
        )}
        <LoginForm {...props}/>
        <span id="new-user-span">
          <h3>New User:</h3>
          <button
            type="button"
            id="go-to-register"
            onClick={(e) => {
              e.preventDefault();
              props.history.push(`/registration`);
            }}
          >
            Register
          </button>
        </span>
      </section>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};
export default connect(mapStoreToProps)(LoginPage);
