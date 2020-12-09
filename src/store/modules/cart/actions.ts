import type { IProductSelection } from 'store/modules/products/model';
import type { ICartDomain } from './model';

export const ADD_PRODUCTS_TO_CART_REQUEST = 'ADD_PRODUCTS_TO_CART_REQUEST';
export const ADD_PRODUCTS_TO_CART_SUCCESS = 'ADD_PRODUCTS_TO_CART_SUCCESS';
export const ADD_PRODUCTS_TO_CART_FAILURE = 'ADD_PRODUCTS_TO_CART_FAILURE';

export type AddProductsToCartRequestAction = ReturnType<
  typeof addProductsToCartRequestAction
>;
export const addProductsToCartRequestAction = (payload: IProductSelection[]) => ({
  type: ADD_PRODUCTS_TO_CART_REQUEST as typeof ADD_PRODUCTS_TO_CART_REQUEST,
  payload
});

export type AddProductsToCartSuccessAction = ReturnType<
  typeof addProductsToCartSuccessAction
>;
export const addProductsToCartSuccessAction = (payload: ICartDomain) => ({
  type: ADD_PRODUCTS_TO_CART_SUCCESS as typeof ADD_PRODUCTS_TO_CART_SUCCESS,
  payload
});

export type AddProductsToCartFailureAction = ReturnType<
  typeof addProductsToCartFailureAction
>;
export const addProductsToCartFailureAction = () => ({
  type: ADD_PRODUCTS_TO_CART_FAILURE as typeof ADD_PRODUCTS_TO_CART_FAILURE,
});


export type CartActions =
  | AddProductsToCartRequestAction
  | AddProductsToCartSuccessAction
  | AddProductsToCartFailureAction;
