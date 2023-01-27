import express = require('express');
import { Request, Response, Application } from 'express';
import { router } from "./src/routes/router";
const app: Application = express();

app.use("/api", router);
app.get('/api/test',  (_req: Request, res: Response) => {
  return res.status(200).json({ test: 'is working as it should' });
});


export default app;