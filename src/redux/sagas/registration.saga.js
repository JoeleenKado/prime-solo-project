import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// worker Saga: will be fired on "REGISTER" actions
function* generateCode(action) {
  // const [license, setLicense] = useState("");
console.log('in generateCode saga.')
  const ALPHA_NUMERIC =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let code = "";

  // useEffect(() => {
  //   setLicense("");
  //   // LicenseDataService.getAll().then((res) => {
  //   //   console.log("(3) getAlllicenses().then()", res);
  //   //   res.shift();
  //   //   setLicenses(res);
  //   // });
  // }, []);

  for (let i = 0; i < 6; i++) {
    code += ALPHA_NUMERIC.charAt(
      Math.floor(Math.random() * ALPHA_NUMERIC.length)
    );
  } //END for loop
  // licenses.forEach((licenseObject) => {
  //   const { license } = licenseObject;
  //   console.log("(2)code:", code, "license:", license);
  //   if (license === code) {
  //     console.log("duplicate");
  //     return concatenateCode();
  //   }
  // });
console.log('code:', code )
  // return setLicense(code);


   yield put({ type: "REGISTER", payload: action.payload });


}


function* registerUser(payload) {
  console.log('payload:', payload)
  try {
    // clear any existing error on the registration page
    yield put({ type: "CLEAR_REGISTRATION_ERROR" });
    // passes the username and password from the payload to the server
    yield axios.post("/api/user/register", payload);
    // automatically log a user in after registration
    yield put({ type: "LOGIN", payload: payload });
    // set to 'login' mode so they see the login screen
    // after registration or after they log out
    yield put({ type: "SET_TO_LOGIN_MODE" });
  } catch (error) {
    console.log("Error with user registration:", error);
    yield put({ type: "REGISTRATION_FAILED" });
  }
}
function* registrationSaga() {
  yield takeLatest("FETCH_CODE", generateCode);
  yield takeLatest("REGISTER", registerUser);

}
export default registrationSaga;
