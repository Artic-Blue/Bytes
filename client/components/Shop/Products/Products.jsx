// client/components/Shop/Products/Products.jsx/
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { SimpleGrid, Col } from '@mantine/core';
import Sidebar from './Sidebar.jsx';
import Banner from './Banner.jsx';
import SearchBar from './SearchBar.jsx';
import ProductGrid from './ProductGrid.jsx';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('Meal');
  const getProducts = () => {
    axios.get(`http://localhost:3000/shop/products/${category}`)
      .then((result) => {
        console.log('success');
        setProducts(result.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(getProducts, [category]);

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

  const FlexBoxContainer = styled.div`
    display: flex;
    width: 95vw;
    position: relative;
  `;

  const SidebarContainer = styled.div`
    display: flex;
    width: 15%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
  `;
  const SearchAndProductsContainer = styled.div`
    display: flex;
    width: 85%;
    height: 100%;
    flex-direction: column;
  `;

  return (
    <Div>
      <Banner category={category} />
      <FlexBoxContainer>
        <SidebarContainer>
          <Sidebar setCategory={setCategory} category={category} />
        </SidebarContainer>
        <SearchAndProductsContainer>
          <SearchBar setCategory={setCategory} />
          Showing:
          {' '}
          {category === 'Meal' ? 'Meals' : category}
          <SimpleGrid cols={4} spacing="xl">
            <ProductGrid products={products} />
          </SimpleGrid>
        </SearchAndProductsContainer>

      </FlexBoxContainer>

    </Div>
  );
};

export default ProductList;
