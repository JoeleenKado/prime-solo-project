const friendlyReducer = (state = false, action ) => {
  // const praise = console.log('welldone')
  
  
  console.log('(3)in friendlyReducer')
  //  const {praise} = action.payload
  // const praise = console.log('well done')
  switch (action.type) {
    case "SET_FRIENDLY":
      // const {data, props, artist} = action.payload

    return  true 
        //  friendArt
        case "UNSET_FRIENDLY":
          // const {data, props, artist} = action.payload
    
        return  false
            //  friendArt   
  
      
      //  case 'RESET_ART':
      //    return [];
    default:
      return state
  }
};

// user will be on the redux state at:
// store.user
export default friendlyReducer;
