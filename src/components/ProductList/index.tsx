import React from 'react';

import { ListStyled } from './styles';

const ProductList: React.FC = ({ children }) => {
  return (
    <ListStyled>
      <h1>PRODUCTS</h1>
      {children}
    </ListStyled>
  );
};

export default ProductList;
