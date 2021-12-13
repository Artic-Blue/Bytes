// client/components/Shop/Products/Products.jsx/
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { Grid, Col } from '@mantine/core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    width: 160px;
    object-fit: cover;
`;
  // from loungeo
  const Div = styled.div`
  height: 95vh;
  width: 95vw;
  position: relative;
  display: flex;
  flex-direction: column;
`;
  const Img = styled.img`
  box-shadow: 2px 2px 5px darkgrey;
  position: absolute;
  height: 90vh;
  width: 35vw;
  object-fit: cover;
  cursor: -webkit-zoom-in;
`;
  // const Button = styled(FontAwesomeIcon)`
  // position: absolute;
  // font-size: 4.5vh;
  // cursor: pointer;
  // z-index: 10;
  // color: #F8F0FB;
  // -webkit-text-stroke: 1vh white;
  // opacity: 50%;
  // &:hover {
  //   opacity: 100;
  // }
  // `;

  const navigate = useNavigate();

  return (
    <Div>
      <h2>Products</h2>
      The current category is:
      {' '}
      {currentCategory}
      <Grid>
        {products.map((product) => {
          console.log(product.product_id);
          return (
            <Col span={6} sm={3} md={3} lg={3} onClick={() => navigate(`/shop/products/${product.product_id}`)}>
              <p>{product.product_name}</p>
              <PaddedImages src={product.image_url} alt="" />
            </Col>

          );
        })}
      </Grid>

    </Div>
  );
};

export default ProductList;
