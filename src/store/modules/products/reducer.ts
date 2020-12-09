import { IProductsDomain, initialState } from './model';
import * as Actions from './actions';

const ProductsReducer = (
  state: IProductsDomain = initialState,
  action: Actions.ProductActions
) => {
  switch (action.type) {
    case Actions.FETCH_ALL_PRODUCTS_REQUEST:
      return { ...state, loading: true, error: false };

    case Actions.FETCH_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        list: action.payload,
      };

    case Actions.INCREMENT_PRODUCT_QUANTITY: {
      const cartItem = state.selection.find((product) => product.id === action.id);
      if (!cartItem) {
        return {
          ...state,
          selection: [...state.selection, { id: action.id, quantity: 1 }]
        };
      }

      return {
        ...state,
        selection: state.selection.map((product) =>
          product.id === action.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      };
    }

    case Actions.DECREMENT_PRODUCT_QUANTITY: {
      const cartItem = state.selection.find((product) => product.id === action.id);
      if (!cartItem) return state;

      if (cartItem.quantity <= 1) {
        return {
          ...state,
          selection: state.selection.filter(product => product.id !== action.id)
        }
      }

      return {
        ...state,
        selection: state.selection.map((product) =>
          product.id === action.id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      };
    }
    default:
      return state;
  }
};

export default ProductsReducer;
