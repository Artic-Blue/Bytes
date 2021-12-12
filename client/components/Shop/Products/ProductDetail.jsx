import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { Grid, Col } from '@mantine/core';

const ProductDetail = () => {
  const params = useParams();
  const [productDetails, setProductDetails] = useState({});

  const getProductDetails = () => {
    axios.get(`http://localhost:3000/shop/products/${params.productId}`)
      .then((result) => {
        console.log(result.data);
        setProductDetails(result.data[0]);
      })
      .catch((err) => console.log(err));
  };
  useEffect(getProductDetails, []);

  const PaddedImages = styled.img`
    height: 100px;
    width: 160px;
    object-fit: cover;
`;

  return (
    <div>
      <h2>Product Details</h2>
      <p>
        ID:
        {' '}
        {productDetails.product_id}
      </p>
      <p>
        Name:
        {' '}
        {productDetails.product_name}
      </p>
      <p>
        Quantity:
        {' '}
        {productDetails.quantity}
      </p>
      <p>
        Categories:
        {' '}
        {productDetails.categories}
      </p>
      <p>
        Ingredients:
        {' '}
        {productDetails.ingredients_text}
      </p>
      <p>
        Photo:
        {' '}
        {productDetails.image_url}
      </p>
      <p>
        Farmer ID:
        {' '}
        {productDetails.farmer_id}
      </p>
      <h2>Hello World</h2>
    </div>

  );
};

export default ProductDetail;
