// client/components/Shop/Sidebar.jsx
import React from 'react';
import {
  SidebarItem,
  SelectedSidebarItem,
} from './Sidebar.styled';

const Sidebar = ({ setCategory, category }) => {
  const sidebarCategories = [
    'Meals',
    'Produce',
    'Frozen',
    'Canned',
    'Dry Goods',
    'Dairy',
  ];

  const handleSidebarClick = (event) => {
    if (event.target.innerText === 'Meals') {
      setCategory('Meal');
    } else {
      setCategory(event.target.innerText);
    }
  };

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
