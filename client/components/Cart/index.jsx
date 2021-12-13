/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    'Hard-coded dummy item',
    'Not from a real API call',
  ]);

  const getCart = () => {
    axios.get('/shop/products/1')
      .then((data) => {
        // console.log('The result of Cart get request: ', data.data[0].product_name);
        setCartItems([data.data[0].product_name]);
      })
      .catch((err) => console.log('Cart get request failed: ', err));
  };

  useEffect(getCart, []);

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
