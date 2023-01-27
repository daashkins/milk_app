"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express = require("express");
const cors_1 = __importDefault(require("cors"));
const queries_1 = require("../database/queries");
exports.router = express.Router();
const allowedOrigins = ['http://localhost:3000'];
const options = {
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
exports.router.use(express.json());
exports.router.use((0, cors_1.default)(options));
exports.router.get('/products', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield (0, queries_1.getProducts)();
        res.status(200).send(products);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
exports.router.get('/products/:id', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = _req.params.id;
    try {
        const product = yield (0, queries_1.getProduct)(id);
        res.status(200).send(product);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
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
