import React from 'react';
import { useSelector } from 'react-redux';

import {
  cartItemsSelector,
  cartLoadingSelector,
  cartTotalsSelector
} from 'store/modules/cart/selectors';
import Modal from 'components/Modal';
import { IModalProps } from 'hooks';
import Spinner from 'components/Spinner';
import { BeforePrice, Item, Offer, Price, Quantity } from './styles';

interface TotalsProps {
  totalWithOffers?: string;
  total?: string;
}

const ItemTotal: React.FC<TotalsProps> = ({ totalWithOffers, total }) => {
  if (totalWithOffers) {
    return (
      <Price>
        <BeforePrice>{total}</BeforePrice>
        <span>{totalWithOffers}</span>
      </Price>
    );
  }
  return (
    <Price>
      <span>{total}</span>
    </Price>
  );
};

export const Cart: React.FC<IModalProps> = ({ isShowing, toggle }) => {
  const cartItems = useSelector(cartItemsSelector);
  const loading = useSelector(cartLoadingSelector);
  const { totalWithOffers, total } = useSelector(cartTotalsSelector);

  return (
    <Modal isShowing={isShowing} hide={toggle} header="Shopping Cart">
      {loading && <Spinner dark />}
      {!loading &&
        cartItems.map((cartItem) => (
          <Item>
            <ItemTotal {...cartItem} />
            <span>{cartItem.name} </span>
            <Quantity>{cartItem.quantity}x</Quantity>
            {cartItem.offers?.map((offer) => (
              <Offer>
                <span className="name">{offer.name}</span>
                <span className="desc">{offer.description}</span>
              </Offer>
            ))}
          </Item>
        ))}
      {!loading && cartItems.length > 0 && (
        <Item total>
          <ItemTotal totalWithOffers={totalWithOffers} total={total} />
          <span>TOTAL</span>
        </Item>
      )}
    </Modal>
  );
};

export default Cart;
