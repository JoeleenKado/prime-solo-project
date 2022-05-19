import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// worker Saga: will be fired on "REGISTER" actions
// function* generateCode(action) {
//   // const [license, setLicense] = useState("");
// console.log('in generateCode saga.')

//   // return setLicense(code);

//    yield put({ type: "REGISTER", payload: action });

// }

function* registerUser(action) {
  console.log("payloadddddd:", action.payload);
  // const {username, password} = action.payload.payload
  // console.log('OBJ:', obj)
  try {
    // clear any existing error on the registration page
    yield put({ type: "CLEAR_REGISTRATION_ERROR" });
    // passes the username and password from the payload to the server
    yield axios.post("/api/user/register", action.payload);
    // automatically log a user in after registration

    yield put({ type: "LOGIN", payload: action.payload });

    // yield put({ type: "LOGIN", payload: {username: username, password: password} });
    // // set to 'login' mode so they see the login screen
    // // after registration or after they log out
    // yield put({ type: "SET_TO_LOGIN_MODE" });
  } catch (error) {
    console.log("Error with user registration:", error);
    yield put({ type: "REGISTRATION_FAILED" });
  }
}

function* registrationSaga() {
  // yield takeLatest("FETCH_CODE", generateCode);
  yield takeLatest("REGISTER", registerUser);
  // yield takeLatest("FETCH_CODE", fetchCode)
}
export default registrationSaga;
