import React from 'react';
import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';

const CartIcon = () => (
  <div>
    <NavLink to="/cart">Cart</NavLink>
  </div>
);

export default CartIcon;