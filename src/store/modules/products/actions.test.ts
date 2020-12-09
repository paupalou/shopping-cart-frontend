import {
  fetchAllProductsRequestAction,
  fetchAllProductsSuccessAction,
  fetchAllProductsFailureAction,
  incrementProductQuantityAction,
  decrementProductQuantityAction
} from './actions';

describe('Products Actions', () => {
  it('Request action', () => {
    expect(fetchAllProductsRequestAction()).toMatchSnapshot();
  });

  it('Request Success action', () => {
    const products = [
      { id: 1, name: 'Tomato', customerPrice: 50 },
      { id: 2, name: 'Banana', customerPrice: 90 }
    ];

    expect(fetchAllProductsSuccessAction(products)).toMatchSnapshot();
  });

  it('Request Failure action', () => {
    expect(fetchAllProductsFailureAction()).toMatchSnapshot();
  });

  it('Increment quantity action', () => {
    const itemId = 1;
    expect(incrementProductQuantityAction(itemId)).toMatchSnapshot();
  });

  it('Decrement quantity action', () => {
    const itemId = 1;
    expect(decrementProductQuantityAction(itemId)).toMatchSnapshot();
  });
});
