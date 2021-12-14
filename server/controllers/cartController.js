const queryDB = require('../../db/queryDB');
const pool = require('../../db/index');

exports.getCart = async (req, res) => {
  const query = 'SELECT products.product_name, products.image_url, products.quantity, products.price, cart.cart_quantity FROM cart, products WHERE cart.user_id = 1 AND products.product_id = cart.product_id';

  try {
    const result = await queryDB(pool, query);

    res.send(result.rows);
  } catch (err) {
    res.sendStatus(500);
  }
};
