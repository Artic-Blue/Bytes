// client/components/Shop/Products/Products.jsx/
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SimpleGrid } from '@mantine/core';
import Sidebar from './Sidebar';
import Banner from './Banner';
import SearchBar from './SearchBar';
import ProductGrid from './ProductGrid';
import {
  Div,
  FlexBoxContainer,
  SidebarContainer,
  SearchAndProductsContainer,
} from './Products.styled';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('Meal');
  const getProducts = () => {
    axios.get(`/api/shop/products/${category}`)
      .then((result) => {
        console.log('success');
        setProducts(result.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(getProducts, [category]);

  return (
    <Div>
      <Banner category={category} />
      <FlexBoxContainer>
        <SidebarContainer>
          <SearchBar setCategory={setCategory} />
          <Sidebar setCategory={setCategory} category={category} />
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
