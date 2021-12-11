const queryDB = require('../../db/queryDB');
const pool = require('../../db/index');

exports.exampleGet = async (req, res) => {
  // SAMPLE QUERY
  const query = `
    SELECT * FROM products WHERE categories = 'Meals'
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
