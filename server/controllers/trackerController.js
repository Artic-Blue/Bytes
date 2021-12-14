const queryDB = require('../../db/queryDB');
const pool = require('../../db/index');

exports.exampleGet = async (req, res) => {
  // SAMPLE QUERY
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
  const reqParams = [req.params.user, req.params.renderAmount];
  const query = `
    SELECT * FROM tracker WHERE user_id=$1 ORDER BY tracker_id DESC LIMIT $2
  `;

  try {
    const result = await queryDB(pool, query, reqParams);

    res.send(result.rows);
  } catch (err) {
    res.sendStatus(500);
  }
};

exports.postListItem = async (req, res) => {
  const reqParams = [req.body.user, req.body.thoughts, req.body.feeling, req.body.trackDate];
  const query = `
    INSERT INTO tracker (user_id, thought, feeling_id, track_date) VALUES ($1, $2, $3, $4)
  `;

  try {
    const result = await queryDB(pool, query, reqParams);

    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(500);
  }
};
