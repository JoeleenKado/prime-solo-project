import React from "react";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import "./FriendGallery.css";
import Art from "../Gallery/Art";

interface IProps {
  store: any;
  match: any;
  history: any;
  // setRefresh: any;
}



const FriendGallery: import('react').FunctionComponent<IProps> = ({store, match, history}) => {
  // console.log('freind props:', props)
 const dispatch = useDispatch();
  const { username, id } = match.params;
  const { friendly, friendArt } = store;
  useEffect(() => {
    dispatch({ type: "FETCH_FRIEND_ART", payload: id });
  }, []);
  console.log("friendArt:", friendArt);
  const likeSorted = friendArt.sort(function (a: any, b: any) {
    return b.like - a.like;
  });
  return (
    <center>
      <section id="gallery-section">
        
        <h2>{match.params.username}'s Gallery</h2>
        <h3 className="tip">Click a titleplate for more information.</h3>

        {!friendArt.length ? (
          <h1>This artist has not yet created art</h1>
        ) : (
          <ul>
            {!friendly
              ? null
              : likeSorted.map((artwork: any) => {
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
                      <Art history={history} artwork={artwork} />
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
