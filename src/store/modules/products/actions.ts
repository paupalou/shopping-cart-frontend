import type { IProduct } from './model';

export const FETCH_ALL_PRODUCTS_REQUEST = 'FETCH_ALL_PRODUCTS_REQUEST';
export const FETCH_ALL_PRODUCTS_SUCCESS = 'FETCH_ALL_PRODUCTS_SUCCESS';
export const FETCH_ALL_PRODUCTS_FAILURE = 'FETCH_ALL_PRODUCTS_FAILURE';

export const INCREMENT_PRODUCT_QUANTITY = 'INCREMENT_PRODUCT_QUANTITY';
export const DECREMENT_PRODUCT_QUANTITY = 'DECREMENT_PRODUCT_QUANTITY';

export type FetchAllProductsRequestAction = ReturnType<
  typeof fetchAllProductsRequestAction
>;
export const fetchAllProductsRequestAction = () => ({
  type: FETCH_ALL_PRODUCTS_REQUEST as typeof FETCH_ALL_PRODUCTS_REQUEST
});

export type FetchAllProductsSuccessAction = ReturnType<
  typeof fetchAllProductsSuccessAction
>;
export const fetchAllProductsSuccessAction = (payload: IProduct[]) => ({
  type: FETCH_ALL_PRODUCTS_SUCCESS as typeof FETCH_ALL_PRODUCTS_SUCCESS,
  payload
});

export type FetchAllProductsFailureAction = ReturnType<
  typeof fetchAllProductsFailureAction
>;
export const fetchAllProductsFailureAction = () => ({
  type: FETCH_ALL_PRODUCTS_FAILURE as typeof FETCH_ALL_PRODUCTS_FAILURE
});

export type IncrementProductQuantityAction = ReturnType<
  typeof incrementProductQuantityAction
>;
export const incrementProductQuantityAction = (id: number) => ({
  type: INCREMENT_PRODUCT_QUANTITY as typeof INCREMENT_PRODUCT_QUANTITY,
  id
});

export type DecrementProductQuantityAction = ReturnType<
  typeof decrementProductQuantityAction
>;
export const decrementProductQuantityAction = (id: number) => ({
  type: DECREMENT_PRODUCT_QUANTITY as typeof DECREMENT_PRODUCT_QUANTITY,
  id
});

export type ProductActions =
  | FetchAllProductsRequestAction
  | FetchAllProductsSuccessAction
  | FetchAllProductsFailureAction
  | IncrementProductQuantityAction
  | DecrementProductQuantityAction;
