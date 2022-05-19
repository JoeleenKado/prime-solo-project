const authenticationReducer = (state = [], action) => {
  console.log("authenticationReducer ONLINE.");
  switch (action.type) {
    case "SET_CODE":
      return action.payload;
    // case "RESET_ART":
    //   return [];
    default:
      return state;
  }
};
export default authenticationReducer;
