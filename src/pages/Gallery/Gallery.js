//on mount. need to do a get request for all paintings.
//need to render all paintings
import React, {useState} from 'react'
import { useEffect,  } from "react";
import {useDispatch, useSelector} from 'react-redux'
import ActionService from "../../redux/services/action.service";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import './Gallery.css'
import Art from './Art'
import Edit from './Edit';
import Caption from './Caption';
function Gallery(props) { 
////usedispatch()
// const dispatch = useDispatch()
const {art} = props.store
// const [friendly, setFriendly] = useState(false)
useEffect(() => {
    props.dispatch({type: 'FETCH_ART'})
}, [])


// const fetchArt = () => {
//     useDispatch(actionService.fetchArt)   

// }
console.log('e:', Event.currentTarget)
// console.log('node.parentElement():', Node.parentElement())
return (
  <section id='gallery-section'>
       {/* {JSON.stringify(props)}  */}

  {props.store.friendly ? <h1>Friend Gallery</h1> : <h1>Gallery</h1>}

    {/* <div className='container'> */}
    {/* { !props.store ? (JSON.stringify('Loading Art')) : */}
    {/* (JSON.stringify(props.store))}  */}
{!art.length ? 
(<h1>You have not yet created art. head over to the Studio to get started</h1>) :
(
<ul>
  {
  // !art.length ? null :
art.map((artwork) =>{
    const {artist, title, statement, dimensions, medium, url} = artwork

    
    return (
        <>
      {/* {!props.friendly ?  */}
       <Art
       
       history={props.history}
artwork={artwork}
     /> 
      
      
      {/* : 
      <Art
       
       history={props.history}
artwork={artwork}
friendly={props.friendly}
     /> 
     
       
       
       } */}
       
          </>

    )
  })}
  </ul>
  )}

</section>

)


}

export default connect(mapStoreToProps)(Gallery);
