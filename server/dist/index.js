"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router_1 = require("./src/routes/router");
const app = express();
app.use("/api/products", router_1.router);
app.get('/api/test', (_req, res) => {
    return res.status(200).json({ test: 'is working as it should' });
});
exports.default = app;
