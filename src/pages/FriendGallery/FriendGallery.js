import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import "./FriendGallery.css";
import Art from "../Gallery/Art";

function FriendGallery(props) {
  console.log('freind props:', props)
  const { username, id } = props.match.params;
  const { friendly, friendArt } = props.store;
  useEffect(() => {
    props.dispatch({ type: "FETCH_FRIEND_ART", payload: id });
  }, []);
  console.log("friendArt:", friendArt);
  const likeSorted = friendArt.sort(function (a, b) {
    return b.like - a.like;
  });
  return (
    <center>
      <section id="gallery-section">
        
        <h2>{props.match.params.username}'s Gallery</h2>
        <h3 className="tip">Click a titleplate for more information.</h3>

        {!friendArt.length ? (
          <h1>This artist has not yet created art</h1>
        ) : (
          <ul>
            {!friendly
              ? null
              : likeSorted.map((artwork) => {
                  const {
                    artist,
                    title,
                    statement,
                    dimensions,
                    medium,
                    url,
                  } = artwork;
                  return (
                    <>
                      <Art history={props.history} artwork={artwork} />
                    </>
                  );
                })}
          </ul>
        )}
      </section>
    </center>
  ); //END return
} //END FriendGallery
export default connect(mapStoreToProps)(FriendGallery);
