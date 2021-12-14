/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useUser } from '../../context/UserContext';

const Cart = () => {
  // const user = useUser();
  // const user = 1;
  const [cartItems, setCartItems] = useState([]);

  const getCart = () => {
    axios.get('/cart')
      .then((data) => {
        if (data) {
          setCartItems(data.data);
        }
      })
      .catch((err) => {
        console.log('getCart request failed: ', err);
      });
  };

  useEffect(getCart, []);

  const cartItemsAsListElements = cartItems.map((item) => (
    <li>
      <div>
        {item.product_name}
      </div>
      <div>
        Size--
        {'  '}
        {item.quantity}
      </div>
      <div>
        Quantity of This Item in Your Cart--
        {'  '}
        {item.cart_quantity}
      </div>
      <div>
        Price for Each--
        {'  '}
        $
        {item.price}
        .00
      </div>
      <div>
        Total Price for This Item--
        {'  '}
        $
        {parseInt(item.cart_quantity, 10) * parseInt(item.price, 10)}
        .00
      </div>
      <div>
        <img src={item.image_url} alt="None" />
      </div>
    </li>
  ));

  function checkOut(e) {
    e.preventDefault();
    alert('Stay tuned! Future versions of this app will allow customers to check out and pay for their food items.');
  }

  return (
    <div>
      <h2>Your Cart --</h2>
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
