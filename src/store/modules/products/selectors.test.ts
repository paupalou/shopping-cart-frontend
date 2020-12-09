import { initialState } from './model';
import { productsSelector, productsLoadingSelector, productsSelectionSelector } from './selectors';

describe('Products selectors', () => {
  describe('productsSelector', () => {
    it('selects correctly', () => {
      const products = [
        { id: 1, name: 'Tomato', customerPrice: 50 },
        { id: 2, name: 'Banana', customerPrice: 90 }
      ];
      const inputState = { ...initialState, list: products };
      expect(productsSelector.resultFunc(inputState)).toEqual(products);
    });
  });

  describe('productsLoadingSelector', () => {
    it('selects correctly', () => {
      const products = [
        { id: 1, name: 'Tomato', customerPrice: 50 },
        { id: 2, name: 'Banana', customerPrice: 90 }
      ];
      const inputState = { ...initialState, loading: true, list: products };
      expect(productsLoadingSelector.resultFunc(inputState)).toEqual(true);
    });
  });


  describe('productsSelectionSelector', () => {
    it('selects correctly', () => {
      const productsSelected = [
        { id: 1, name: 'Tomato', quantity: 5 },
        { id: 2, name: 'Banana', quantity: 3 }
      ];
      const inputState = { ...initialState, selection: productsSelected };
      expect(productsSelectionSelector.resultFunc(inputState)).toEqual(productsSelected);
    });
  });
});
