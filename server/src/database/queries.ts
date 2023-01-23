const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'milk',
  password: '477723',
  port: 5432,
})

const getProducts = async () => {
  let response;
  try{
    response = await pool.query('SELECT * FROM products');
    return response.rows;
  }catch(error: any) {
    console.log(error)
  }
  }


export  { getProducts }