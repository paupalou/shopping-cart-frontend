import * as Actions from './actions';
import reducer from './reducer';
import { initialState } from './model';

describe('Counter reducer', () => {
  it('ADD_PRODUCT_TO_CART_REQUEST toggle loading flag', () => {
    const selection = [{ id: 1, quantity: 2 }];
    const action = Actions.addProductsToCartRequestAction(selection);
    const result = reducer(initialState, action);
    const expected = { ...initialState, loading: true };
    expect(result).toEqual(expected);
  });

  it('ADD_PRODUCT_TO_CART_SUCCESS fill items array and returns a total', () => {
    const payload = {
      items: [
        {
          id: 1,
          name: 'Soup',
          quantity: 2,
          price: '$100.00',
          total: '$200.00'
        }
      ],
      loading: false,
      error: false,
      total: '$200.00'
    };
    const action = Actions.addProductsToCartSuccessAction(payload);
    const result = reducer(initialState, action);
    const expected = { ...initialState, ...payload };
    expect(result).toEqual(expected);
  });
});
