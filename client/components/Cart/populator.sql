

INSERT INTO cart(user_id, product_id, cart_quantity)
 VALUES (1, 1, 1)
 ON CONFLICT (user_id, product_id)
 DO UPDATE SET cart_quantity = cart.cart_quantity + 1;

 INSERT INTO cart(user_id, product_id, cart_quantity)
 VALUES (1, 2, 2)
 ON CONFLICT (user_id, product_id)
 DO UPDATE SET cart_quantity = cart.cart_quantity + 1;

 INSERT INTO cart(user_id, product_id, cart_quantity)
 VALUES (2, 3, 1)
 ON CONFLICT (user_id, product_id)
 DO UPDATE SET cart_quantity = cart.cart_quantity + 1;

 INSERT INTO cart(user_id, product_id, cart_quantity)
 VALUES (1, 4, 1)
 ON CONFLICT (user_id, product_id)
 DO UPDATE SET cart_quantity = cart.cart_quantity + 1;

 INSERT INTO cart(user_id, product_id, cart_quantity)
 VALUES (1, 5, 2)
 ON CONFLICT (user_id, product_id)
 DO UPDATE SET cart_quantity = cart.cart_quantity + 1;

 INSERT INTO cart(user_id, product_id, cart_quantity)
 VALUES (1, 6, 1)
 ON CONFLICT (user_id, product_id)
 DO UPDATE SET cart_quantity = cart.cart_quantity + 1;

 select * from cart;
--  Should display several items in the cart

SELECT products.product_name, products.image_url, products.quantity, products.price,
  cart.cart_quantity
  FROM cart, products
  WHERE cart.user_id = 1
  AND products.product_id = cart.product_id;