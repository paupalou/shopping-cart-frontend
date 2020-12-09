import {
  addProductsToCartRequestAction,
  addProductsToCartSuccessAction,
  addProductsToCartFailureAction
} from './actions';

describe('Cart actions', () => {
  it('Add products to cart request action', () => {
    const payload = [
      { id: 1, quantity: 2 },
      { id: 4, quantity: 5 }
    ];
    expect(addProductsToCartRequestAction(payload)).toMatchSnapshot();
  });

  it('Add products to cart success action', () => {
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

    expect(addProductsToCartSuccessAction(payload)).toMatchSnapshot();
  });

  it('Add products to cart failure action', () => {
    expect(addProductsToCartFailureAction()).toMatchSnapshot();
  });
});
