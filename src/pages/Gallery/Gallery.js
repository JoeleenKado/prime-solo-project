import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import "./Gallery.css";
import Art from "./Art";

function Gallery(props) {
  console.log('in gallery')
  const { friendly } = props.store;
  const { art } = props.store;
  useEffect(() => {
    props.dispatch({ type: "FETCH_ART" });
  }, []);
  console.log("art:", art);
  const likeSorted = art.sort(function (a, b) {
    return b.like - a.like;
  });
  console.log("e:", Event.currentTarget);
  return (
    <center>
      <section id="gallery-section">
      <h3 className="tip">Click a titleplate for more information.</h3>


        {!art.length && !friendly ? (
          <h1>
            You have not yet created art. head over to the Studio to get started
          </h1>
        ) : (
          <ul>
            {likeSorted.map((artwork) => {
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
  );
} //END Gallery
export default connect(mapStoreToProps)(Gallery);
