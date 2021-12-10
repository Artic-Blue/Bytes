import React from 'react';
import styled from 'styled-components';

const LifestyleIcon = () => {
  function handleClick(e) {
    e.preventDefault();
    alert('You clicked Lifestyle.');
  }

  return (
    <form onClick={handleClick}>
      <button type="submit">Lifestyle</button>
    </form>
  );
};

export default LifestyleIcon;
