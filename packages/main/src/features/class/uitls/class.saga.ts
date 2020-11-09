import { takeLatest, all, put } from 'redux-saga/effects';
import { productItems } from './classItem';
import { fetchClassStart, fetchClassSuccess } from './class.action';

function* fetchClassSaga() {
  try {
    yield put(fetchClassSuccess(productItems));
  } catch (err) {
    console.log(err.message);
  }
}

export function* watchClass() {
  yield all([takeLatest(fetchClassStart.type, fetchClassSaga)]);
}
