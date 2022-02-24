//on mount. need to do a get request for all paintings.
//need to render all paintings
import React from 'react'
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

useEffect(() => {
    props.dispatch({type: 'FETCH_ART'})
}, [])


// const fetchArt = () => {
//     useDispatch(actionService.fetchArt)   

// }

return (
  <section id='gallery-section'>
       {/* {JSON.stringify(props)}  */}

  <h1>Gallery</h1>

    {/* <div className='container'> */}
    {/* { !props.store ? (JSON.stringify('Loading Art')) : */}
    {/* (JSON.stringify(props.store))}  */}
{!art.length ? 
(<h1>You have not yet created art. head over to the Studio to get started</h1>) :
(
<ul>
{art.map((artwork) =>{
    const {artist, title, statement, dimensions, medium, url} = artwork

    

    return (
        
      // <div style={{
        // justifyContent: 'center', 
      // margin: 'auto'}}
      //  className='container'
      //  >  
        // <section id='gallery-section'>
        // <>
        // <ul>
        // <>
        <Art
            // title={title}
            // dimensions={dimensions}
            // medium={medium}
            // statement={statement}
            history={props.history}
artwork={artwork}
          /> 

    )
  })}
  </ul>
  )}

</section>

)


}

export default connect(mapStoreToProps)(Gallery);
