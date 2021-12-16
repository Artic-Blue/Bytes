import React from 'react';
import { NavLink } from 'react-router-dom';
import { useUser, useUserUpdate } from '../../context/UserContext';

import Container from './NavBar.styled';

const Nav = () => {
  const loggedIn = useUser() !== null;
  const updateUser = useUserUpdate();

  return (
    <Container>
      <div>
        <NavLink to="/">
          <img alt="logo" src="../images/best-eats-inc.png" />
        </NavLink>
      </div>
      <div>
        <NavLink to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/shop" end activeClassName="active">Shop</NavLink>
        <NavLink to="/shop/farmers" activeClassName="active">Farmers</NavLink>
        <NavLink to="/tracker" activeClassName="active">Lifestyle</NavLink>
        <NavLink to="/cart" activeClassName="active">Cart</NavLink>
        {
          loggedIn
            ? <NavLink to="/" onClick={() => updateUser(null)}>Log Out</NavLink>
            : <NavLink to="/auth" activeClassName="active">Sign Up</NavLink>
        }
      </div>
    </Container>
  );
};

export default Nav;
