import axios from "axios";
import { useCallback } from "react";
import { put, takeLatest } from "redux-saga/effects";
//import { createStore, combineReducers, applyMiddleware } from 'redux';
//import registerServiceWorker from './registerServiceWorker';

// worker Saga: will be fired on "FETCH_SECRETS" actions

function* frameSaga() {
  yield takeLatest("FETCH_FRAME", fetchFrameSaga);
  yield takeLatest("FETCH_FRIEND_ART", fetchFriendArtSaga);

  yield takeLatest("ADD_FRAME", addFrameSaga);
  yield takeLatest("UPDATE_ART", updateArtSaga);
  // yield takeLatest("FETCH_ARTISTS", fetchArtistsSaga);

  yield takeLatest("DELETE_ART", deleteArtSaga);
  // yield takeLatest("FETCH_DETAILS", fetchDetailsSaga);
}

function* fetchFrameSaga() {
  console.log("In fetchFrameSaga...");
  // const {username} = action.payload
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const response = yield axios.get("api/workshop", config);

    yield put({ type: "SET_FRAME", payload: response.data });
  } catch (error) {
    console.log("Art get request failed", error);
  }
}

function* fetchFriendArtSaga(action) {
  console.log("(1)In fetchFriendArtSaga...");
   const id = action.payload
   console.log('(2)artist:', id)
    // const praise = console.log('keep goin')
// callback(praise)
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const response = yield axios.get(`api/art/${id}`, config);

   yield put({ type: "SET_FRIEND_ART", payload: response.data 
  })} catch (error) {
    console.log("Art get request failed", error);
  }
}



function* addFrameSaga(action) {
  console.log("In addFrameSaga...");
  console.log("payload:", action.payload);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const response = yield axios.post("api/workshop", action.payload, config);

     yield put({ type: "FETCH_FRAME" });
  } catch (error) {
    console.log("Art get request failed", error);
  }
}

function* updateArtSaga(action) {
  console.log("In updateArtSaga...");
  console.log("payload:", action.payload);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const response = yield axios.put("api/art", action.payload, config);

    yield put({ type: "FETCH_ART" });
  } catch (error) {
    console.log("Art get request failed", error);
  }
}

function* deleteArtSaga(action) {
  console.log("In deleteArtSaga...");
  console.log("payload:", action.payload);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const response = yield axios.delete(`api/art/${action.payload}`, config);

    yield put({ type: "FETCH_ART" });
  } catch (error) {
    console.log("Art get request failed", error);
  }
} 



function* fetchDetailsSaga(action) {
  console.log("In fetchDetailsSaga...");
  console.log("payload:", action.payload);

  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const response = yield axios.get(`api/art/${action.payload}`, config);

    yield put({ type: "SET_ART", payload: response.data });
  } catch (error) {
    console.log("Art get request failed", error);
  }
}

export default frameSaga;
