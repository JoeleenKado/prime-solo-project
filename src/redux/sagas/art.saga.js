import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_SECRETS" actions

function* addArtSaga() {
  console.log('In addArtSaga')
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.post('api/art', config);

    yield put({ type: 'FETCH_ART'});
  } catch (error) {
    console.log('Art get request failed', error);
  }
}




function* fetchArtSaga() {
  console.log('In fetchArtSaga')
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
  yield takeLatest('FETCH_ART', fetchArtSaga);
  yield takeLatest('ADD_ART', addArtSaga);

}

export default artSaga;
