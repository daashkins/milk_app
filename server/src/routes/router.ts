import express = require('express');
import { Request, Response } from 'express';
import cors from 'cors';
import {getProducts, getProduct, postCart} from '../database/queries'
import { v4 as uuidv4 } from 'uuid';

export const router= express.Router();
const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
    origin: allowedOrigins
  };

//   router.use(cors({
//     origin: "*",
//     methods: 'GET','POST','DELETE','UPDATE','PUT','PATCH'
// }));

  // const corsConf = {
  //   origin: "*",
  //   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  //   preflightContinue: false,
  //   optionsSuccessStatus: 204
  // }
  
  // router.use(cors(corsConf));
  router.use(express.json());
  router.use(cors(options));


  router.get('/products', async (_req: Request, res: Response) => {
    try { 
      const products = await getProducts();
      res.status(200).send(products);
      } catch (error: any) {
          res.status(500).send(error.message);
      }
    }
   );

   router.get('/products/:id', async (_req: Request, res: Response) => {
    const id = _req.params.id;
    try { 
      const product = await getProduct(id);
      res.status(200).send(product);
      } catch (error: any) {
          res.status(500).send(error.message);
      }
    });

    // router.post('/cart', async (_req: Request, res: Response) => {
    //   // const data = _req.body;
    //   const cartId = uuidv4();
    //   try { 
    //     const cart = await postCart(cartId);
    //     // const result = await postProductsInCart(data.cart, cartId)
    //     res.status(200).send("test");
    //     } catch (error: any) {
    //         res.status(500).send("in the development");
    //     }
    //   });
 