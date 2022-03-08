const friendArtReducer = (state = [], action) => {
  console.log("(3)in friendArtReducer");
  switch (action.type) {
    case "SET_FRIEND_ART":
      return action.payload;
    default:
      return state;
  }
};
export default friendArtReducer;
