/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useUser } from '../../context/UserContext';

const Cart = () => {
  // const user = useUser();
  // const user = 1;
  const [cartItems, setCartItems] = useState([]);

  const fakeCart = () => {
    axios.get('/shop/products/24')
      .then((data) => {
        if (data) {
          setCartItems([{
            product_name: data.data[0].product_name,
            image_url: data.data[0].image_url,
            price: data.data[0].price,
          }]);
        }
      })
      .catch((err) => {
        console.log('fakeCart request failed: ', err);
      });
  };

  const getCart = () => {
    axios.get('/cart')
      .then((data) => {
        if (data) {
          console.log('Here is what getCart returned: ', data.data);
        }
      })
      .catch((err) => {
        console.log('getCart request failed: ', err);
      });
  };

  useEffect(() => {
    fakeCart();
    getCart();
  }, []);
  // useEffect(getCart, []);

  const cartItemsAsListElements = cartItems.map((item) => (
    <li>
      <div>
        {item.product_name}
      </div>
      <div>
        <img src={item.image_url} alt="None" />
      </div>
      <div>
        {' '}
        $
        {item.price}
      </div>
    </li>
  ));

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
