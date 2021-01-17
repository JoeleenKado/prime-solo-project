import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';

class UserPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_ART' });
  }


  // const shelfData = useSelector((state) => state.shelf);

  openEdit = (event, artwork) => {
    console.log(`In openEdit function...`);
    console.log('artwork:', artwork)
  }

  render() {
    // const art = useSelector((state) => state.store.art);
    const art = this.props.store.art;

   

    return (
      <div>
        RS: {JSON.stringify(this.props.store)}
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <p>Your ID is: {this.props.store.user.id}</p>


   <h3>Here is your art: {JSON.stringify(art)}</h3> 
   <ul>
   {art.map((artwork) => (
            // <li onClick={(event)=>this.monthAlert(event)}>{month.name}</li>

          <li key={artwork.id} className={'shelf'} onClick={(event)=>this.openEdit(event, {artwork})}>
            {/* <h2>User ID: {info.user_id}</h2> */}
            {/* <p>Description: {info.description}</p> */}
            {/* <img src={info.image_url} alt={info.description}></img> */}
            {/* <button onClick={() => dispatch({type : "DELETE_ITEM", payload : info})}>DELETE</button>  */}
            {/* left off here */}
<h1>{artwork.title}</h1>
          </li>
        ))}
        </ul>

   

  <LogOutButton className="log-in" />
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
