import * as Actions from './actions';
import { ICartDomain, initialState } from './model';

const CartReducer = (
  state: ICartDomain = initialState,
  action: Actions.CartActions
) => {
  switch (action.type) {
    case Actions.ADD_PRODUCTS_TO_CART_REQUEST:
      return { ...initialState, loading: true };
    case Actions.ADD_PRODUCTS_TO_CART_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};

export default CartReducer;
