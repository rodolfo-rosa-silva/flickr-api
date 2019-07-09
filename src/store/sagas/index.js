import { all, takeLatest } from 'redux-saga/effects';

import { Types as FilterTypes } from '../ducks/filter';

import { filter, loadingMore } from './filter';

export default function* rootSaga() {
  yield all([takeLatest(FilterTypes.FILTER_REQUEST, filter)]);
  yield all([takeLatest(FilterTypes.FILTER_LOADING_MORE, loadingMore)]);
}
