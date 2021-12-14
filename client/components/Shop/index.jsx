// client/components/Shop/index.jsx/
/* eslint-disable react/button-has-type */
import React from 'react';
import ProductList from './Products/Products.jsx';

// needs sidebar component and product list component, state changes from sidebar determine products
const Shop = () => (
  <div>
    <h2>Shop</h2>
    <ProductList />
  </div>
);

export default Shop;
