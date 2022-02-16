const friendArtReducer = (state = [], action ) => {
  // const praise = console.log('welldone')
  
  
  console.log('(3)in friendArtReducer')
  //  const {praise} = action.payload
  // const praise = console.log('well done')
  switch (action.type) {
    case "SET_FRIEND_ART":
      // const {data, props, artist} = action.payload

    return  action.payload 
        //  friendArt
        
  
      
      //  case 'RESET_ART':
      //    return [];
    default:
      return state
  }
};

// user will be on the redux state at:
// store.user
export default friendArtReducer;
