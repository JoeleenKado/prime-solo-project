const articReducer = (state = [], action) => { 
console.log('in articReducer')
  switch (action.type) {
    case "SET_ARTIC":
      return action.payload;
    default:
      return state;
  }
};
export default articReducer;
