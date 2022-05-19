import React from "react";
import { useEffect } from "react";
 import { useDispatch } from "react-redux";
// import mapStoreToProps from "../../redux/mapStoreToProps";
import "./Gallery.css";
import Art from "./Art";

interface IProps {
props: any;
}


const Gallery: import('react').FunctionComponent<IProps> = (props: any) => {
 console.log('propsdddd:', props)
  const dispatch = useDispatch();
  const { friendly, art } = props.store;
  useEffect(() => {
    dispatch({ type: "FETCH_ART" });
  }, []);
  console.log("art:", art);
  const likeSorted = art.sort(function (a, b) {
    return b.like - a.like;
  });
  // console.log("e:", Event.currentTarget);
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
              
              return (
                <>
                  <Art {...props} artwork={artwork} />
                </>
              );
            })}
          </ul>
        )}
      </section>
    </center>
  );
} //END Gallery
export default (Gallery);
