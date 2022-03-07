import React from 'react'
import { useEffect,  } from "react";
import {useDispatch, useSelector} from 'react-redux'
import ActionService from "../../redux/services/action.service";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import Gallery from '../Gallery/Gallery';
import './FriendGallery.css'
import Art from '../Gallery/Art'

function FriendGallery(props) { 
const {username, id } = props.match.params
const {friendly, friendArt} = props.store
useEffect(() => {
  props.dispatch({type: 'FETCH_FRIEND_ART', payload: id})
 }, [])
 console.log('friendArt:', friendArt)
 const likeSorted = friendArt.sort(function (a, b) {
  return b.like - a.like;
})
return ( 
<section id='gallery-section'>
<h2>{props.match.params.username}'s Gallery</h2>
  {!friendArt.length ? 
<h1>This artist has not yet created art</h1> :
(
<ul>
  {
  !friendly ? null :
likeSorted.map((artwork) =>{
    const {artist, title, statement, dimensions, medium, url} = artwork   
    return (
        <>
      <Art 
        history={props.history}
       artwork={artwork}
       />        
          </>
    )
  })}
  </ul>
  )}
)
</section>
)//END return
}//END FriendGallery
export default connect(mapStoreToProps)(FriendGallery);
