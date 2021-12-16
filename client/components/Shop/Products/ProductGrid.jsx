// client/components/Shop/Products/Products.jsx/
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Col } from '@mantine/core';
import {
  GridFlex,
  PaddedImages,
  FarmDiv,
  ProductDiv,
  PriceSpan,
  CartButton,
} from './ProductGrid.styled';

const ProductGrid = ({ products }) => {
  const navigate = useNavigate();
  return (
    products.map((product) => (
      <Col span={24}>
        <GridFlex>
          <div>
            <PaddedImages src={product.image_url} alt="" onClick={() => navigate(`/shop/products/${product.key_product_id}`)} />
            <FarmDiv onClick={() => navigate(`/shop/farmers/${product.farmer_id}`)}>
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
