const queryDB = async (pool, query) => {
  const client = await pool.connect();

  try {
    const result = await client.query(query);
    return result;
  } catch (err) {
    console.log('Error: ', err);
    throw new Error('Database Error');
  } finally {
    client.release();
  }
};

module.exports = queryDB;
