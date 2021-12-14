// client/components/Shop/Sidebar.jsx
import React, { useState } from 'react';

const Sidebar = ({ setCategory }) => {
  const sidebarCategories = [
    'Meals',
    'Produce',
    'Frozen',
    'Canned',
    'Dry Goods & Pasta',
    'Dairy & Eggs',
  ];

  const handleSidebarClick = (event) => {
    if (event.target.value === 'Meals') {
      setCategory('Meal');
    } else {
      setCategory(event.target.value);
    }
  };

  return (
    sidebarCategories.map((item) => (

      <button value={item} onClick={handleSidebarClick}>{item}</button>
    ))
  );
};

export default Sidebar;
