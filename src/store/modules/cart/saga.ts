import { takeEvery, call, put, delay } from 'redux-saga/effects';

import { getRandomDelay } from 'helpers';
import type { IProductSelection } from 'store/modules/products/model';

import { ADD_PRODUCTS_TO_CART_REQUEST, addProductsToCartSuccessAction, addProductsToCartFailureAction } from './actions';

function createCart(products: IProductSelection[]) {
  return fetch('/api/v1/cart?isSunday=true', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(products)
  });
}

export function* createCartSaga(action: any) {
  try {
    const response = yield call(createCart, action.payload);
    yield delay(getRandomDelay(1, 2));
    const payload = yield response.json();
    yield put(addProductsToCartSuccessAction(payload));
  } catch (e) {
    yield put(addProductsToCartFailureAction());
  }
}

export function* watchRequestAddToCartSaga() {
  yield takeEvery(ADD_PRODUCTS_TO_CART_REQUEST, createCartSaga);
}