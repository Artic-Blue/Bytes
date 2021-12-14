const queryDB = require('../../db/queryDB');
const pool = require('../../db/index');

exports.getCart = async (req, res) => {
  // console.log('Request made and received in controller')
  // const query = 'SELECT * FROM cart';
  const query = 'SELECT products.product_name, products.image_url, products.quantity, products.price, cart.cart_quantity FROM cart, products WHERE cart.user_id = 1 AND products.product_id = cart.product_id';

  try {
    const result = await queryDB(pool, query);

    res.send(result.rows);
  } catch (err) {
    console.log('Error: ', err.message);
    res.sendStatus(500);
  }
};
