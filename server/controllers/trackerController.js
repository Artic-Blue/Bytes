const queryDB = require('../../db/queryDB');
const pool = require('../../db/index');

exports.exampleGet = async (req, res) => {
  // SAMPLE QUERY
  // console.log('I am here in the controller');
  const query = `
    SELECT * FROM products LIMIT 10
  `;

  try {
    const result = await queryDB(pool, query);

    res.send(result.rows);
  } catch (err) {
    res.sendStatus(500);
  }
};

exports.getList = async (req, res) => {
  // SAMPLE QUERY
  console.log('I am here in the get list controller');
  const query = `
    SELECT * FROM tracker
  `;

  try {
    const result = await queryDB(pool, query);

    res.send(result.rows);
  } catch (err) {
    res.sendStatus(500);
  }
};

exports.postListItem = async (req, res) => {
  // SAMPLE QUERY
  const reqParams = [req.body.thoughts, req.body.feeling, req.body.trackDate];
  console.log(reqParams);
  console.log('I am here in the post list item controller');
  const query = `
    INSERT INTO tracker (user_id, thought, feeling_id, track_date) VALUES (2, $1, $2, $3)
  `;

  try {
    const result = await queryDB(pool, query, reqParams);

    res.sendStatus(204);
  } catch (err) {
    res.sendStatus(500);
  }
};