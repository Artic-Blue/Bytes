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

  // from loungeo
  const Div = styled.div`
  height: 95vh;
  width: 95vw;
  position: relative;
  display: flex;
  flex-direction: column;
`;

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
    align-items: flex-start;
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
          <SearchBar setCategory={setCategory} />
        </SidebarContainer>
        <SearchAndProductsContainer>
          <SimpleGrid cols={4} spacing="xl">
            <ProductGrid products={products} />
          </SimpleGrid>
        </SearchAndProductsContainer>

      </FlexBoxContainer>

    </Div>
  );
};

export default ProductList;
