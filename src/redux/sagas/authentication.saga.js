import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// worker Saga: will be fired on "REGISTER" actions
// function* generateCode(action) {
//   // const [license, setLicense] = useState("");
// console.log('in generateCode saga.')
 
//   // return setLicense(code);


//    yield put({ type: "REGISTER", payload: action });


// }


function* fetchCode(action) {
  console.log('payloadoooooo:', action.payload)
  // const {username, password} = action.payload.payload
  // console.log('OBJ:', obj)
  try {
    const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      };
    // clear any existing error on the registration page
    // yield put({ type: "CLEAR_REGISTRATION_ERROR" });
    // passes the username and password from the payload to the server
//    const res =  yield axios.get("/api/user/authentication/:${}", config);
    // automatically log a user in after registration



    const res = yield axios.get("api/user/authentication", config);

   const response = yield put({ type: "SET_CODE", payload: code });
    // // set to 'login' mode so they see the login screen
    // // after registration or after they log out
    // yield put({ type: "SET_TO_LOGIN_MODE" });
    const code = res.data;

  } 
  
  catch (error) {
    console.log("Error with user registration:", error);
    yield put({ type: "REGISTRATION_FAILED" });
  }
}
function* authenticationSaga(action) {
  // yield takeLatest("FETCH_CODE", generateCode);
  yield takeLatest("FETCH_CODE", fetchCode);

}
export default authenticationSaga;
