import { IProductsDomain, IProductSelection } from './model';
import { createSelector } from 'reselect';

export const productsDomain = (state: any): IProductsDomain => state.products;

export const productsSelector = createSelector(
  productsDomain,
  (domain: IProductsDomain): IProductsDomain['list'] => domain.list
);

export const productsLoadingSelector = createSelector(
  productsDomain,
  (domain: IProductsDomain): IProductsDomain['loading'] => domain.loading
);

export const productsSelectionSelector = createSelector(
  productsDomain,
  (domain: IProductsDomain): IProductsDomain['selection'] => domain.selection
);

export const productSelectionDomain = (
  state: any,
  props: any
): IProductSelection =>
  state.products.selection.find(
    (product: IProductSelection) => product.id === props.id
  );

export const makeItemQuantitySelector = () =>
  createSelector(
    productSelectionDomain,
    (domain: IProductSelection): IProductSelection['quantity'] =>
      domain?.quantity
  );
