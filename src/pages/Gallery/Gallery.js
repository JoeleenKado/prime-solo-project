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
    <>
     {JSON.stringify(props)}kkk
    {/* { !props.store ? (JSON.stringify('Loading Art')) : */}
    {/* (JSON.stringify(props.store))}  */}
    <h1>Gallery</h1>
{!art.length ? 
(<h1>You have not yet created art. head over to the Studio to get started</h1>) :
(

art.map((art) =>{
    const {title, statement, dimensions, medium, url} = art

    function toggleAccordion(e) {
        const content = e.target.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      }

    return (
        
      <>  
        
        <Art
            // title={title}
            // dimensions={dimensions}
            // medium={medium}
            // statement={statement}
art={art}
          /> 
       
      
      <div 
        //  key={} 
       
       
        className="accordian-container"
        >


         {/* <button 
         className="accordion" onClick={(e) => toggleAccordion(e)}
        >
          {title}
        </button>  */}
          <div className="accordion-content"> 
          {/* <br /> */}
           
{/* </div> */} 
<button className="accordion" onClick={(e) => toggleAccordion(e)}>
                Edit
              </button>
              <div className="accordion-content">
                <br />
                 <Edit
                  art={art}
                /> 
                <br />
              </div>


       
         
          </div>


</div>
</>
    )
}))}
    </>
)


}

export default connect(mapStoreToProps)(Gallery);
