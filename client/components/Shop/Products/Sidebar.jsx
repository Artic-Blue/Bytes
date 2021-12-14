// client/components/Shop/Sidebar.jsx
import React, { useState } from 'react';

const Sidebar = ({ setCategory }) => {
  const sidebarCategories = [
    'Meal',
    'Produce',
    'Frozen',
    'Canned',
    'Dry Goods & Pasta',
    'Dairy & Eggs',
  ];

  // ['Beverages', 'Canned Food', 'Fruits', 'Vegetables', ]

  const handleSidebarClick = (event) => {
    setCategory(event.target.value);
    // axios.get(`http://localhost:3000/shop/products/`)
  };

  return (
    sidebarCategories.map((item) => (

      <button value={item} onClick={handleSidebarClick}>{item}</button>

    ))
  );
};

export default Sidebar;
