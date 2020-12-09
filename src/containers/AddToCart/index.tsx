import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  productsSelectionSelector
} from 'store/modules/products/selectors';
import { addProductsToCartRequestAction } from 'store/modules/cart/actions';
import { AddToCartButton } from './styles';
import { ReactComponent as CartIcon } from 'shopping-cart.svg';

interface IToggleable {
  toggle: () => void;
}

const AddToCart: React.FC<IToggleable> = ({ toggle }) => {
  const dispatch = useDispatch();
  const productsSelection = useSelector(productsSelectionSelector);

  const addProductsToCard = useCallback(() => {
    dispatch(addProductsToCartRequestAction(productsSelection));
    toggle();
  }, [dispatch, productsSelection, toggle]);

  return (
    <AddToCartButton
      onClick={addProductsToCard}
      disabled={productsSelection.length === 0}
    >
      <CartIcon />
      <span>ADD TO CART</span>
    </AddToCartButton>
  );
};

export default AddToCart;
