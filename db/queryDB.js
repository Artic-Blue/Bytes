const queryDB = async (pool, query, reqParams) => {
  const client = await pool.connect();

  try {
    const result = await client.query(query, reqParams);
    return result;
  } catch (err) {
    console.log('Error: ', err);
    throw new Error('Database Error');
  } finally {
    client.release();
  }
};

module.exports = queryDB;
