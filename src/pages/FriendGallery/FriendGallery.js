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
   <Gallery/>
)


}

export default connect(mapStoreToProps)(FriendGallery);
