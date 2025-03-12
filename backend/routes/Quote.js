import express from 'express';
import { getQuotes, createQuote, getRandomQuote } from '../controllers/Quote.js';

const router = express.Router();

router.get("/", getQuotes);
router.post("/", createQuote);
router.get("/random", getRandomQuote);

export default router;
