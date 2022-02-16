const articReducer = (state = [], action) => { 
console.log('in articReducer')
  switch (action.type) {
    case "SET_ARTIC":
      return action.payload;
    //   case 'UNSET_SECRETS':
    //     return [];
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default articReducer;
