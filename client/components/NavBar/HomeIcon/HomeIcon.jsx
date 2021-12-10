import React from 'react';
import styled from 'styled-components';

const HomeIcon = () => {
  function handleClick(e) {
    e.preventDefault();
    alert('You clicked Home.');
  }

  return (
    <form onClick={handleClick}>
      <button type="submit">Home</button>
    </form>
  );
};

export default HomeIcon;
