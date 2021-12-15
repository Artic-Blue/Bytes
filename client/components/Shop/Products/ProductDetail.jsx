import React, { useState, useEffect, useContext } from 'react';
import Select from 'react-dropdown-select';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { Grid, Col } from '@mantine/core';

const ProductDetail = () => {
  const params = useParams();
  const [productDetails, setProductDetails] = useState({});
  const [cartValue, setCartValue] = useState(1);
  const [parsedIngredients, setParsedIngredients] = useState([]);
  const [splitInstructions, setSplitInstructions] = useState([]);

  const getProductDetails = () => {
    axios.get(`http://localhost:3000/shop/product/${params.productId}`)
      .then((result) => {
        console.log(result.data[0]);
        setProductDetails(result.data[0]);
        setParsedIngredients(result.data[0].ingredients);
        setSplitInstructions(result.data[0].instructions.split(/[\n]/));
        console.log('Parsed Ingredients ', result.data[0]);
      })
      .catch((err) => console.log(err));
  };
  useEffect(getProductDetails, []);

  const allowedAmount = productDetails.stock > 9 ? 9 : productDetails.stock;

  const CartForm = styled.form`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600&display=swap');
  height: 12vh;
  width: 20vw;
  position: relative;
  flex-direction: column;
  justify-content: flex-end;
  display: flex;
  font-family: 'Montserrat', sans-serif;
  `;

  const ProductBox = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600&display=swap');
    display: flex;
    width: 90vw;
    justify-content: flex-end;
    font-family: 'Montserrat', sans-serif;
    color: #383634;
    padding: 2vw;

  `;

  const ProductImage = styled.img`
    display: flex;
    width: 65vw;
    object-fit: cover;
`;

  const SideBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 25vw;
    justify-content: space-around;
    padding: 2vw;
  `;

  const StyledSelect = styled.select`
  display: flex;
  width: 100%;
  height: 40px;
  text-align: left;
  padding: 10px;
  border-color: #5FACA8;
  border-radius: 5px;
  border-style: solid;
  cursor: pointer;

  &:hover {
    border-color: #3D8B8E;
    color: #3D8B8E;
  }
  `;

  const ProductName = styled.div`
    display: flex;
    font-size: 1.2rem;
    font-weight: 300;
    `;

  const FarmName = styled.div`
    display: flex;
    font-size: 0.8rem;
    font-weight: 100;
    cursor: pointer;

    &:hover {
      color: #3D8B8E;
    }
    `;

  const PriceAndAmount = styled.div`
    display: flex;
    justify-content: center;
    border-top: 2px solid #CFCECA;
  `;

  const ProductPrice = styled.div`
    display: flex;
    font-size: 1.0rem;
    font-weight: bold;
    flex: 1;
  `;

  const ProductAmount = styled.div`
    display: flex;
    font-size: 1.0rem;
    font-weight: 100;
    flex: 2;
  `;

  const CartBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;

  const QuantityBox = styled.div`
    display: flex;
    font-size: 12px;
    color: #91968A;
    font-weight: bold;
    margin-bottom: 10px;
  `;

  const InputBox = styled.div`
    display: flex;
  `;

  const ButtonBox = styled.div`
    display: flex;
    text-align: center;
    `;

  const CartButton = styled.input`
  display: flex;
  font-size: 12px;
  font-weight: 100;
  border: none;
  color: white;
  background: #5FACA8;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: #3D8B8E;
  }`;

  const IngredientsAndInstructions = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600&display=swap');
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    display: flex;
    padding: 2vw;
    width: 62vw;
  `;

  const InstructionsTitle = styled.div`
    display: flex;
    flex: 1;
    font-size: 12px;
    color: #91968A;
    font-weight: bold;
  `;

  const Instructions = styled.div`
    display: flex;
    flex-direction: column;
    flex: 5;
    color: #383634;
  `;

  const FarmSection = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600&display=swap');
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
  display: flex;
  padding: 2vw;
  width: 62vw;
  border-top: 1px solid #CFCECA;
  `;

  const FarmInfo = styled.div`
    display: flex;
    flex: 5;
    color: #383634
    `;

  const FarmPhoto = styled.img`
    display: flex;
    width: 200px;
    height: 100px;
    object-fit: cover;
  `;

  const FarmBox = styled.div`
    display: flex;
    flex-direction: column;
    flex: 5;
    color: #383634;
    padding: 10px;
  `;

  return (
    <div>
      <ProductBox>
        <ProductImage src={productDetails.image_url} alt="" />
        <SideBox>
          <FarmName>
            <h1>Bytes Family Farms</h1>
          </FarmName>
          <ProductName>
            <h1>{productDetails.product_name}</h1>
          </ProductName>
          <PriceAndAmount>
            <ProductPrice>
              <h1>
                $
                {productDetails.price}
              </h1>
            </ProductPrice>
            <ProductAmount>
              <h1>6 Servings</h1>
            </ProductAmount>
          </PriceAndAmount>
          <CartBox>
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
              <QuantityBox>
                SELECT A QUANTITY
              </QuantityBox>
              <InputBox>
                <StyledSelect defaultValue="1" value={cartValue} onChange={(e) => { setCartValue(e.target.value); }}>
                  {[...Array(allowedAmount).keys()].map((quantity) => (
                    <option>{quantity + 1}</option>
                  ))}

                </StyledSelect>
              </InputBox>
              <ButtonBox>
                <CartButton
                  type="submit"
                  value="ADD TO BASKET"
                />
              </ButtonBox>
            </CartForm>
          </CartBox>
        </SideBox>
      </ProductBox>

      <IngredientsAndInstructions>
        <InstructionsTitle>
          INGREDIENTS
        </InstructionsTitle>
        <Instructions>
          {productDetails.ingredients}
        </Instructions>
      </IngredientsAndInstructions>
      <IngredientsAndInstructions>
        <InstructionsTitle>
          INSTRUCTIONS
        </InstructionsTitle>
        <Instructions>
          {splitInstructions.map((instruction, i) => {
            console.log('Mapping: ', instruction);
            return (
              <div>
                <h3>
                  Step
                  {' '}
                  {i + 1}
                </h3>
                <p>{instruction}</p>
              </div>
            );
          })}
        </Instructions>
      </IngredientsAndInstructions>
      <FarmSection>
        <InstructionsTitle>
          ABOUT THE PRODUCER
        </InstructionsTitle>
        <FarmInfo>
          <FarmPhoto src={productDetails.image_url} alt="" />
          <FarmBox>
            <h3>Bytes Family Farms</h3>
            <p>
              {productDetails.ingredients}
            </p>
          </FarmBox>
        </FarmInfo>
      </FarmSection>
    </div>

  );
};

export default ProductDetail;

// {JSON.parse(productDetails.ingredients).map((ingredient) => (
//   <p>{ingredient}</p>
// ))}

// Instructions:
// {' '}
// productDetails.instructions.split(/[!,?,.]/).map((sentence) => (
//   <p>{sentence}</p>
// ))
