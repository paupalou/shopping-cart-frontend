import { initialState } from './model';
import { cartItemsSelector, cartLoadingSelector } from './selectors';

describe('Cart selectors', () => {
  describe('cartItemsSelector', () => {
    it('selects correctly', () => {
      const cartItems = [
        {
          id: 1,
          name: 'Tomato',
          quantity: 2,
          price: '$50.00',
          total: '$100.00'
        },
        {
          id: 2,
          name: 'Banana',
          quantity: 3,
          price: '$75.00',
          total: '$225.00'
        }
      ];
      const inputState = { ...initialState, items: cartItems };

      expect(cartItemsSelector.resultFunc(inputState)).toEqual(cartItems);
    });
  });


  describe('cartLoadingSelector', () => {
    it('selects correctly', () => {
      const inputState = { ...initialState, loading: true };
      expect(cartLoadingSelector.resultFunc(inputState)).toEqual(true);
    });
  });
});
