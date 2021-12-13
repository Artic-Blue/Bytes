import React, { useState, useEffect } from 'react';
import Select from 'react-dropdown-select';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { Grid, Col } from '@mantine/core';

const ProductDetail = () => {
  const params = useParams();
  const [productDetails, setProductDetails] = useState({});
  const [cartValue, setCartValue] = useState(1);

  const getProductDetails = () => {
    axios.get(`http://localhost:3000/shop/products/${params.productId}`)
      .then((result) => {
        console.log(result.data[0]);
        setProductDetails(result.data[0]);
      })
      .catch((err) => console.log(err));
  };
  useEffect(getProductDetails, []);

  const allowedAmount = productDetails.stock > 9 ? 9 : productDetails.stock;

  const CartForm = styled.form`
  height: 12vh;
  width: 35vw;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  `;

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
  width: 100px;
  height: 40px;
  text-align: center;
  `;

  const CartButton = styled.input`
  font-size: 2rem;
  border: none;
  color: white;
  background: #262730;
  width: 25vw;
  height: 7vh;

  &:hover {
    background: #7D8491;
  }`;

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
          <CartForm onSubmit={(event) => {
            event.preventDefault();
            // console.log(params.productId);
            axios.put('http://localhost:3000/shop/cart', {
              userId: 245,
              productId: params.productId,
              quantity: cartValue,
            });
          }}
          >
            <StyledSelect defaultValue="1" value={cartValue} onChange={(e) => { setCartValue(e.target.value); }}>
              {[...Array(allowedAmount).keys()].map((quantity) => (
                <option>{quantity + 1}</option>
              ))}

            </StyledSelect>
            <CartButton
              type="submit"
              value="Add to Basket"
            />
          </CartForm>
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
