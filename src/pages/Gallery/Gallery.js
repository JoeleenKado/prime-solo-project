//on mount. need to do a get request for all paintings.
//need to render all paintings
import React from 'react'
import { useEffect,  } from "react";
import {useDispatch, useSelector} from 'react-redux'
import ActionService from "../../redux/services/action.service";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

function Gallery(props) { 
////usedispatch()
const dispatch = useDispatch()

useEffect(() => {
    dispatch(ActionService.fetchArt())
}, [])


// const fetchArt = () => {
//     useDispatch(actionService.fetchArt)   

// }

return (
    <>
    {/* {JSON.stringify(props)} */}
    { !props.store ? (JSON.stringify('Loading Art')) :
    (JSON.stringify(props.store))} 
    <h1>Gallery</h1>
    </>
)


}

export default connect(mapStoreToProps)(Gallery);
