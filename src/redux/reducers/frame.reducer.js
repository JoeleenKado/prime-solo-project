const frameReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_FRAME":
      return action.payload;
       case 'RESET_FRAME':
         return [];
    default:
      return state;
  }
};

// user will be on the redux state at:
// store.user
export default frameReducer;
