// client/components/Shop/Products/Products.jsx/
import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
import axios from 'axios';

const ProductList = ({ currentCategory }) => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios.get('http://localhost:3000/shop/products')
      .then((result) => {
        console.log('success');
        setProducts(result.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(getProducts, []);

  return (
    <div>
      <h2>Products</h2>
      The current category is:
      {' '}
      {currentCategory}
      <div>
        {products.map((product) => {
          console.log(product.product_name);
          return (
            <div>
              <p>{product.product_name}</p>
              <img src={product.image_url} alt="" />
            </div>

          );
        })}
      </div>

    </div>
  );
};

export default ProductList;
