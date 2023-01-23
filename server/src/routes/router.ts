import express = require('express');
import { Request, Response } from 'express';
import cors from 'cors';
import {getProducts} from '../database/queries'

export const router = express.Router();
const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
    origin: allowedOrigins
  };
  router.use(express.json());
  router.use(cors(options));


  router.get('/', async (_req: Request, res: Response) => {
    try { 
      const products = await getProducts();
      res.status(200).send(products);
      } catch (error: any) {
          res.status(500).send(error.message);
      }
    }
   );