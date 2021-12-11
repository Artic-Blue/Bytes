const queryDB = require('../../db/queryDB');
const pool = require('../../db/index');

exports.exampleGet = async (req, res) => {
  // SAMPLE QUERY
  const query = `
    SELECT * FROM products LIMIT 10 OFFSET 100
  `;

  try {
    const result = await queryDB(pool, query);

    res.send(result.rows);
  } catch (err) {
    console.log('Error: ', err.message);
    res.sendStatus(500);
  }
};
