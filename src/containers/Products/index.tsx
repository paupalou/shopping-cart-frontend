import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  productsSelector,
  productsLoadingSelector
} from 'store/modules/products/selectors';
import { fetchAllProductsRequestAction } from 'store/modules/products/actions';
import Product from 'containers/Product';
import Cart from 'containers/Cart';
import AddToCart from 'containers/AddToCart';

import ProductList from 'components/ProductList';
import Spinner from 'components/Spinner';
import { useModal } from 'hooks';

export const Products: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector(productsLoadingSelector);
  const products = useSelector(productsSelector);
  const { isShowing, toggle } = useModal();

  useEffect(() => {
    dispatch(fetchAllProductsRequestAction());
  }, [dispatch]);

  return (
    <ProductList>
      {loading && <Spinner />}
      {!loading && products.length > 0 && (
        <>
          {products.map((product) => (
            <Product {...product} key={`product|${product.id}`} />
          ))}
          <AddToCart toggle={toggle} />
          <Cart isShowing={isShowing} toggle={toggle} />
        </>
      )}
    </ProductList>
  );
};

export default Products;
