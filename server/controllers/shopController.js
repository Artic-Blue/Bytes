const queryDB = require('../../db/queryDB');
const pool = require('../../db/index');

exports.getProducts = async (req, res) => {
  // SAMPLE QUERY
  const query = `
    SELECT * FROM products WHERE categories = 'Meal'
  `;

  try {
    const result = await queryDB(pool, query);

    res.send(result.rows);
  } catch (err) {
    console.log('Error: ', err.message);
    res.sendStatus(500);
  }
};

exports.GetProductDetails = async (req, res) => {
  const { id } = req.params;
  const query = `
    SELECT * FROM products WHERE product_id = ${id}
  `;

  try {
    const result = await queryDB(pool, query);

    res.send(result.rows);
  } catch (err) {
    res.sendStatus(500);
  }
};

exports.postCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;
  const query = `
    SELECT cart_quantity FROM cart WHERE user_id = ${userId} && product_id = ${productId}
  `;
  const query2 = `
  INSERT INTO cart(user_id, product_id, cart_quantity) VALUES (${userId}, ${productId}, ${quantity})
`;
  try {
    const result = await queryDB(pool, query);
    console.log(result);
    quantity += await result.rows.cart_quantity;
    await queryDB(pool, query2);
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(500);
  }
};
