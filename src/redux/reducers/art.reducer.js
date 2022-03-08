const artReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_ART":
      return action.payload;
       case 'RESET_ART':
         return [];
    default:
      return state;
  }
};
export default artReducer;
