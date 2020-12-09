import * as Actions from './actions';
import reducer from './reducer';
import { initialState } from './model';

describe('Products reducer', () => {
  it('FETCH_ALL_PRODUCTS_REQUEST toggle loading flag', () => {
    const action = Actions.fetchAllProductsRequestAction();
    const result = reducer(initialState, action);
    const expected = { ...initialState, loading: true };
    expect(result).toEqual(expected);
  });

  it('FETCH_ALL_PRODUCTS_SUCCESS fill products array', () => {
    const products = [
      { id: 1, name: 'Tomato', customerPrice: 50 },
      { id: 2, name: 'Banana', customerPrice: 90 }
    ];
    const action = Actions.fetchAllProductsSuccessAction(products);
    const result = reducer(initialState, action);
    const expected = { ...initialState, list: products };
    expect(result).toEqual(expected);
  });


  it('handles INCREMENT_ITEM_QUANTITY when no products selected', () => {
    const itemId = 1;
    const action = Actions.incrementProductQuantityAction(itemId);
    const result = reducer(initialState, action);
    const expected = { ...initialState, selection: [{ id: 1, quantity: 1 }] };
    expect(result).toEqual(expected);
  });

  it('handles INCREMENT_ITEM_QUANTITY when product is selected', () => {
    const itemId = 1;
    const action = Actions.incrementProductQuantityAction(itemId);
    const state = { ...initialState, selection: [{ id: 1, quantity: 2 }] };
    const result = reducer(state, action);
    const expected = { ...initialState, selection: [{ id: 1, quantity: 3 }] };
    expect(result).toEqual(expected);
  });

  it('handles INCREMENT_ITEM_QUANTITY when item is not cart', () => {
    const itemId = 2;
    const action = Actions.incrementProductQuantityAction(itemId);
    const state = { ...initialState, selection: [{ id: 1, quantity: 5 }] };
    const result = reducer(state, action);
    const expected = {
      ...initialState,
      selection: [...state.selection, { id: 2, quantity: 1 }]
    };
    expect(result).toEqual(expected);
  });

  it('handles DECREMENT_ITEM_QUANTITY when item is in cart', () => {
    const itemId = 1;
    const action = Actions.decrementProductQuantityAction(itemId);
    const state = { ...initialState, selection: [{ id: 1, quantity: 2 }] };
    const result = reducer(state, action);
    const expected = { ...initialState, selection: [{ id: 1, quantity: 1 }] };
    expect(result).toEqual(expected);
  });

  it('DECREMENT_ITEM_QUANTITY return state when no items in cart', () => {
    const itemId = 1;
    const action = Actions.decrementProductQuantityAction(itemId);
    const result = reducer(initialState, action);
    const expected = initialState;
    expect(result).toEqual(expected);
  });

  it('DECREMENT_ITEM_QUANTITY remove item when item quantity is <= 1', () => {
    const itemId = 1;
    const action = Actions.decrementProductQuantityAction(itemId);
    const state = { ...initialState, selection: [{ id: 1, quantity: 1 }] };
    const result = reducer(state, action);
    expect(result).toEqual(initialState);
  });
});
