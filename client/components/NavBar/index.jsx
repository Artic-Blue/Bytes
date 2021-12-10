import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Logo from './Logo/Logo';
import HomeIcon from './HomeIcon/HomeIcon';
import LifestyleIcon from './LifestyleIcon/LifestyleIcon';
import ShopIcon from './ShopIcon/ShopIcon';
import Login from './Login/Login';

const NavBar = () => {
  useEffect(() => {
    console.log('NavBar has useEffect');
  }, []);

  return (
    <NavBarDiv>
      <Logo />
      <HomeIcon />
      <ShopIcon />
      <LifestyleIcon />
      <Login />
    </NavBarDiv>
  );
};

const NavBarDiv = styled.div`

`;

export default NavBar;
