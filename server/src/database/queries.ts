const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'milk',
  password: '477723',
  port: 5432,
})

const getProducts = async () => {
  try{
    const response = await pool.query('SELECT * FROM products');
    return response.rows;
  }catch(error: any) {
    console.log(error)
  }
  }

  const getProduct = async (id: string) => {
    try{
     const response = await pool.query(`SELECT * FROM products WHERE id = $1`, [id]);
      return response.rows;
    }catch(error: any) {
      console.log(error)
    }
  }

  // const updateProductQuantity = async (id: string) => {
  //   try{
  //    const response = await pool.query(`SELECT * FROM products WHERE id = $1`, [id]);
  //     return response.rows;
  //   }catch(error: any) {
  //     console.log(error)
  //   }
  // }
export  { getProducts, getProduct }