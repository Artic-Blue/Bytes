import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../../../context/UserContext.jsx';
import {
  ProductBox,
  ProductImage,
  SideBox,
  StyledSelect,
  ProductName,
  FarmName,
  PriceAndAmount,
  ProductPrice,
  ProductAmount,
  CartForm,
  CartBox,
  QuantityBox,
  InputBox,
  ButtonBox,
  CartButton,
  DescriptionBox,
  DescriptionTitle,
  DescriptionBody,
  FarmSection,
  FarmInfo,
  FarmPhoto,
  FarmBox,
} from './ProductDetail.styled';

const ProductDetail = () => {
  const params = useParams();
  const [productDetails, setProductDetails] = useState({});
  const [cartValue, setCartValue] = useState(1);
  const [parsedIngredients, setParsedIngredients] = useState([]);
  const [splitInstructions, setSplitInstructions] = useState([]);
  const user = useUser();
  const navigate = useNavigate();

  console.log(params);

  const getProductDetails = () => {
    axios.get(`/api/shop/product/${params.productId}`)
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

  return (
    <div>
      <ProductBox>
        <ProductImage src={productDetails.image_url} alt="" />
        <SideBox>
          <FarmName onClick={() => navigate(`/shop/farmers/${productDetails.farmer_id}`)}>
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
                axios.put('/api/shop/cart', {
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
