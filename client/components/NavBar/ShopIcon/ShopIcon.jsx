import React from 'react';
import styled from 'styled-components';

const ShopIcon = () => {
  function handleClick(e) {
    e.preventDefault();
    alert('You clicked Shop.');
  }

  return (
    <form onClick={handleClick}>
      <button type="submit">Shop</button>
    </form>
  );
};






// (
//   <div>
//     Hello from ShopIcon
//   </div>
// );

export default ShopIcon;
