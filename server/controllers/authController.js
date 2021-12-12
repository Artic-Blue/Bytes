const queryDB = require('../../db/queryDB');
const pool = require('../../db/index');

exports.login = async (req, res) => {
  const { email, password } = req.body;
};

exports.register = async (req, res) => {
  const {
    fname, lname, email, password,
  } = req.body;

  try {
    const checkEmailQuery = `
      SELECT * FROM users
      WHERE email = '${email}'
    `;

    const check = await queryDB(pool, checkEmailQuery);

    if (check.rows.length) {
      throw new Error('User with this email already exists');
    }

    const addUserQuery = `
      INSERT INTO users (first_name, last_name, email, password)
      VALUES ($1, $2, $3, $4)
      RETURNING user_id;
    `;

    const result = await queryDB(pool, addUserQuery, [fname, lname, email, password]);

    res.send(result.rows[0]);
  } catch (err) {
    res.sendStatus(403);
  }
};
