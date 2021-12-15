const queryDB = require('../../db/queryDB');
const pool = require('../../db/index');

exports.getProducts = async (req, res) => {
  const { category } = req.params;
  const query = `
    SELECT products.product_id AS key_product_id, * FROM products LEFT JOIN farmers ON products.farmer_id = farmers.farmer_id LEFT JOIN cart ON products.product_id = cart.product_id WHERE categories LIKE '%${category}%'
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
  SELECT products.product_id AS key_product_id, * FROM products LEFT JOIN farmers ON products.farmer_id = farmers.farmer_id LEFT JOIN cart ON products.product_id = cart.product_id WHERE products.product_id = ${id}
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
  INSERT INTO cart(user_id, product_id, cart_quantity) VALUES (${userId}, ${productId}, ${quantity}) ON CONFLICT (user_id, product_id) DO UPDATE SET cart_quantity = cart.cart_quantity + ${quantity}
`;
  try {
    await queryDB(pool, query);
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(500);
  }
};

exports.getFarmerDetails = async (req, res) => {
  const { id } = req.params;
  const query = `
    SELECT * FROM farmers WHERE farmers.farmer_id = ${id}
  `;

  try {
    const result = await queryDB(pool, query);
    res.send(result.rows);
  } catch (err) {
    console.log('Error: ', err.message);
    res.sendStatus(500);
  }
};