import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { useUser } from '../../../context/UserContext.jsx';

const ProductDetail = () => {
  const params = useParams();
  const [productDetails, setProductDetails] = useState({});
  const [cartValue, setCartValue] = useState(1);
  const [parsedIngredients, setParsedIngredients] = useState([]);
  const [splitInstructions, setSplitInstructions] = useState([]);
  const user = useUser();

  const getProductDetails = () => {
    axios.get(`http://localhost:3000/shop/product/${params.productId}`)
      .then((result) => {
        setProductDetails(result.data[0]);
        setSplitInstructions(result.data[0].instructions.split(/[\n]/));
        let { ingredients } = result.data[0];
        ingredients = ingredients.split(',');
        ingredients[0] = ingredients[0].substring(1);
        ingredients[ingredients.length - 1] = ingredients[ingredients.length - 1]
          .substring(0, ingredients[ingredients.length - 1].length - 1);
        ingredients.forEach((x, i) => {
          ingredients[i] = ingredients[i].includes('"') ? ingredients[i].replaceAll('"', '').trim() : ingredients[i].replaceAll("'", '').trim();
        });
        setParsedIngredients(ingredients);
      })
      .catch((err) => console.log(err));
  };
  useEffect(getProductDetails, []);

  const allowedAmount = productDetails.stock > 9 ? 9 : productDetails.stock;

  const ProductBox = styled.div`
    display: flex;
    width: 90vw;
    justify-content: flex-end;
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
    font-size: 2.0rem;
    font-weight: bold;
    `;

  const FarmName = styled.div`
    display: flex;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      color: #3D8B8E;
    }
    `;

  const PriceAndAmount = styled.div`
    display: flex;
    justify-content: center;
    border-top: 2px solid #CFCECA;
    padding-top: 30px;

  `;

  const ProductPrice = styled.div`
    display: flex;
    font-size: 2.5rem;
    font-weight: bold;
    flex: 1;
    vertical-align: text-top;

    sup {
      font-size: 1.2rem;
      vertical-align: super;

    }
  `;

  const ProductAmount = styled.div`
    display: flex;
    font-size: 2.0rem;
    font-weight: 100;
    flex: 2;
  `;

  const CartForm = styled.form`
    height: 12vh;
    width: 20vw;
    position: relative;
    flex-direction: column;
    justify-content: flex-end;
    display: flex;
  `;

  const CartBox = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const QuantityBox = styled.div`
    display: flex;
    font-size: 0.9rem;
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
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    color: white;
    text-align: center;
    background: #5FACA8;
    width: 100%;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
    margin-top: 10px;
    &:hover {
      background: #3D8B8E;
    }
    &:active {
      position: relative;
      top: 8px;
  }
  `;

  const DescriptionBox = styled.div`
    font-weight: 200;
    display: flex;
    padding: 2vw;
    width: 62vw;
  `;

  const DescriptionTitle = styled.div`
    display: flex;
    flex: 1;
    font-size: 12px;
    color: #91968A;
    font-weight: bold;
  `;

  const DescriptionBody = styled.div`
    display: flex;
    flex-direction: column;
    flex: 5;
    color: #383634;
    line-height: 1.5em;
    h3 {
      font-weight: bold;
      line-height: 2.5em;
      font-size: 1.2rem;
    }
  `;

  const FarmSection = styled.div`
  font-weight: 200;
  display: flex;
  padding: 2vw;
  width: 62vw;
  border-top: 1px solid #CFCECA;
  margin-bottom: 50px;
  `;

  const FarmInfo = styled.div`
    display: flex;
    flex: 5;
    color: #383634
    `;

  const FarmPhoto = styled.img`
    display: flex;
    width: 25vw;
    object-fit: cover;
    padding-left: 10px;
  `;

  const FarmBox = styled.div`
    display: flex;
    flex-direction: column;
    flex: 5;
    color: #383634;
    padding-left: 25px;
    line-height: 1.5em;
    h3 {
      font-weight: bold;
      font-size: 1.5rem;
      line-height: 2.5em;
    }
  `;

  return (
    <div>
      <ProductBox>
        <ProductImage src={productDetails.image_url} alt="" />
        <SideBox>
          <FarmName>
            <h1>
              {productDetails.farmer_name}
              {' '}
              Farms
            </h1>
          </FarmName>
          <ProductName>
            <h1>{productDetails.product_name}</h1>
          </ProductName>
          <PriceAndAmount>
            <ProductPrice>
              <h1>
                {productDetails.price}
                <sup>99</sup>
              </h1>
            </ProductPrice>
            <ProductAmount>
              <h1>6 Servings</h1>
            </ProductAmount>
          </PriceAndAmount>
          <CartBox>
            <CartForm onSubmit={(event) => {
              event.preventDefault();
              if (user === null) {
                alert('Please log in before adding to cart.');
              } else {
                axios.put('http://localhost:3000/shop/cart', {
                  userId: user,
                  productId: params.productId,
                  quantity: cartValue,
                });
              }
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
      <DescriptionBox>
        <DescriptionTitle>
          INGREDIENTS
        </DescriptionTitle>
        <DescriptionBody>
          <h3>What You Get</h3>
          {parsedIngredients.map((ingredient) => (
            <div>
              <p>{ingredient}</p>
            </div>
          ))}
        </DescriptionBody>
      </DescriptionBox>
      <DescriptionBox>
        <DescriptionTitle>
          INSTRUCTIONS
        </DescriptionTitle>
        <DescriptionBody>
          {splitInstructions.map((instruction, i) => (
            <div>
              <h3>
                Step
                {' '}
                {i + 1}
              </h3>
              <p>{instruction}</p>
            </div>
          ))}
        </DescriptionBody>
      </DescriptionBox>
      <FarmSection>
        <DescriptionTitle>
          ABOUT THE FARMER
        </DescriptionTitle>
        <FarmInfo>
          <FarmPhoto src={productDetails.farmer_url} alt="" />
          <FarmBox>
            <h3>{productDetails.farmer_name}</h3>
            {productDetails.farmer_story}
          </FarmBox>
        </FarmInfo>
      </FarmSection>
    </div>

  );
};

export default ProductDetail;
