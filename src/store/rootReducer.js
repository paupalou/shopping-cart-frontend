import { combineReducers } from 'redux';

import counterReducer from './modules/counter/reducer';
import productReducer from './modules/products/reducer';
import cartReducer from './modules/cart/reducer';

export default combineReducers({
  counter: counterReducer,
  products: productReducer,
  cart: cartReducer
});
