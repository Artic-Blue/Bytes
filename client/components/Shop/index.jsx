// client/components/Shop/index.jsx/
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import ProductList from './Products/Products.jsx';
import Sidebar from './Sidebar.jsx';

// needs sidebar component and product list component, state changes from sidebar determine products
const Shop = () => {
  const [category, setCategory] = useState('Produce');

  const sidebarCategories = [
    'Produce',
    'Dairy & Eggs',
    'Frozen',
    'Deli',
    'Bakery',
    'Dry Goods & Pasta',
    'Meat',
    'Baking',
  ];

  const handleSidebarClick = (event) => {
    setCategory(event.target.value);
  };

  const renderSidebar = sidebarCategories.map((item) => (

    <button value={item} onClick={handleSidebarClick}>{item}</button>

  ));

  return (
    <div>
      <h2>Sidebar</h2>
      {renderSidebar}
      <h2>Shop</h2>
      <ProductList currentCategory={category} />
    </div>
  );
};

export default Shop;
