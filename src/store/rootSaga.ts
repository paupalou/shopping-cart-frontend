import { all, spawn, call } from 'redux-saga/effects';

import { watchIncrementCounterSaga } from './modules/counter/saga';
import { watchRequestProductListSaga } from './modules/products/saga';
import { watchRequestAddToCartSaga } from './modules/cart/saga';

export default function* allSagas() {
  const sagas = [
    watchIncrementCounterSaga,
    watchRequestProductListSaga,
    watchRequestAddToCartSaga
  ];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.error(`Error ${e}`);
          }
        }
      })
    )
  );
}
