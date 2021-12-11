import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Logo from './Logo/Logo';
import HomeIcon from './HomeIcon/HomeIcon';
import LifestyleIcon from './LifestyleIcon/LifestyleIcon';
import ShopIcon from './ShopIcon/ShopIcon';
import CartIcon from './CartIcon/CartIcon';
import Login from './Login/Login';

const NavBar = () => (
  <NavBarDiv>
    <Logo />
    <HomeIcon />
    <ShopIcon />
    <LifestyleIcon />
    <CartIcon />
    <Login />
  </NavBarDiv>
);

const NavBarDiv = styled.div`

`;

export default NavBar;
