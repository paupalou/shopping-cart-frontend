import { takeEvery, call, put, delay } from 'redux-saga/effects';

import { getRandomDelay } from 'helpers';

import {
  FETCH_ALL_PRODUCTS_REQUEST,
  fetchAllProductsSuccessAction,
  fetchAllProductsFailureAction
} from './actions';

function fetchProducts() {
  return fetch('/api/v1/products', {
    headers: { 'Content-Type': 'application/json' }
  });
}

export function* fetchAllProductsSaga() {
  try {
    const response = yield call(fetchProducts);
    yield delay(getRandomDelay(1, 3));
    const payload = yield response.json();
    yield put(fetchAllProductsSuccessAction(payload));
  } catch (e) {
    yield put(fetchAllProductsFailureAction());
  }
}

export function* watchRequestProductListSaga() {
  yield takeEvery(FETCH_ALL_PRODUCTS_REQUEST, fetchAllProductsSaga);
}
