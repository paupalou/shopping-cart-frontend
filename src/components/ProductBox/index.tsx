import React from 'react';

import { BoxStyled } from './styles';
import { priceFormatter } from 'helpers';

interface IProductBox {
  name: string;
  customerPrice: number;
  increment: () => void;
  decrement: () => void;
  quantity: number;
}

export const ProductBox: React.FC<IProductBox> = ({
  name,
  customerPrice,
  increment,
  decrement,
  quantity
}) => {
  return (
    <BoxStyled>
      <span className="actions">
        <button data-test-id="increment" onClick={increment}>+</button>
        <button data-test-id="decrement" onClick={decrement} disabled={!quantity}>
          -
        </button>
      </span>
      <span className="price">{priceFormatter.format(customerPrice)}</span>
      <span className="quantity">
        {quantity && ` ${quantity}x`}
      </span>
      <span className="name">{name}</span>
    </BoxStyled>
  );
};

export default ProductBox;
