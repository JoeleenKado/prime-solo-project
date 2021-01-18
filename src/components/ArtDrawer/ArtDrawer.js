import React from 'react';
 import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

// const InfoPage = () => (
//   <div>
//     <p>Info Page</p>


//   {/* <h3>RS: {JSON.stringify(props.store.art)}</h3> */}

//   </div>
// );

// If you needed to add local state or other things,
// you can make it a class component like:


class ArtDrawer extends React.Component {

  render() {
    return (
      <div>
        <p>Art ArtDrawer</p>
         <h3>RS: {JSON.stringify(this.props.store.art)}</h3> 

      </div>
    )
  }
}

//export default InfoPage;
export default connect(mapStoreToProps)(ArtDrawer);
