// client/components/Shop/Products/Products.jsx/
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { Grid, Col } from '@mantine/core';

const GridFlex = styled.div`
height: 33vh;
width: 200px;
display: flex;
position: relative;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
border-bottom: 1px solid orange;
`;

const PaddedImages = styled.img`
  height: 130px;
  width: 200px;
  box-shadow: 2px 2px 5px darkgrey;
  object-fit: cover;
  cursor: pointer;
`;

const FarmDiv = styled.div`
  color: grey;
`;

const ProductDiv = styled.div`
  font-size: 1.4rem;
  inline-size: 200px;
  overflow-wrap: break-word;
`;

const PriceSpan = styled.span`
font-size: 1.2rem;
font-weight: bold;
color: black;
width: 200px;
position: relative;
display: flex;
flex-direction: row;
justify-content: space-between;
`;

const CartButton = styled.button`
  right: -.8vw;
  top: -.8vh;
  position: absolute;
  font-size: 1rem;
  border: none;
  color: white;
  background: #262730;
  width: 2vw;
  height: 1.5vw;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background: #7D8491;
  }`;

const ProductGrid = ({ products }) => {
  const navigate = useNavigate();
  return (
    products.map((product) => (
      <Col span={24}>
        <GridFlex>
          <div>
            <PaddedImages src={product.image_url} alt="" onClick={() => navigate(`/shop/products/${product.key_product_id}`)} />
            <FarmDiv>
              {product.farmer_name}
              {' '}
              Farms
            </FarmDiv>
          </div>
          <ProductDiv>{product.product_name}</ProductDiv>
          <PriceSpan>
            <span>{product.quantity}</span>
            <span>
              $
              {product.price}
              .99
            </span>
          </PriceSpan>
          <CartButton>
            +
          </CartButton>
        </GridFlex>
      </Col>
    )));
};

export default ProductGrid;
