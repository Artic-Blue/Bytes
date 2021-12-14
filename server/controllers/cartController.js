const queryDB = require('../../db/queryDB');
const pool = require('../../db/index');

exports.getCart = async (req, res) => {
  console.log('Request made and received in controller')
  const query = 'SELECT * FROM cart';

  try {
    const result = await queryDB(pool, query);

    res.send(result.rows);
  } catch (err) {
    console.log('Error: ', err.message);
    res.sendStatus(500);
  }
};
