import React from 'react';
import styled from 'styled-components';

const Login = () => {
  function handleClick(e) {
    e.preventDefault();
    alert('You clicked Login.');
  }

  return (
    <form onClick={handleClick}>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
