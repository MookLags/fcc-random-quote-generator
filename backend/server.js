import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import quoteRoutes from './routes/Quote.js'; 

dotenv.config();

import { connectDB } from './config/db.js';

const app = express();

const __dirname = path.resolve();

app.use(express.json());

app.use("/api/quotes", quoteRoutes);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  })
}

app.listen(5000, () => {
  connectDB();
  console.log("Server started on port 5000.");
});
