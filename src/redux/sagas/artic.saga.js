import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* articSaga() {
  yield takeLatest("FETCH_RANDOM", fetchRandomSaga);
}
function* fetchRandomSaga() {
  console.log("In fetchRandomSaga...");
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const res = yield axios.get("api/artic", config);
    const randomArt = res.data;
    console.log("randomArt:", randomArt);
    yield put({ type: "SET_ARTIC", payload: randomArt });
  } catch (error) {
    console.log("Art get request failed", error);
  }
}
export default articSaga;
