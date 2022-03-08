const friendlyReducer = (state = false, action ) => {
    console.log('(3)in friendlyReducer')
  switch (action.type) {
    case "SET_FRIENDLY":
    return  true 
        case "UNSET_FRIENDLY":    
        return  false
    default:
      return state
  }
};
export default friendlyReducer;
