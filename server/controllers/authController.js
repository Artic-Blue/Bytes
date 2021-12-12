const queryDB = require('../../db/queryDB');
const pool = require('../../db/index');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const query = `
      SELECT * FROM users
      WHERE email = '${email}'
      AND password = '${password}'
    `;

    const result = await queryDB(pool, query);

    if (!result.rows.length) {
      throw new Error('User with this email/password combo does not exist');
    }

    const { user_id } = result.rows[0];

    res.send({ user_id });
  } catch (err) {
    res.sendStatus(401);
  }
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
