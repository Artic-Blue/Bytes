/* eslint-disable no-alert */
import React from 'react';

const Cart = () => {
  const cartItems = [
    'Milk',
    'Strawberries',
    'Avocados',
  ];
  const cartItemsAsListElements = cartItems.map((item) => <li>{item}</li>);

  function checkOut(e) {
    e.preventDefault();
    alert('Stay tuned! Future versions of this app will allow customers to check out and pay for their food items.');
  }

  return (
    <div>
      <h2>Cart</h2>
      <h2>These are the items in your cart-- </h2>
      <ul>
        {cartItemsAsListElements}
      </ul>
      <form onSubmit={checkOut}>
        <button type="submit">Check Out and Pay</button>
      </form>

    </div>
  );
};

export default Cart;
