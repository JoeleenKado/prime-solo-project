//on mount. need to do a get request for all paintings.
//need to render all paintings
import React from 'react'
import { useEffect,  } from "react";
import {useDispatch, useSelector} from 'react-redux'
import ActionService from "../../redux/services/action.service";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import Gallery from '../Gallery/Gallery';
import './FriendGallery.css'
import Art from '../Gallery/Art'
// import Edit from '../Gallery/Edit';


function FriendGallery(props) { 
const {username, id } = props.match.params
const {friendly, friendArt} = props.store
//  const friendly = true;
useEffect(() => {
  // props.dispatch({type: 'SET_FRIENDLY'})  
  props.dispatch({type: 'FETCH_FRIEND_ART', payload: id})
    // setFriendly(true)
 }, [])

 console.log('friendArt:', friendArt)
 const likeSorted = friendArt.sort(function (a, b) {
  return b.like - a.like;
})

return ( 

<section id='gallery-section'>
<h1>Friend Gallery</h1>

 {/* { !friendly ? null : 
    <Gallery/>

 }
   */}
  {!friendArt.length ? 
(<h1>This artist has not yet created art</h1>) :
(
<ul>
  {
  // !art.length ? null :
  !friendly ? null :
likeSorted.map((artwork) =>{
    const {artist, title, statement, dimensions, medium, url} = artwork   
    return (
        <>
      {/* {!props.friendly ?  */}
       {/* <Art */}
       
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

)


}

export default connect(mapStoreToProps)(FriendGallery);
