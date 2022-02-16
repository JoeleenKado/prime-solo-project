const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_USERS":
      return action.payload;
    // case "UNSET_USER":
    //   return {};

    //   case "SET_USERS":
    //   return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default usersReducer;
