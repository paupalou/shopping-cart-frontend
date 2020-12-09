import { createSelector } from 'reselect';

import { ICartDomain } from './model';

export const cartDomain = (state: any): ICartDomain => state.cart;

export const cartLoadingSelector = createSelector(
  cartDomain,
  (domain: ICartDomain): ICartDomain['loading'] => domain.loading
);

export const cartItemsSelector = createSelector(
  cartDomain,
  (domain: ICartDomain): ICartDomain['items'] => domain.items
);

export const cartTotalsSelector = createSelector(
  cartDomain,
  (domain: ICartDomain): { totalWithOffers?: string; total?: string } => {
    const { totalWithOffers, total } = domain;
    return { totalWithOffers, total };
  }
);
