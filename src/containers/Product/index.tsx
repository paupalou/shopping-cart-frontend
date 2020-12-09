import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeItemQuantitySelector } from 'store/modules/products/selectors';
import {
  decrementProductQuantityAction,
  incrementProductQuantityAction
} from 'store/modules/products/actions';
import { IProduct } from 'store/modules/products/model';
import ProductBox from 'components/ProductBox';

const Product: React.FC<IProduct> = ({ id, children, ...productProps }) => {
  const dispatch = useDispatch();
  const selectItemQuantity = useMemo(makeItemQuantitySelector, []);
  const itemQuantity = useSelector((state) =>
    selectItemQuantity(state, { id })
  );

  const incrementProductQuantity = useCallback(() => {
    dispatch(incrementProductQuantityAction(id));
  }, [dispatch, id]);

  const decrementProductQuantity = useCallback(() => {
    dispatch(decrementProductQuantityAction(id));
  }, [dispatch, id]);

  const quantityProps = {
    increment: incrementProductQuantity,
    decrement: decrementProductQuantity,
    quantity: itemQuantity
  };

  return <ProductBox {...productProps} {...quantityProps} />;
};

export default Product;
