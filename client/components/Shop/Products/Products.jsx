// client/components/Shop/Products/Products.jsx/
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Grid, Col } from '@mantine/core';

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

  const ExampleStyledComponent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 50px;
  width: calc(100% - 20px);

  img {
    height: 100px;
    width: 100px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    color: blue;
    justify-content: start;
  }
`;

  const PaddedImages = styled.img`
    height: 100px;
    width: 100px;
    object-fit: cover;
`;

  return (
    <div>
      <h2>Products</h2>
      The current category is:
      {' '}
      {currentCategory}
      <Grid>
        <Col span={12} md={6} lg={3}>1</Col>
        <Col span={12} md={6} lg={3}>2</Col>
        <Col span={12} md={6} lg={3}>3</Col>
        <Col span={12} md={6} lg={3}>4</Col>
      </Grid>
      <Grid>
        {products.map((product) => {
          console.log(product.product_name);
          return (
            <Col span={12} md={6} lg={3}>
              <p>{product.product_name}</p>
              <PaddedImages src={product.image_url} alt="" />
            </Col>

          );
        })}
      </Grid>

    </div>
  );
};

export default ProductList;
