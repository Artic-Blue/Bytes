import React from 'react';
import { NavLink } from 'react-router-dom';
import { useUser, useUserUpdate } from '../../context/UserContext';

const Nav = () => {
  const user = useUser();
  const updateUser = useUserUpdate();

  return (
    <div>
      <div>
        Logo Here
      </div>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/tracker">Lifestyle</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        {
          user === null
            ? <NavLink to="/auth">Sign Up</NavLink>
            : <NavLink to="/" onClick={() => updateUser(null)}>Log Out</NavLink>
        }
      </div>
    </div>
  );
};

export default Nav;
