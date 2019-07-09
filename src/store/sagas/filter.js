import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import history from '../../routes/history';

import { Creators as FilterActions } from '../ducks/filter';

export function* filter(action) {
  try {
    const { term, tag } = action.payload.params;
    let paramsApi = '';
    if (term.length > 0) paramsApi = `&text=${term}`;
    if (tag.length > 0) paramsApi = `&tags=${tag}`;

    const response = yield call(api.get, paramsApi);

    let browserQueryString = '';
    if (term.length > 0) browserQueryString += `/search?s=${term}`;
    if (tag.length > 0) browserQueryString += `/tags?t=${tag}`;
    history.push(`${browserQueryString}`);

    yield put(FilterActions.filterSuccess(response.data.photos));
  } catch (err) {}
}

export function* loadingMore(action) {
  try {
    const { term, tag, page } = action.payload.params;
    let paramsApi = '';
    if (term.length > 0) paramsApi = `&text=${term}`;
    if (tag.length > 0) paramsApi = `&tags=${tag}`;

    const response = yield call(api.get, `${paramsApi}&page=${page + 1}`);
    yield put(FilterActions.filterLoadingMoreSuccess(response.data.photos));
  } catch (err) {}
}
