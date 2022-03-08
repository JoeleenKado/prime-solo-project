import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* updatePassword(action) {
  console.log("In updatePassword*()...");
  console.log("payload:", action.payload);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.put(
      "api/settings/password/",
      action.payload,
      config
    );
    yield put({ type: "FETCH_ART" });
  } catch (error) {
    console.log("Art get request failed", error);
  }
}
function* settings() {
  yield takeLatest("UPDATE_PASSWORD", updatePassword);
}
export default settings;
