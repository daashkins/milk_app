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

  // const postCart = async (id: string) => {
  //   try{
  //    const response = await pool.query(`INSERT INTO carts VALUES (${id}) `)
  //    console.log(response.rows);
  //     return response.rows;
  //   }catch(error: any) {
  //     console.log(error)
  //   }
  // }

  // const postProductsInCart = (cart: any, cartId: string) => {
  //   console.log(cart, "db");
  //   // try{
  //   // cart.map(async (item: { id: any; quantity: any; }) => {
  //   //   console.log(item)
  //   //  await pool.query(`INSERT INTO ordered_products(product_id, cart_id, quantity_in_cart)  VALUES ((SELECT id from products WHERE id=${item.id}), (SELECT cart_id from carts WHERE cart_id=${cartId}), ${item.quantity})`)
  //   // })
  //   // } catch(error: any) {
  //   // console.log(error)
  //   // }
  // }

export  { getProducts, getProduct }