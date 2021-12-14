import React from 'react';
import { NavLink } from 'react-router-dom';
import { useUser, useUserUpdate } from '../../context/UserContext';

import Container from './NavBar.styled';

const Nav = () => {
  const user = useUser();
  const updateUser = useUserUpdate();

  return (
    <Container>
      <div>
        <img alt="logo" src="../images/logo.png" />
      </div>
      <div>
        <NavLink to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/shop" activeClassName="active">Shop</NavLink>
        <NavLink to="/tracker" activeClassName="active">Lifestyle</NavLink>
        <NavLink to="/cart" activeClassName="active">Cart</NavLink>
        {
          user === null
            ? <NavLink to="/auth" activeClassName="active">Sign Up</NavLink>
            : <NavLink to="/" onClick={() => updateUser(null)} activeClassName="active">Log Out</NavLink>
        }
      </div>
    </Container>
  );
};

export default Nav;
