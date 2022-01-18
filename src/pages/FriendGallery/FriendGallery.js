//on mount. need to do a get request for all paintings.
//need to render all paintings
import React from 'react'
import { useEffect,  } from "react";
import {useDispatch, useSelector} from 'react-redux'
import ActionService from "../../redux/services/action.service";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import './FriendGallery.css'
import Art from './Art'
// import Edit from '../Gallery/Edit';
function FriendGallery(props) { 
////usedispatch()
// const dispatch = useDispatch()
const {friendArt} = props.store
const {username, id } = props.match.params
useEffect(() => {
    props.dispatch({type: 'FETCH_FRIEND_ART', payload: id})
 }, [])


// const fetchArt = () => {
//     useDispatch(actionService.fetchArt)   

// }

return (
    <>
    {JSON.stringify(props)}
    {/* {JSON.stringify(props)} */}
    {/* { !props.store ? (JSON.stringify('Loading Art')) : */}
    {/* (JSON.stringify(props.store))}  */}
    <h1>{username}'s Gallery</h1>
{!friendArt.length ? 
(<h1>{username} has not yet created art.</h1>) :
(

friendArt.map((art) =>{
    const {title, statement, dimensions, medium, image} = art

    function toggleAccordion(e) {
        const content = e.target.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      }

    return (
        <div 
        // key={} 
        className="accordian-container">
        <button className="accordion" onClick={(e) => toggleAccordion(e)}>
          {title}
        </button>
        <div className="accordion-content">
          <br />
{/* {!friendArt.length ? (loading)} */}
           <Art
            // title={title}
            // dimensions={dimensions}
            // medium={medium}
            // statement={statement}
friendArt={art}
          /> 
</div>
{/* <button className="accordion" onClick={(e) => toggleAccordion(e)}>
                Edit
              </button>
              <div className="accordion-content">
                <br />
                 {/* <Edit
                  art={art}
                />  */}
                {/* <br />
              {/* </div> */}

       
         
          </div>



    )
}))}
    </>
)


}

export default connect(mapStoreToProps)(FriendGallery);
