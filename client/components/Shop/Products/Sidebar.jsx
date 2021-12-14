// client/components/Shop/Sidebar.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const Sidebar = ({ setCategory, category }) => {
  const sidebarCategories = [
    'Meals',
    'Produce',
    'Frozen',
    'Canned',
    'Dry Goods & Pasta',
    'Dairy & Eggs',
  ];

  const handleSidebarClick = (event) => {
    console.log('clicked!');
    console.log(event.target.innerText);
    if (event.target.innerText === 'Meals') {
      setCategory('Meal');
    } else {
      setCategory(event.target.innerText);
    }
  };

  const SidebarItem = styled.p`
    textAlign: left;
    cursor: pointer;
  `;

  const SelectedSidebarItem = styled.p`
    textAlign: left;
    font-weight: bold;
    `;

  return (
    sidebarCategories.map((item) => (
      item === category || (item === 'Meals' && category === 'Meal') ? (
        <SelectedSidebarItem value={item}>{item}</SelectedSidebarItem>
      ) : (
        <SidebarItem value={item} onClick={handleSidebarClick}>{item}</SidebarItem>
      )
    ))
  );
};

export default Sidebar;
