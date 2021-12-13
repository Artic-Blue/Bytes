import React, { useState, useEffect } from 'react';
import Select from 'react-dropdown-select';
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
        console.log(result.data[0]);
        setProductDetails(result.data[0]);
      })
      .catch((err) => console.log(err));
  };
  useEffect(getProductDetails, []);

  const ProductBox = styled.div`
    display: flex;
    width: 100vw;
    justify-content: flex-end;
    background-color: grey;
  `;

  const ProductImage = styled.img`
    display: flex;
    width: 50vw;
    object-fit: cover;
`;

  const SideBox = styled.div`
    display: flex;
    flex-direction: column;
    background-color: yellow;
    color: green;
    width: 50vw;
    justify-content: space-around;
  `;

  const StyledSelect = styled.select`
  width: 5vw;
  height: 7vh;
  text-align: center;
  `;

  return (
    <div>
      <ProductBox>
        <ProductImage src={productDetails.image_url} alt="" />
        <SideBox>
          <h1>{productDetails.product_name}</h1>
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
          <div>
            <StyledSelect defaultValue="1" />

            <button onClick={() => alert('Clicked')}>Add to Basket</button>
          </div>
        </SideBox>
      </ProductBox>

      <div>
        <p>
          Ingredients:
          {' '}
          {productDetails.ingredients}
        </p>
        <p>
          Instructions:
          {' '}
          {productDetails.instructions}
        </p>
      </div>
    </div>

  );
};

export default ProductDetail;
