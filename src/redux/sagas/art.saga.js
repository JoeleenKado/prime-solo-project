import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_SECRETS" actions
function* fetchArt() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('api/art', config);

    yield put({ type: 'SET_ART', payload: response.data });
  } catch (error) {
    console.log('Art get request failed', error);
  }
}

function* artSaga() {
  yield takeLatest('FETCH_ART', fetchArt);
}

export default artSaga;
