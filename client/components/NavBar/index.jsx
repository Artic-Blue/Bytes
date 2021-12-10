import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import Form from './Form/Form';
// import List from './List/List';

const NavBar = () => {
  useEffect(() => {
    console.log('NavBar has useEffect');
  }, []);

  return (
    <NavBarDiv>Hello from NavBar</NavBarDiv>
  );
};

const NavBarDiv = styled.div`

`;

export default NavBar;
